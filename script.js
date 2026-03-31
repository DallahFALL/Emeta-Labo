/* * PROJET : e-META LABS
 * FICHIER : script.js (Engine Make & FedaPay + Wow Effect Multilingue + UX Premium)
 */

const WEBHOOK_URL = "https://hook.eu2.make.com/moupzawutk6h7ab6f5ap2li1qaypzh2f"; 

window.addEventListener('load', () => {
    const counterElement = document.getElementById('live-counter');
    if (counterElement) {
        let currentCount = 1380;
        const targetCount = 1423; 
        const interval = setInterval(() => {
            currentCount++;
            counterElement.innerText = currentCount.toLocaleString();
            if (currentCount >= targetCount) { clearInterval(interval); }
        }, 30); 
    }
});

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function setCustomMessage(input) {
    const lang = document.documentElement.lang || 'fr';
    const messages = {
        fr: { required: "Veuillez remplir ce champ.", email: "Email invalide.", checkbox: "Veuillez cocher.", whatsapp: "Validation WhatsApp requise." },
        en: { required: "Please fill this out.", email: "Invalid email.", checkbox: "Please check this.", whatsapp: "WhatsApp consent required." },
        es: { required: "Por favor complete este campo.", email: "Email inválido.", checkbox: "Por favor marque esta casilla.", whatsapp: "Consentimiento WhatsApp requerido." },
        ar: { required: "يرجى ملء هذا الحقل.", email: "بريد غير صالح.", checkbox: "يرجى تحديد هذا المربع.", whatsapp: "موافقة الواتساب مطلوبة." }
    };
    input.setCustomValidity('');
    if (!input.validity.valid) {
        if (input.validity.valueMissing) {
            if (input.id === 'whatsapp-consent') input.setCustomValidity(messages[lang].whatsapp || messages.fr.whatsapp);
            else if (input.type === 'checkbox') input.setCustomValidity(messages[lang].checkbox || messages.fr.checkbox);
            else input.setCustomValidity(messages[lang].required || messages.fr.required);
        }
        else if (input.validity.typeMismatch && input.type === 'email') {
            input.setCustomValidity(messages[lang].email || messages.fr.email);
        }
    }
    return true;
}

function nextStep(targetStep) {
    if (targetStep === 2 && !validateStep1()) return;
    if (targetStep === 3 && !validateStep2()) return;
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
}

function validateStep1() {
    const company = document.getElementById('company');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    if (!company.checkValidity()) { company.reportValidity(); return false; }
    if (!email.checkValidity()) { email.reportValidity(); return false; }
    if (!phone.checkValidity()) { phone.reportValidity(); return false; }
    return true;
}

function validateStep2() {
    const sector = document.querySelector('input[name="sector"]:checked');
    const geo = document.getElementById('geo-zone');
    if (!sector) { alert("Veuillez sélectionner un Secteur Stratégique."); return false; }
    if (sector.value === 'other') {
        const customInput = document.getElementById('custom-sector-input');
        if (!customInput || !customInput.value.trim()) {
            alert("Veuillez préciser votre industrie sur-mesure.");
            if(customInput) customInput.focus();
            return false;
        }
    }
    if (geo.value === "") { geo.setCustomValidity("Veuillez sélectionner une zone."); geo.reportValidity(); return false; }
    return true;
}

function resetForm() {
    const lang = document.documentElement.lang || 'fr';
    const msg = (lang === 'fr') ? "Voulez-vous vraiment recommencer ?" : "Do you really want to restart?";
    if(confirm(msg)) {
        const form = document.getElementById('diagnosticForm');
        if (form) form.reset();
        const customSectorContainer = document.getElementById('custom-sector-container');
        if (customSectorContainer) customSectorContainer.style.display = 'none';
        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
        const step1 = document.getElementById('step-1');
        if (step1) step1.classList.add('active');
        const glassCard = document.querySelector('.glass-card');
        if (glassCard) glassCard.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Fichiers
    const fileInput = document.getElementById('clientFile');
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    if (fileInput && fileNameDisplay) {
        fileInput.addEventListener('change', function() {
            if (this.files && this.files.length > 0) {
                fileNameDisplay.textContent = this.files[0].name;
                fileNameDisplay.style.color = '#d4af37';
            } else {
                fileNameDisplay.textContent = "Aucun fichier sélectionné";
                fileNameDisplay.style.color = '#8892b0';
            }
        });
    }

    // Modals
    const privacyModal = document.getElementById('privacyOverlay');
    const openPrivacyBtn = document.getElementById('openPrivacy');
    if (openPrivacyBtn && privacyModal) {
        openPrivacyBtn.addEventListener('click', (e) => { e.preventDefault(); privacyModal.style.display = 'flex'; });
        document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btn => { btn.addEventListener('click', () => { privacyModal.style.display = 'none'; }); });
    }

    const guideModal = document.getElementById('guideOverlay');
    const openGuideBtn = document.getElementById('openGuide');
    if (openGuideBtn && guideModal) {
        openGuideBtn.addEventListener('click', (e) => { e.preventDefault(); guideModal.style.display = 'flex'; });
        document.querySelectorAll('.close-guide, .close-guide-btn').forEach(btn => { btn.addEventListener('click', () => { guideModal.style.display = 'none'; }); });
    }

    const resultModal = document.getElementById('resultModal');
    if (resultModal) {
        document.querySelector('.close-result').addEventListener('click', () => { resultModal.style.display = 'none'; });
    }
    
    // Secteur Sur-Mesure
    const sectorRadios = document.querySelectorAll('input[name="sector"]');
    const customSectorContainer = document.getElementById('custom-sector-container');
    const customSectorInput = document.getElementById('custom-sector-input');
    if (sectorRadios.length > 0 && customSectorContainer) {
        sectorRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.value === 'other') {
                    customSectorContainer.style.display = 'block';
                    customSectorInput.focus();
                } else {
                    customSectorContainer.style.display = 'none';
                    customSectorInput.value = '';
                }
            });
        });
    }
});

// ==========================================
// MOTEUR PRINCIPAL : SOUMISSION & ROUTAGE PAYTECH.SN
// ==========================================
const form = document.getElementById('diagnosticForm');
if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // 1. Validations de sécurité
        const whatsappConsent = document.getElementById('whatsapp-consent');
        if (!whatsappConsent.checked) { setCustomMessage(whatsappConsent); whatsappConsent.reportValidity(); return; }
        const consent = document.getElementById('consent');
        if (!consent.checked) { setCustomMessage(consent); consent.reportValidity(); return; }

        const submitBtn = document.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        
        // 2. Radar IA (Effet Wow)
        form.style.display = 'none';
        const wowLoader = document.getElementById('emeta-loader');
        const statusText = document.getElementById('emeta-status');
        if (wowLoader) wowLoader.style.display = 'block';

        const currentLang = document.documentElement.lang || 'fr';
        
        // 3. Préparation du Colis de Données
        let fileData = null; let fileName = null;
        const fileInput = document.getElementById('clientFile');
        if (fileInput && fileInput.files.length > 0) {
            try { fileData = await getBase64(fileInput.files[0]); fileName = fileInput.files[0].name; } 
            catch (error) { console.error(error); }
        }

        let finalSector = document.querySelector('input[name="sector"]:checked')?.value || "Non spécifié";
        if (finalSector === 'other') {
            const customInput = document.getElementById('custom-sector-input');
            finalSector = customInput ? customInput.value.trim() : "Sur-mesure non précisé";
        }

        const planChoisi = document.getElementById('plan_choisi').value;
        const formData = {
            plan: planChoisi,
            timestamp: new Date().toISOString(),
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            whatsapp_optin: true,
            sector: finalSector, 
            geoZone: document.getElementById('geo-zone').value,
            expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
            context: document.getElementById('context').value,
            lang: currentLang,
            attachedFileName: fileName,
            attachedFileBase64: fileData 
        };

        // 4. ENVOI À MAKE.COM & REDIRECTION PAYTECH
        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => {
            // Note: On n'attend plus le PDF ici, on envoie payer tout de suite
            if (response.ok) {
                if (statusText) statusText.innerText = "Données sécurisées. Redirection vers le paiement...";
                
                setTimeout(() => {
                    if (planChoisi === 'pro') {
                        // REMPLACEZ PAR VOTRE LIEN PAYTECH PRO
                        window.location.href = "VOTRE_LIEN_PAYTECH_PRO_ICI";
                    } else if (planChoisi === 'expert') {
                        // REMPLACEZ PAR VOTRE LIEN PAYTECH EXPERT
                        window.location.href = "VOTRE_LIEN_PAYTECH_EXPERT_ICI";
                    } else {
                        // MODE STARTER (GRATUIT) : On affiche le succès directement
                        if (wowLoader) {
                            wowLoader.innerHTML = `
                                <div style="font-size: 50px; margin-bottom: 15px;">✅</div>
                                <h3 style="color: #d4af37; font-family: 'Cinzel', serif;">Analyse en cours</h3>
                                <p style="color: #8892b0; margin-bottom: 25px;">Vos données sont transmises. Vérifiez votre email dans quelques minutes.</p>
                                <button onclick="location.reload()" class="btn-outline">Nouvelle Analyse</button>
                            `;
                        }
                    }
                }, 1500);
            } else { throw new Error('Erreur Webhook'); }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert("Erreur de connexion. Veuillez réessayer.");
            location.reload();
        });
    });
}
