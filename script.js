/* * PROJET : e-META LABS
 * FICHIER : script.js (Engine Make & Validations + Wow Effect Multilingue)
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
            if (currentCount >= targetCount) {
                clearInterval(interval);
            }
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
            if (input.id === 'whatsapp-consent') {
                input.setCustomValidity(messages[lang].whatsapp || messages.fr.whatsapp);
            } else if (input.type === 'checkbox') {
                input.setCustomValidity(messages[lang].checkbox || messages.fr.checkbox);
            } else {
                input.setCustomValidity(messages[lang].required || messages.fr.required);
            }
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
    if (!sector) {
        alert("Veuillez sélectionner un Secteur Stratégique.");
        return false;
    }
    if (geo.value === "") {
        geo.setCustomValidity("Veuillez sélectionner une zone.");
        geo.reportValidity();
        return false;
    }
    return true;
}

function resetForm() {
    const lang = document.documentElement.lang || 'fr';
    const msg = (lang === 'fr') ? "Voulez-vous vraiment recommencer ?" : "Do you really want to restart?";
    if(confirm(msg)) {
        document.getElementById('diagnosticForm').reset();
        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
        document.getElementById('step-1').classList.add('active');
        document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Nom de Fichier
    const fileInput = document.getElementById('clientFile');
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    if (fileInput && fileNameDisplay) {
        fileInput.addEventListener('change', function() {
            if (this.files && this.files.length > 0) {
                fileNameDisplay.textContent = this.files[0].name;
                fileNameDisplay.style.color = '#d4af37';
            } else {
                const lang = document.documentElement.lang || 'fr';
                const defaultTexts = { fr: "Aucun fichier sélectionné", en: "No file selected", es: "Ningún archivo seleccionado", ar: "لم يتم تحديد أي ملف" };
                fileNameDisplay.textContent = defaultTexts[lang] || defaultTexts.fr;
                fileNameDisplay.style.color = '#8892b0';
            }
        });
    }

    // 2. Gestion de la Politique de Confidentialité (Modal)
    const privacyModal = document.getElementById('privacyOverlay');
    const openPrivacyBtn = document.getElementById('openPrivacy');
    if (openPrivacyBtn && privacyModal) {
        openPrivacyBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            privacyModal.style.display = 'flex';
        });
        document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btn => {
            btn.addEventListener('click', () => { privacyModal.style.display = 'none'; });
        });
    }

    // 3. Gestion du Guide des Expertises (Modal)
    const guideModal = document.getElementById('guideOverlay');
    const openGuideBtn = document.getElementById('openGuide');
    if (openGuideBtn && guideModal) {
        openGuideBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            guideModal.style.display = 'flex';
        });
        document.querySelectorAll('.close-guide, .close-guide-btn').forEach(btn => {
            btn.addEventListener('click', () => { guideModal.style.display = 'none'; });
        });
    }

    // 4. Modal Résultat IA
    const resultModal = document.getElementById('resultModal');
    if (resultModal) {
        document.querySelector('.close-result').addEventListener('click', () => {
            resultModal.style.display = 'none';
        });
    }
    
    // Fermeture des modaux au clic extérieur
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) privacyModal.style.display = 'none';
        if (e.target === guideModal) guideModal.style.display = 'none';
        if (e.target === resultModal) resultModal.style.display = 'none';
    });
});

const form = document.getElementById('diagnosticForm');
if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validations finales
        const whatsappConsent = document.getElementById('whatsapp-consent');
        if (!whatsappConsent.checked) {
            setCustomMessage(whatsappConsent);
            whatsappConsent.reportValidity();
            return;
        }

        const consent = document.getElementById('consent');
        if (!consent.checked) {
            setCustomMessage(consent);
            consent.reportValidity();
            return;
        }

        const submitBtn = document.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        
        // ==========================================
        // DÉBUT DE L'EFFET WOW (UX/UI DYNAMIQUE)
        // ==========================================
        
        // 1. Cacher le formulaire pour faire place au loader
        form.style.display = 'none';
        
        // 2. Afficher l'écran de chargement (le nouvel ID ou l'ancien en fallback)
        const wowLoader = document.getElementById('emeta-loader');
        const statusText = document.getElementById('emeta-status');
        const oldLoadingOverlay = document.getElementById('loadingOverlay'); // Fallback
        
        if (wowLoader) wowLoader.style.display = 'block';
        else if (oldLoadingOverlay) oldLoadingOverlay.style.display = 'flex';

        // Détection de la langue pour l'animation
        const currentLang = document.documentElement.lang || 'fr';
        
        // Textes d'attente psychologiques traduits
        const allLoadingSteps = {
            fr: [
                "Analyse sémantique du contexte...",
                "Corrélation avec les données sectorielles...",
                "Génération des matrices stratégiques Gemini...",
                "Cryptographie SHA-256 en cours...",
                "Ancrage sur la Blockchain (Woleet)...",
                "Mise en page du rapport PDF confidentiel...",
                "Finalisation sécurisée..."
            ],
            en: [
                "Semantic context analysis...",
                "Correlation with sectoral data...",
                "Generating Gemini strategic matrices...",
                "SHA-256 cryptography in progress...",
                "Anchoring on the Blockchain (Woleet)...",
                "Formatting confidential PDF report...",
                "Secure finalization..."
            ],
            es: [
                "Análisis semántico del contexto...",
                "Correlación con datos sectoriales...",
                "Generando matrices estratégicas Gemini...",
                "Criptografía SHA-256 en curso...",
                "Anclaje en la Blockchain (Woleet)...",
                "Formateando el informe PDF confidencial...",
                "Finalización segura..."
            ],
            ar: [
                "التحليل الدلالي للسياق...",
                "الارتباط بالبيانات القطاعية...",
                "إنشاء المصفوفات الاستراتيجية للذكاء الاصطناعي...",
                "تشفير SHA-256 قيد التقدم...",
                "التوثيق على البلوكشين (Woleet)...",
                "تنسيق تقرير PDF السري...",
                "الانتهاء الآمن..."
            ]
        };
        
        const loadingSteps = allLoadingSteps[currentLang] || allLoadingSteps['fr'];
        let stepIndex = 0;
        
        // Animation du texte
        const textInterval = setInterval(() => {
            if (stepIndex < loadingSteps.length) {
                // Met à jour le Wow Loader ou l'ancien overlay
                if (statusText) statusText.innerText = loadingSteps[stepIndex];
                else {
                    const oldText = document.getElementById('loadingText');
                    if(oldText) oldText.innerText = loadingSteps[stepIndex];
                }
                stepIndex++;
            }
        }, 1800); // Change de phrase toutes les 1.8 secondes

        // ==========================================
        // PRÉPARATION DES DONNÉES ET ENVOI API
        // ==========================================

        // Préparation du fichier (Base64) avec limite de 2.5 Mo
        let fileData = null;
        let fileName = null;
        const fileInput = document.getElementById('clientFile');
        if (fileInput && fileInput.files.length > 0) {
            if (fileInput.files[0].size > 2.5 * 1024 * 1024) {
                alert("Pour garantir une analyse IA ultra-rapide, le fichier ne doit pas dépasser 2.5 Mo.");
                submitBtn.disabled = false;
                
                // RESTAURATION SI ERREUR DE TAILLE
                form.style.display = 'block'; 
                if(wowLoader) wowLoader.style.display = 'none';
                if(oldLoadingOverlay) oldLoadingOverlay.style.display = 'none';
                clearInterval(textInterval);
                return;
            }
            try {
                fileData = await getBase64(fileInput.files[0]);
                fileName = fileInput.files[0].name;
            } catch (error) {
                console.error("Erreur lecture fichier", error);
            }
        }

        const formData = {
            timestamp: new Date().toISOString(),
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            whatsapp_optin: true,
            sector: document.querySelector('input[name="sector"]:checked')?.value || "Non spécifié",
            geoZone: document.getElementById('geo-zone').value,
            expertises: Array.from(document.querySelectorAll('input[name="expertise"]:checked')).map(cb => cb.value),
            context: document.getElementById('context').value,
            lang: currentLang,
            attachedFileName: fileName,
            attachedFileBase64: fileData 
        };

        // Envoi à Make.com
        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(async response => {
            clearInterval(textInterval); // Stopper le défilement des phrases

            if (response.ok) {
                const aiResponse = await response.text();
                
                // 1. TRANSFORMATION DU LOADER EN ÉCRAN DE SUCCÈS (Le climax du Wow Effect)
                if (wowLoader) {
                    wowLoader.innerHTML = `
                        <div style="font-size: 50px; margin-bottom: 15px;">✅</div>
                        <h3 style="color: #28a745; font-family: 'Arial', sans-serif;">Audit Généré & Sécurisé</h3>
                        <p style="font-size: 16px; color: #555; margin-bottom: 25px;">Un exemplaire PDF certifié a été expédié à votre adresse email.</p>
                        <button onclick="location.reload()" style="padding: 12px 25px; background: #002D62; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Réaliser une nouvelle analyse</button>
                    `;
                } else if (oldLoadingOverlay) {
                    oldLoadingOverlay.style.display = 'none';
                }

                // 2. OUVERTURE DU POPUP POUR LECTURE RAPIDE DE L'IA
                const resultBody = document.getElementById('resultBody');
                if(resultBody) {
                    // On injecte directement le texte brut de Make dans le corps du popup
                    resultBody.innerHTML = aiResponse;
                }
                const resModal = document.getElementById('resultModal');
                if(resModal) {
                    // On affiche le popup après 1 seconde pour laisser le client voir le ✅ vert
                    setTimeout(() => {
                        resModal.style.display = 'flex';
                    }, 1000);
                }
                
                submitBtn.innerText = "Analyse Terminée";
            } else {
                throw new Error('Erreur serveur');
            }
        })
        .catch(error => {
            // RESTAURATION DU FORMULAIRE EN CAS D'ÉCHEC
            clearInterval(textInterval);
            form.style.display = 'block';
            if(wowLoader) wowLoader.style.display = 'none';
            if(oldLoadingOverlay) oldLoadingOverlay.style.display = 'none';
            
            console.error('Erreur:', error);
            alert("Erreur de connexion avec le serveur IA. Veuillez réessayer.");
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        });
    });
}
