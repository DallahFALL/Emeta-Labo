// ==========================================
// CONFIGURATION GLOBALE
// ==========================================
const WEBHOOK_URL = "https://hook.eu2.make.com/moupzawutk6h7ab6f5ap2li1qaypzh2f";

// ==========================================
// DICTIONNAIRE MULTILINGUE INTÉGRAL (100% Zéro Woleet)
// ==========================================
const uiDict = {
    fr: {
        loaderTitle: "MOTEUR e-META LABS ACTIVÉ", loadInit: "Initialisation de la connexion sécurisée...", loadSuccess: "Données sécurisées. Redirection...",
        load1: "Analyse sémantique du contexte...", load2: "Corrélation avec les données sectorielles...", load3: "Génération des matrices stratégiques...", load4: "Transmission cryptée vers l'IA...",
        errFile: "Pour garantir une analyse ultra-rapide, le fichier ne doit pas dépasser 2.5 Mo.", errNet: "Impossible de joindre le serveur e-META LABS. Veuillez vérifier votre connexion.",
        lblReq: "Ce champ est obligatoire.", lblEmail: "Veuillez entrer un email valide.", lblCheck: "Vous devez accepter cette condition pour continuer.",
        alertSec: "Veuillez sélectionner un Secteur Stratégique.", alertCus: "Veuillez préciser votre industrie sur-mesure.", alertGeo: "Veuillez sélectionner une zone.",
        resTitle: "Analyse Validée", resFree: "Votre diagnostic STARTER a été transmis à l'IA. Il vous sera envoyé par email/WhatsApp d'ici 5 minutes.",
        resPaid: "Paiement validé avec succès. L'IA génère actuellement votre audit premium. Vous le recevrez par email et WhatsApp d'ici quelques minutes.", resBtn: "Nouvelle Analyse",
        consent: "J'accepte la", linkPrivacy: "Charte de Souveraineté et de Confidentialité Officielle", waOptin: "J'accepte de recevoir mon analyse stratégique par <strong style='color:#25D366; text-shadow: 0 0 5px rgba(37, 211, 102, 0.4);'>WhatsApp</strong>.",
        privTitle: "Charte de Souveraineté & Confidentialité", privClose: "Accepter & Fermer",
        privContent: `
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">1. Identité et Opérations</h4>
            <p style="margin-bottom:20px;">e-META LABS SASU opère en tant qu'unité d'intelligence stratégique internationale. L'accès au domaine <strong>e-meta.app</strong> est strictement réservé aux phases de laboratoire restreint, tandis que <strong>e-metalabs.com</strong> constitue l'interface publique de déploiement.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">2. Collecte et Traitement des Données</h4>
            <p style="margin-bottom:20px;">Le Moteur e-META collecte exclusivement les données nécessaires à la calibration du diagnostic.<br><strong>Finalité :</strong> Génération d'audits, de rapports de risques et de stratégies de pivot.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">3. Souveraineté et Intelligence Artificielle</h4>
            <p style="margin-bottom:20px;">Nous garantissons une étanchéité totale entre vos données et les bases d'entraînement publiques.<br><strong>Non-Apprentissage :</strong> Aucune donnée client n'est utilisée pour entraîner ou améliorer les modèles d'IA globaux. Votre avantage compétitif est préservé par une architecture de "Zero-Data Retention".</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">4. Ancrage Blockchain et Propriété Intellectuelle</h4>
            <p style="margin-bottom:20px;">Pour garantir la protection absolue de vos idées et concepts, tout document téléversé sur notre plateforme est instantanément haché cryptographiquement (algorithme SHA-256). Cette empreinte numérique unique est ancrée sur la blockchain publique via le protocole <strong>OpenTimestamps (OTS)</strong>. Cela vous octroie une preuve d'antériorité numérique irréfutable (Proof of Existence) à valeur légale internationale, sans que nous n'ayons besoin de stocker le fichier d'origine sur nos serveurs à long terme.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">5. Clause de Non-Substitution</h4>
            <p style="margin-bottom:20px;">Les résultats produits par le Moteur e-META LABS constituent des outils d'aide à la décision stratégique basés sur l'analyse de probabilités et de données sémantiques. Ils ne constituent en aucun cas des conseils juridiques, fiscaux, médicaux ou financiers certifiés.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">6. Contact et Droits Internationaux</h4>
            <p style="margin-bottom:20px;">Conformément aux législations internationales sur la protection des données, tout utilisateur dispose d'un droit d'accès, de rectification et de suppression immédiate de ses données.<br><strong>DPO (Data Protection Officer) :</strong> support@e-metalabs.com</p>`
    },
    en: {
        loaderTitle: "e-META LABS ENGINE ACTIVATED", loadInit: "Initializing secure connection...", loadSuccess: "Data secured. Redirecting...",
        load1: "Semantic context analysis...", load2: "Sectoral data correlation...", load3: "Generating strategic matrices...", load4: "Encrypted transmission to AI...",
        errFile: "To ensure ultra-fast analysis, the file must not exceed 2.5 MB.", errNet: "Unable to reach e-META LABS server. Please check your connection.",
        lblReq: "This field is required.", lblEmail: "Please enter a valid email.", lblCheck: "You must accept this condition to continue.",
        alertSec: "Please select a Strategic Sector.", alertCus: "Please specify your custom industry.", alertGeo: "Please select a zone.",
        resTitle: "Analysis Validated", resFree: "Your STARTER diagnostic has been sent to the AI. It will be delivered via email/WhatsApp within 5 minutes.",
        resPaid: "Payment successfully validated. The AI is generating your premium audit. You will receive it by email and WhatsApp shortly.", resBtn: "New Analysis",
        consent: "I accept the", linkPrivacy: "Official Sovereignty & Confidentiality Policy", waOptin: "I agree to receive my strategic analysis via <strong style='color:#25D366; text-shadow: 0 0 5px rgba(37, 211, 102, 0.4);'>WhatsApp</strong>.",
        privTitle: "Sovereignty & Confidentiality Policy", privClose: "Accept & Close",
        privContent: `
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">1. Identity and Operations</h4>
            <p style="margin-bottom:20px;">e-META LABS SASU operates as an international strategic intelligence unit. Access to the <strong>e-meta.app</strong> domain is strictly reserved for restricted laboratory phases, while <strong>e-metalabs.com</strong> constitutes the public deployment interface.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">2. Data Collection and Processing</h4>
            <p style="margin-bottom:20px;">The e-META Engine exclusively collects data necessary for diagnostic calibration.<br><strong>Purpose:</strong> Generation of audits, risk reports, and pivot strategies.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">3. Sovereignty and Artificial Intelligence</h4>
            <p style="margin-bottom:20px;">We guarantee total isolation between your data and public training databases.<br><strong>Non-Learning:</strong> No client data is used to train or improve global AI models.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">4. Blockchain Anchoring and Intellectual Property</h4>
            <p style="margin-bottom:20px;">To guarantee the absolute protection of your ideas and concepts, any document uploaded to our platform is instantly cryptographically hashed (SHA-256 algorithm). This unique digital fingerprint is anchored on the public blockchain via the <strong>OpenTimestamps (OTS)</strong> protocol. This grants you irrefutable digital proof of prior existence (Proof of Existence) with international legal value, without us needing to store the original file on our servers long-term.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">5. Non-Substitution Clause</h4>
            <p style="margin-bottom:20px;">The results produced by the e-META LABS Engine do not constitute certified legal, tax, medical, or financial advice.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">6. Contact and International Rights</h4>
            <p style="margin-bottom:20px;"><strong>DPO (Data Protection Officer) :</strong> support@e-metalabs.com</p>`
    },
    es: {
        loaderTitle: "MOTOR e-META LABS ACTIVADO", loadInit: "Inicializando conexión segura...", loadSuccess: "Datos asegurados. Redirigiendo...",
        load1: "Análisis semántico del contexto...", load2: "Correlación con datos sectoriales...", load3: "Generación de matrices estratégicas...", load4: "Transmisión cifrada a la IA...",
        errFile: "Para garantizar un análisis ultrarrápido, el archivo no debe superar los 2.5 MB.", errNet: "Imposible conectar con el servidor e-META LABS. Compruebe su conexión.",
        lblReq: "Este campo es obligatorio.", lblEmail: "Por favor ingrese un correo válido.", lblCheck: "Debe aceptar esta condición para continuar.",
        alertSec: "Seleccione un Sector Estratégico.", alertCus: "Especifique su industria a medida.", alertGeo: "Seleccione una zona.",
        resTitle: "Análisis Validado", resFree: "Su diagnóstico STARTER ha sido enviado a la IA. Lo recibirá por correo/WhatsApp en 5 minutos.",
        resPaid: "Pago validado con éxito. La IA está generando su auditoría premium. La recibirá por correo y WhatsApp en unos minutos.", resBtn: "Nuevo Análisis",
        consent: "Acepto la", linkPrivacy: "Política Oficial de Soberanía y Confidencialidad", waOptin: "Acepto recibir mi análisis estratégico por <strong style='color:#25D366; text-shadow: 0 0 5px rgba(37, 211, 102, 0.4);'>WhatsApp</strong>.",
        privTitle: "Política de Soberanía y Confidencialidad", privClose: "Aceptar y Cerrar",
        privContent: `
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">1. Identidad y Operaciones</h4>
            <p style="margin-bottom:20px;">e-META LABS SASU opera como una unidad de inteligencia estratégica internacional. El acceso al dominio <strong>e-meta.app</strong> está estrictamente reservado, mientras que <strong>e-metalabs.com</strong> constituye la interfaz pública.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">2. Recopilación y Tratamiento de Datos</h4>
            <p style="margin-bottom:20px;">El Motor e-META recopila exclusivamente los datos necesarios para la calibración del diagnóstico.<br><strong>Finalidad:</strong> Generación de auditorías y estrategias de pivote.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">3. Soberanía e Inteligencia Artificial</h4>
            <p style="margin-bottom:20px;">Garantizamos una estanqueidad total entre sus datos y las bases de datos de entrenamiento público.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">4. Anclaje Blockchain y Propiedad Intelectual</h4>
            <p style="margin-bottom:20px;">Para garantizar la protección absoluta de sus ideas y conceptos, cualquier documento subido a nuestra plataforma se somete instantáneamente a un hash criptográfico (algoritmo SHA-256). Esta huella digital única se ancla en la cadena de bloques pública a través del protocolo <strong>OpenTimestamps (OTS)</strong>. Esto le otorga una prueba digital irrefutable de existencia previa con valor legal internacional, sin que necesitemos almacenar el archivo original en nuestros servidores a largo plazo.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">5. Cláusula de No Sustitución</h4>
            <p style="margin-bottom:20px;">Los resultados no constituyen asesoramiento legal, fiscal, médico o financiero certificado.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">6. Contacto y Derechos Internacionales</h4>
            <p style="margin-bottom:20px;"><strong>DPO :</strong> support@e-metalabs.com</p>`
    },
    ar: {
        loaderTitle: "تم تنشيط محرك e-META LABS", loadInit: "جاري تهيئة الاتصال الآمن...", loadSuccess: "بيانات آمنة. جاري التوجيه...",
        load1: "التحليل الدلالي للسياق...", load2: "الارتباط بالبيانات القطاعية...", load3: "توليد المصفوفات الاستراتيجية...", load4: "نقل مشفر إلى الذكاء الاصطناعي...",
        errFile: "لضمان تحليل فائق السرعة، يجب ألا يتجاوز الملف 2.5 ميجابايت.", errNet: "تعذر الاتصال بخادم e-META LABS. يرجى التحقق من اتصالك.",
        lblReq: "هذا الحقل مطلوب.", lblEmail: "يرجى إدخال بريد إلكتروني صحيح.", lblCheck: "يجب قبول هذا الشرط للمتابعة.",
        alertSec: "يرجى تحديد قطاع استراتيجي.", alertCus: "يرجى تحديد صناعتك المخصصة.", alertGeo: "يرجى تحديد منطقة.",
        resTitle: "تم تأكيد التحليل", resFree: "تم إرسال تشخيص STARTER الخاص بك إلى الذكاء الاصطناعي. ستتلقاه عبر البريد الإلكتروني/واتساب في غضون 5 دقائق.",
        resPaid: "تم تأكيد الدفع بنجاح. يقوم الذكاء الاصطناعي بإنشاء التدقيق المتميز الخاص بك. ستتلقاه عبر البريد الإلكتروني والواتساب قريبًا.", resBtn: "تحليل جديد",
        consent: "أنا أقبل", linkPrivacy: "ميثاق السيادة والسرية الرسمي", waOptin: "أوافق على تلقي تحليلي الاستراتيجي عبر <strong style='color:#25D366; text-shadow: 0 0 5px rgba(37, 211, 102, 0.4);'>WhatsApp</strong>.",
        privTitle: "ميثاق السيادة والسرية", privClose: "قبول وإغلاق",
        privContent: `
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">1. الهوية والعمليات</h4>
            <p style="margin-bottom:20px;">تعمل e-META LABS SASU كوحدة استخبارات استراتيجية دولية.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">2. جمع البيانات ومعالجتها</h4>
            <p style="margin-bottom:20px;">يجمع محرك e-META حصريًا البيانات اللازمة لمعايرة التشخيص.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">3. السيادة والذكاء الاصطناعي</h4>
            <p style="margin-bottom:20px;">نحن نضمن العزل التام بين بياناتك وقواعد بيانات التدريب العامة.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">4. توثيق البلوكشين والملكية الفكرية</h4>
            <p style="margin-bottom:20px;">لضمان الحماية المطلقة لأفكارك ومفاهيمك، يتم تشفير أي مستند يتم تحميله على منصتنا فورًا (بخوارزمية SHA-256). يتم تثبيت هذه البصمة الرقمية الفريدة على البلوكشين العامة عبر بروتوكول <strong>OpenTimestamps (OTS)</strong>. يمنحك هذا دليلًا رقميًا قاطعًا على الوجود المسبق بقيمة قانونية دولية، دون الحاجة إلى تخزين الملف الأصلي على خوادمنا على المدى الطويل.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">5. بند عدم الاستبدال</h4>
            <p style="margin-bottom:20px;">لا تشكل هذه التقارير مشورة قانونية أو ضريبية أو طبية أو مالية معتمدة.</p>
            <h4 style="color:#d4af37; font-family:'Cinzel', serif; border-bottom:1px solid rgba(212, 175, 55, 0.2); padding-bottom:5px;">6. الاتصال والحقوق الدولية</h4>
            <p style="margin-bottom:20px;"><strong>DPO :</strong> support@e-metalabs.com</p>`
    }
};

// ==========================================
// FONCTIONS D'INTERFACE UTILISATEUR (UI)
// ==========================================
function updateInternalUI(lang) {
    const t = uiDict[lang] || uiDict.fr;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    // Modale Charte
    const privTitle = document.getElementById('txt-priv-title');
    if (privTitle) privTitle.innerText = t.privTitle;
    const privBody = document.getElementById('privacy-content-body');
    if (privBody) privBody.innerHTML = t.privContent;
    const privClose = document.getElementById('txt-priv-close');
    if (privClose) privClose.innerText = t.privClose;
    
    // Consentements
    const txtConsent = document.getElementById('txt-legal-consent');
    if (txtConsent) txtConsent.innerText = t.consent;
    const txtLink = document.getElementById('txt-link-privacy');
    if (txtLink) txtLink.innerText = t.linkPrivacy;
    const txtWa = document.getElementById('txt-wa-optin');
    if (txtWa) txtWa.innerHTML = t.waOptin;

    // Loader & Resultats
    const loaderTitle = document.getElementById('loader-title');
    if (loaderTitle) loaderTitle.innerText = t.loaderTitle;
    const modalResTitle = document.getElementById('txt-modal-res-title');
    if (modalResTitle) modalResTitle.innerText = t.resTitle;
    const btnNewAn = document.getElementById('txt-btn-new-analysis');
    if (btnNewAn) btnNewAn.innerText = t.resBtn;
}

function openModal(modalId) { document.getElementById(modalId).style.display = 'flex'; }
function closeModal(modalId) { document.getElementById(modalId).style.display = 'none'; }

function resetForm() {
    if(confirm("Voulez-vous réinitialiser le formulaire ?")) {
        document.getElementById('diagnosticForm').reset();
        document.getElementById('custom-sector-container').style.display = 'none';
        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
        document.getElementById('step-1').classList.add('active');
        document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
    }
}

function nextStep(targetStep) {
    const lang = document.documentElement.lang || 'fr';
    const t = uiDict[lang] || uiDict.fr;

    if (targetStep === 2) {
        const c = document.getElementById('company'), e = document.getElementById('email'), p = document.getElementById('phone');
        if (!c.checkValidity()) { c.reportValidity(); return; }
        if (!e.checkValidity()) { e.reportValidity(); return; }
        if (!p.checkValidity()) { p.reportValidity(); return; }
    }
    if (targetStep === 3) {
        const sector = document.querySelector('input[name="sector"]:checked');
        const geo = document.getElementById('geo-zone');
        if (!sector) { alert(t.alertSec); return; }
        if (sector.value === 'other') {
            const custom = document.getElementById('custom-sector-input');
            if (!custom.value.trim()) { alert(t.alertCus); custom.focus(); return; }
        }
        if (geo.value === "") { geo.setCustomValidity(t.alertGeo); geo.reportValidity(); return; }
    }
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${targetStep}`).classList.add('active');
    document.querySelector('.glass-card').scrollIntoView({ behavior: 'smooth' });
}

function setCustomMessage(input) {
    const lang = document.documentElement.lang || 'fr';
    const t = uiDict[lang] || uiDict.fr;
    input.setCustomValidity('');
    if (!input.validity.valid) {
        if (input.validity.valueMissing) input.setCustomValidity((input.type === 'checkbox') ? t.lblCheck : t.lblReq);
        else if (input.validity.typeMismatch && input.type === 'email') input.setCustomValidity(t.lblEmail);
    }
    return true;
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader(); reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result); reader.onerror = error => reject(error);
    });
}

// ==========================================
// MOTEUR DE PAIEMENT (CINETPAY / LEMON SQUEEZY)
// ==========================================
function initierPaiement(plan) {
    let amount = (plan === 'pro') ? 14900 : 29000;
    
    // Lancement de CinetPay
    CinetPay.setConfig({
        apikey: 'VOTRE_API_KEY_CINETPAY',  // <-- À REMPLACER
        site_id: 'VOTRE_SITE_ID_CINETPAY', // <-- À REMPLACER
        notify_url: 'https://votre-nouveau-webhook-make-pour-paiement.com' // <-- À REMPLACER (Webhook IPN)
    });

    CinetPay.getCheckout({
        transaction_id: 'EMETA-' + Math.floor(Math.random() * 100000000).toString(),
        amount: amount,
        currency: 'XOF',
        channels: 'ALL',
        description: 'Audit Stratégique e-META LABS - Plan ' + plan.toUpperCase(),
        customer_name: document.getElementById('company').value,
        customer_email: document.getElementById('email').value,
        customer_phone_number: document.getElementById('phone').value,
        return_url: window.location.href.split('?')[0] + '?payment=success',
        cancel_url: window.location.href
    });

    CinetPay.waitResponse(function(data) {
        if (data.status == "REFUSED") {
            alert("Le paiement a été refusé. Veuillez réessayer.");
            window.location.reload();
        } else if (data.status == "ACCEPTED") {
            window.location.href = "?payment=success";
        }
    });
}

// ==========================================
// INITIALISATION ET ECOUTEURS D'ÉVÉNEMENTS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialisation Langue
    updateInternalUI(document.documentElement.lang || 'fr');

    // Compteur Live
    const counterElement = document.getElementById('live-counter-top');
    if (counterElement) {
        let currentCount = 1380; const targetCount = 1423; 
        const interval = setInterval(() => {
            currentCount++; counterElement.innerText = currentCount.toLocaleString();
            if (currentCount >= targetCount) clearInterval(interval);
        }, 30); 
    }

    // Vérification du retour de paiement
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('payment') === 'success') {
        const lang = document.documentElement.lang || 'fr';
        const t = uiDict[lang] || uiDict.fr;
        document.getElementById('resultText').innerText = t.resPaid;
        document.getElementById('resultModal').style.display = 'flex';
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Gestion de l'input fichier
    const fileInput = document.getElementById('clientFile');
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    if (fileInput && fileNameDisplay) {
        fileInput.addEventListener('change', function() {
            if (this.files && this.files.length > 0) {
                fileNameDisplay.textContent = this.files[0].name; fileNameDisplay.style.color = '#d4af37';
            } else {
                fileNameDisplay.textContent = "Aucun fichier sélectionné"; fileNameDisplay.style.color = '#8892b0';
            }
        });
    }

    // Gestion du Switch de Langue
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const lang = this.getAttribute('data-lang');
            document.documentElement.lang = lang;
            updateInternalUI(lang);
            if (typeof window.dispatchEvent === 'function') {
                window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: lang } }));
            }
        });
    });

    // Gestion de l'option "Autre Secteur"
    document.querySelectorAll('input[name="sector"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const customContainer = document.getElementById('custom-sector-container');
            if (e.target.value === 'other') {
                customContainer.style.display = 'block';
                document.getElementById('custom-sector-input').focus();
            } else {
                customContainer.style.display = 'none';
                document.getElementById('custom-sector-input').value = '';
            }
        });
    });

    // ==========================================
    // GESTION DE LA SOUMISSION DU FORMULAIRE
    // ==========================================
    const form = document.getElementById('diagnosticForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const lang = document.documentElement.lang || 'fr';
            const t = uiDict[lang] || uiDict.fr;

            // Vérification des Consentements
            const whatsappConsent = document.getElementById('whatsapp-consent');
            if (!whatsappConsent.checked) { setCustomMessage(whatsappConsent); whatsappConsent.reportValidity(); return; }
            const consent = document.getElementById('consent');
            if (!consent.checked) { setCustomMessage(consent); consent.reportValidity(); return; }

            const submitBtn = document.getElementById('btnFinalSubmit');
            const originalText = submitBtn.innerText;
            submitBtn.disabled = true;
            
            // Lancement Radar IA Multilingue
            form.style.display = 'none';
            const wowLoader = document.getElementById('emeta-loader');
            const statusText = document.getElementById('emeta-status');
            
            if (statusText) statusText.innerText = t.loadInit;
            if (wowLoader) wowLoader.style.display = 'block';

            const loadingSteps = [t.load1, t.load2, t.load3, t.load4];
            let stepIndex = 0;
            const textInterval = setInterval(() => {
                if (stepIndex < loadingSteps.length) {
                    if (statusText) statusText.innerText = loadingSteps[stepIndex];
                    stepIndex++;
                }
            }, 1200); 

            // Formatage Fichier (Base64)
            let fileData = null; let fileName = null;
            if (fileInput && fileInput.files.length > 0) {
                if (fileInput.files[0].size > 2.5 * 1024 * 1024) {
                    alert(t.errFile);
                    submitBtn.disabled = false; form.style.display = 'block'; 
                    if(wowLoader) wowLoader.style.display = 'none'; clearInterval(textInterval); return;
                }
                try { fileData = await getBase64(fileInput.files[0]); fileName = fileInput.files[0].name; } 
                catch (error) { console.error("Erreur fichier", error); }
            }

            // Récupération Secteur Custom
            let finalSector = document.querySelector('input[name="sector"]:checked')?.value || "Non spécifié";
            if (finalSector === 'other') {
                const customInput = document.getElementById('custom-sector-input');
                finalSector = customInput ? customInput.value.trim() : "Sur-mesure";
            }

            // Construction du Payload final
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
                lang: lang,
                attachedFileName: fileName,
                attachedFileBase64: fileData 
            };

            // Envoi vers Make.com (Le Cerveau)
            fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            .then(response => {
                clearInterval(textInterval); 
                if (response.ok) {
                    if (statusText) statusText.innerText = t.loadSuccess;
                    
                    setTimeout(() => {
                        if (planChoisi === 'pro' || planChoisi === 'expert') {
                            
                            // === ROUTAGE DU PAIEMENT ===
                            
                            // 1. MOTEUR ACTIF : CINETPAY
                            initierPaiement(planChoisi);

                            // 2. MOTEUR ALTERNATIF : LEMON SQUEEZY (Décommenter pour l'activer)
                            /*
                            if (planChoisi === 'pro') {
                                window.location.href = "https://e-metalabs.lemonsqueezy.com/checkout/buy/VOTRE_ID_PRO";
                            } else {
                                window.location.href = "https://e-metalabs.lemonsqueezy.com/checkout/buy/VOTRE_ID_EXPERT";
                            }
                            */

                        } else {
                            // Mode Starter Gratuit
                            if (wowLoader) wowLoader.style.display = 'none';
                            document.getElementById('resultText').innerText = t.resFree;
                            const resModal = document.getElementById('resultModal');
                            if(resModal) resModal.style.display = 'flex';
                        }
                    }, 1500);
                } else { throw new Error('Erreur Webhook'); }
            })
            .catch(error => {
                clearInterval(textInterval);
                form.style.display = 'block';
                if(wowLoader) wowLoader.style.display = 'none';
                console.error('Erreur Transmission:', error);
                alert(t.errNet);
                submitBtn.disabled = false; submitBtn.innerText = originalText;
            });
        });
    }
});
