/* * PROJET : e-META LABS
 * FICHIER : script.js (Engine Make & Validations + Wow Effect Multilingue + UX Premium + Smart Sector)
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
    
    // Vérification de sécurité pour le champ Sur-Mesure
    if (sector.value === 'other') {
        const customInput = document.getElementById('custom-sector-input');
        if (!customInput || !customInput.value.trim()) {
            alert("Veuillez préciser votre industrie sur-mesure dans le champ apparu.");
            if(customInput) customInput.focus();
            return false;
        }
    }

    if (geo.value === "") {
        geo.setCustomValidity("Veuillez sélectionner une zone.");
        geo.reportValidity();
        return false;
    }
    return true;
}

// Fonction de réinitialisation du formulaire (Ajoutée pour corriger le bouton Reset)
function resetForm() {
    const lang = document.documentElement.lang || 'fr';
    const msg = (lang === 'fr') ? "Voulez-vous vraiment recommencer ?" : "Do you really want to restart?";
    if(confirm(msg)) {
        const form = document.getElementById('diagnosticForm');
        if (form) form.reset();
        
        // Cacher le champ sur-mesure si ouvert
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

    // 2. Gestion des Modaux (Confidentialité, Guide, Résultat)
    const privacyModal = document.getElementById('privacyOverlay');
    const openPrivacyBtn = document.getElementById('openPrivacy');
    if (openPrivacyBtn && privacyModal) {
        openPrivacyBtn.addEventListener('click', (e) => { e.preventDefault(); privacyModal.style.display = 'flex'; });
        document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btn => {
            btn.addEventListener('click', () => { privacyModal.style.display = 'none'; });
        });
    }

    const guideModal = document.getElementById('guideOverlay');
    const openGuideBtn = document.getElementById('openGuide');
    if (openGuideBtn && guideModal) {
        openGuideBtn.addEventListener('click', (e) => { e.preventDefault(); guideModal.style.display = 'flex'; });
        document.querySelectorAll('.close-guide, .close-guide-btn').forEach(btn => {
            btn.addEventListener('click', () => { guideModal.style.display = 'none'; });
        });
    }

    const resultModal = document.getElementById('resultModal');
    if (resultModal) {
        document.querySelector('.close-result').addEventListener('click', () => { resultModal.style.display = 'none'; });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === privacyModal) privacyModal.style.display = 'none';
        if (e.target === guideModal) guideModal.style.display = 'none';
        if (e.target === resultModal) resultModal.style.display = 'none';
    });

    // ==========================================
    
        const currentTr = tr[docLang] || tr.fr;
        autreText.innerText = currentTr.btn;
        customLabel.innerText = currentTr.label;
        customInputTr.placeholder = currentTr.ph;
        
        // Ajustement visuel RTL pour l'arabe
        if(docLang === 'ar') {
            customInputTr.style.textAlign = 'right';
            customInputTr.dir = 'rtl';
        }
    }

    // ==========================================
    // 4. MAGIE DU BOUTON "SUR-MESURE" (Affichage)
    // ==========================================
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
        
        form.style.display = 'none';
        
        const wowLoader = document.getElementById('emeta-loader');
        const statusText = document.getElementById('emeta-status');
        const oldLoadingOverlay = document.getElementById('loadingOverlay'); 
        
        if (wowLoader) wowLoader.style.display = 'block';
        else if (oldLoadingOverlay) oldLoadingOverlay.style.display = 'flex';

        const currentLang = document.documentElement.lang || 'fr';

        // TRADUCTION DU TITRE DU LOADER
        const loaderTitle = document.getElementById('loader-title');
        if (loaderTitle) {
            const titles = {
                fr: "MOTEUR e-META LABS ACTIVÉ",
                en: "e-META LABS ENGINE ACTIVATED",
                es: "MOTOR e-META LABS ACTIVADO",
                ar: "تم تنشيط محرك e-META LABS"
            };
            loaderTitle.innerText = titles[currentLang] || titles.fr;
        }
        
        const allLoadingSteps = {
            fr: [
                "Analyse sémantique du contexte...", "Corrélation avec les données sectorielles...",
                "Génération des matrices stratégiques Gemini...", "Cryptographie SHA-256 en cours...",
                "Ancrage sur la Blockchain (Woleet)...", "Mise en page du rapport PDF confidentiel...", "Finalisation sécurisée..."
            ],
            en: [
                "Semantic context analysis...", "Correlation with sectoral data...",
                "Generating Gemini strategic matrices...", "SHA-256 cryptography in progress...",
                "Anchoring on the Blockchain (Woleet)...", "Formatting confidential PDF report...", "Secure finalization..."
            ],
            es: [
                "Análisis semántico del contexto...", "Correlación con datos sectoriales...",
                "Generando matrices estratégicas Gemini...", "Criptografía SHA-256 en curso...",
                "Anclaje en la Blockchain (Woleet)...", "Formateando el informe PDF confidencial...", "Finalización segura..."
            ],
            ar: [
                "التحليل الدلالي للسياق...", "الارتباط بالبيانات القطاعية...",
                "إنشاء المصفوفات الاستراتيجية للذكاء الاصطناعي...", "تشفير SHA-256 قيد التقدم...",
                "التوثيق على البلوكشين (Woleet)...", "تنسيق تقرير PDF السري...", "الانتهاء الآمن..."
            ]
        };
        
        const loadingSteps = allLoadingSteps[currentLang] || allLoadingSteps['fr'];
        let stepIndex = 0;
        
        const textInterval = setInterval(() => {
            if (stepIndex < loadingSteps.length) {
                if (statusText) statusText.innerText = loadingSteps[stepIndex];
                else {
                    const oldText = document.getElementById('loadingText');
                    if(oldText) oldText.innerText = loadingSteps[stepIndex];
                }
                stepIndex++;
            }
        }, 1800); 

        // ==========================================
        // PRÉPARATION DES DONNÉES ET ENVOI API
        // ==========================================

        let fileData = null;
        let fileName = null;
        const fileInput = document.getElementById('clientFile');
        if (fileInput && fileInput.files.length > 0) {
            if (fileInput.files[0].size > 2.5 * 1024 * 1024) {
                alert("Pour garantir une analyse IA ultra-rapide, le fichier ne doit pas dépasser 2.5 Mo.");
                submitBtn.disabled = false;
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

        // Récupération intelligente du secteur
        let finalSector = document.querySelector('input[name="sector"]:checked')?.value || "Non spécifié";
        if (finalSector === 'other') {
            const customInput = document.getElementById('custom-sector-input');
            finalSector = customInput ? customInput.value.trim() : "Sur-mesure non précisé";
        }

        const formData = {
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

        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(async response => {
            clearInterval(textInterval); 

            if (response.ok) {
                const aiResponse = await response.text(); 
                const isTimeout = aiResponse.trim() === "Accepted";
                const pdfUrl = isTimeout ? "#" : aiResponse;
                
                // ⚠️ LIEN CALENDLY (VOTRE AGENDA)
                const calendlyUrl = "https://calendly.com/e-metalabs/30min";
                
                const uiTexts = {
                    fr: {
                        successTitle: "Audit Généré & Sécurisé", successDesc: "Le sceau cryptographique a été appliqué. L'analyse est terminée.",
                        newAnalysis: "Nouvelle analyse", popupSubtitle: "Les algorithmes e-META LABS ont finalisé le traitement de vos données.",
                        timeoutWarning: "⏳ <strong>Analyse Complexe Terminée.</strong><br>Votre matrice stratégique est en cours d'ancrage. Le rapport PDF certifié va arriver <strong>directement dans votre boîte email</strong> d'ici 1 à 2 minutes.",
                        downloadBtn: "📄 TÉLÉCHARGER L'AUDIT (PDF)", nextStep: "NEXT STEP",
                        debriefingTitle: "Débriefing Exécutif", debriefingDesc: "L'IA a posé les fondations analytiques. Passez à l'exécution avec un Senior Partner e-META LABS.",
                        calendlyBtn: "📅 RÉSERVER MON DÉBRIEFING (45 MIN)"
                    },
                    en: {
                        successTitle: "Audit Generated & Secured", successDesc: "The cryptographic seal has been applied. The analysis is complete.",
                        newAnalysis: "New Analysis", popupSubtitle: "e-META LABS algorithms have finalized your data processing.",
                        timeoutWarning: "⏳ <strong>Complex Analysis Completed.</strong><br>Your strategic matrix is being anchored. The certified PDF report will arrive <strong>directly in your inbox</strong> in 1 to 2 minutes.",
                        downloadBtn: "📄 DOWNLOAD AUDIT (PDF)", nextStep: "NEXT STEP",
                        debriefingTitle: "Executive Debriefing", debriefingDesc: "AI has laid the analytical foundations. Move to execution with an e-META LABS Senior Partner.",
                        calendlyBtn: "📅 BOOK MY DEBRIEFING (45 MIN)"
                    },
                    es: {
                        successTitle: "Auditoría Generada y Asegurada", successDesc: "El sello criptográfico ha sido aplicado. El análisis ha finalizado.",
                        newAnalysis: "Nuevo Análisis", popupSubtitle: "Los algoritmos de e-META LABS han finalizado el procesamiento de sus datos.",
                        timeoutWarning: "⏳ <strong>Análisis Complejo Completado.</strong><br>Su matriz estratégica está siendo anclada. El informe PDF certificado llegará <strong>directamente a su correo electrónico</strong> en 1 o 2 minutos.",
                        downloadBtn: "📄 DESCARGAR AUDITORÍA (PDF)", nextStep: "NEXT STEP",
                        debriefingTitle: "Debriefing Ejecutivo", debriefingDesc: "La IA ha sentado las bases analíticas. Pase a la ejecución con un Senior Partner de e-META LABS.",
                        calendlyBtn: "📅 RESERVAR MI DEBRIEFING (45 MIN)"
                    },
                    ar: {
                        successTitle: "تم إنشاء التدقيق وتأمينه", successDesc: "تم تطبيق الختم المشفر. اكتمل التحليل.",
                        newAnalysis: "تحليل جديد", popupSubtitle: "لقد أنهت خوارزميات e-META LABS معالجة بياناتك.",
                        timeoutWarning: "⏳ <strong>اكتمل التحليل المعقد.</strong><br>يتم الآن تثبيت مصفوفتك الاستراتيجية. سيصل تقرير PDF المعتمد <strong>مباشرة إلى بريدك الإلكتروني</strong> في غضون دقيقة إلى دقيقتين.",
                        downloadBtn: "📄 تحميل التدقيق (PDF)", nextStep: "الخطوة التالية",
                        debriefingTitle: "استخلاص المعلومات التنفيذية", debriefingDesc: "لقد وضع الذكاء الاصطناعي الأسس التحليلية. انتقل إلى التنفيذ مع شريك رئيسي من e-META LABS.",
                        calendlyBtn: "📅 حجز جلستي (45 دقيقة)"
                    }
                };

                const t = uiTexts[currentLang] || uiTexts.fr;

                if (wowLoader) {
                    wowLoader.innerHTML = `
                        <div style="font-size: 50px; margin-bottom: 15px; text-shadow: 0 0 15px rgba(212, 175, 55, 0.5);">✅</div>
                        <h3 style="color: #d4af37; font-family: 'Cinzel', serif; font-weight: bold;">${t.successTitle}</h3>
                        <p style="font-size: 16px; color: #8892b0; margin-bottom: 25px;">${t.successDesc}</p>
                        <button onclick="location.reload()" class="btn-outline" style="padding: 10px 20px;">${t.newAnalysis}</button>
                    `;
                }

                let pdfHtmlContent = "";
                if (isTimeout) {
                    pdfHtmlContent = `
                        <div style="background: rgba(212, 175, 55, 0.05); border: 1px dashed #d4af37; padding: 15px; border-radius: 4px; margin-bottom: 30px;">
                            <p style="color: #d4af37; font-size: 0.95rem; margin: 0;">${t.timeoutWarning}</p>
                        </div>
                    `;
                } else {
                    pdfHtmlContent = `
                        <a href="${pdfUrl}" target="_blank" style="display: block; width: 100%; background: #d4af37; color: #0a192f; font-weight: bold; text-align: center; text-decoration: none; margin-bottom: 30px; padding: 15px; font-size: 1.1rem; border-radius: 4px; box-shadow: 0 0 15px rgba(212, 175, 55, 0.4); box-sizing: border-box;">
                            ${t.downloadBtn}
                        </a>
                    `;
                }

                const resultBody = document.getElementById('resultBody');
                if(resultBody) {
                    resultBody.innerHTML = `
                        <div style="text-align: center; margin-top: 10px;">
                            <p style="color: #8892b0; font-size: 0.95rem; margin-bottom: 25px;">${t.popupSubtitle}</p>
                            ${pdfHtmlContent}
                            <div style="border-top: 1px solid rgba(212, 175, 55, 0.2); margin: 30px 0 25px 0; position: relative;">
                                <span style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #0a192f; padding: 0 15px; color: #d4af37; font-family: 'Cinzel', serif; font-size: 0.9rem;">
                                    ${t.nextStep}
                                </span>
                            </div>
                            <h4 style="color: #e6f1ff; font-family: 'Cinzel', serif; margin-bottom: 10px; font-size: 1.2rem;">${t.debriefingTitle}</h4>
                            <p style="font-size: 0.85rem; color: #8892b0; margin-bottom: 20px;">${t.debriefingDesc}</p>
                            <a href="${calendlyUrl}" target="_blank" style="display: block; width: 100%; background: transparent; border: 2px solid #25D366; color: #25D366; padding: 12px; text-decoration: none; border-radius: 4px; font-weight: bold; text-transform: uppercase; transition: 0.3s; box-shadow: 0 0 15px rgba(37, 211, 102, 0.15); box-sizing: border-box; text-align: center;">
                                ${t.calendlyBtn}
                            </a>
                        </div>
                    `;
                }
                const resModal = document.getElementById('resultModal');
                if(resModal) {
                    setTimeout(() => { resModal.style.display = 'flex'; }, 1000);
                }
                
                submitBtn.innerText = t.successTitle;
            } else {
                throw new Error('Erreur serveur');
            }
        })
        .catch(error => {
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
