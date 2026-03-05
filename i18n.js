/* * PROJET : e-META LABS
 * FICHIER : i18n.js (Traduction Intégrale Exhaustive + Vision Sublime)
 */

const translations = {
    fr: {
        // --- VISION SUBLIME ---
        hero_label: "MASTER DIAGNOSTIC 2026",
        hero_slogan_1: "Excellence Stratégique",
        hero_slogan_2: "& Haute Précision IA",
        subtitle: "Excellence Stratégique & Haute Précision IA", // Conservé par sécurité
        
        btn_reset: "↻ Reset",
        lbl_counter: "Diagnostics Sécurisés & Ancrés",
        step1_title: "01. Identification",
        lbl_company: "Société / Entité",
        ph_company: "ex: Groupe Alpha, Ministère...",
        lbl_email: "Email Professionnel",
        lbl_phone: "Numéro WhatsApp",
        btn_next: "Suivant",
        
        step2_title: "02. Matrice Stratégique",
        btn_guide: "📖 Guide des Expertises",
        lbl_sector: "Secteur Stratégique",
        sec_fintech: "FinTech & DeFi",
        sec_agri: "AgriTech & Food Security",
        sec_green: "GreenTech & Énergies",
        sec_gov: "GovTech & Smart Cities",
        sec_health: "Santé & BioTech",
        sec_log: "Logistique & Supply Chain",
        sec_mine: "Mines, Pétrole & Gaz",
        sec_btp: "Immobilier & PropTech",
        sec_retail: "E-commerce & Retail",
        sec_edu: "Éducation & EdTech",
        sec_tour: "Tourisme & Hôtellerie",
        sec_media: "Industries Créatives & Médias",
        
        lbl_geo: "Zone d'Intervention",
        opt_geo_def: "Sélectionner une zone...",
        grp_africa: "Afrique",
        geo_sn: "Sénégal (Dakar Hub)",
        geo_ci: "Côte d'Ivoire (Abidjan Hub)",
        geo_ng: "Nigeria (Lagos Hub)",
        geo_ma: "Maroc (Casablanca Hub)",
        geo_za: "Afrique du Sud (Johannesburg)",
        grp_na: "Amérique du Nord",
        geo_us: "États-Unis (USA)",
        geo_ca: "Canada (Toronto / Montréal)",
        grp_latam: "Amérique Latine",
        geo_br: "Brésil (São Paulo)",
        geo_latam: "Amérique Latine (Mexique, Colombie...)",
        grp_apac: "Asie-Pacifique (APAC)",
        geo_cn: "Chine (Shanghai / Beijing)",
        geo_sg: "Singapour (Hub APAC)",
        geo_in: "Inde (Mumbai / Bangalore)",
        grp_eu: "Europe",
        geo_fr: "France (Paris Hub)",
        geo_uk: "Royaume-Uni (Londres)",
        geo_eu: "Union Européenne (Allemagne, Espagne...)",
        grp_mena: "Moyen-Orient (MENA)",
        geo_ae: "Émirats Arabes Unis (Dubai Hub)",
        geo_sa: "Arabie Saoudite (Riyadh)",
        grp_global: "Global",
        geo_global: "International / Multi-Zones",
        
        lbl_expertise: "Expertise Requise",
        exp_ai: "GenAI & Data Science",
        exp_cyber: "Cybersécurité & Résilience",
        exp_esg: "Ingénierie ESG & Climat",
        exp_web3: "Web3 & Blockchain (Woleet)",
        exp_mkt: "Marketing Digital & SEO",
        exp_proc: "Optimisation des Processus",
        exp_hr: "Gestion des Talents (RH)",
        exp_design: "Design Thinking & UX",
        
        btn_prev: "Retour",
        btn_next_matrice: "Ouvrir Matrice",
        
        step3_title: "03. Matrice Analyse",
        lbl_context: "Contexte Opérationnel",
        ph_context: "Décrivez votre situation actuelle, vos objectifs à 1-3 ans et vos défis majeurs (concurrence, financement, transition digitale...). Plus vous fournirez de détails, plus les recommandations de l'IA seront chirurgicales.",
        lbl_file_upload: "📄 Joindre un Document (Optionnel)",
        btn_browse: "Parcourir...",
        lbl_no_file: "Aucun fichier",
        lbl_file_desc: "Propriété Intellectuelle garantie : Votre fichier sera scellé (Woleet).",
        legal_consent: "J'accepte la",
        link_privacy: "Politique de Confidentialité Officielle",
        lbl_wa_optin: "J'accepte de recevoir mon analyse par WhatsApp.",
        btn_submit: "Lancer l'Analyse IA",
        
        footer_rights: "Tous droits réservés.",
        modal_res_title: "Diagnostic Stratégique",
        btn_new_analysis: "Nouvelle Analyse",
        msg_reset_confirm: "Voulez-vous vraiment recommencer ?",
        
        // --- GUIDE LEXIQUE ---
        guide_title: "Lexique Stratégique",
        guide_sec_title: "1. Secteurs Stratégiques",
        guide_sec_desc: "<strong style='color:#d4af37;'>• FinTech / DeFi :</strong> Finance numérique, paiements et décentralisation.<br><strong style='color:#d4af37;'>• GovTech :</strong> Modernisation de l'État et numérisation des services publics.<br><strong style='color:#d4af37;'>• Santé & BioTech :</strong> Innovations médicales et gestion des données de santé.<br><strong style='color:#d4af37;'>• GreenTech :</strong> Transition écologique, décarbonation et énergies renouvelables.<br><strong style='color:#d4af37;'>• AgriTech :</strong> Sécurité alimentaire et optimisation technologique agricole.<br><strong style='color:#d4af37;'>• Logistique :</strong> Optimisation de la supply chain et traçabilité globale.<br><strong style='color:#d4af37;'>• Mines & Pétrole :</strong> Extraction intelligente, sécurité et conformité.<br><strong style='color:#d4af37;'>• PropTech :</strong> Innovation immobilière et gestion de bâtiments intelligents.<br><strong style='color:#d4af37;'>• E-commerce :</strong> Retail digital, expérience client et transactions.<br><strong style='color:#d4af37;'>• Éducation (EdTech) :</strong> Plateformes d'apprentissage et transmission du savoir.<br><strong style='color:#d4af37;'>• Tourisme :</strong> Digitalisation de l'hôtellerie et gestion des flux.<br><strong style='color:#d4af37;'>• Industries Créatives :</strong> Médias, divertissement et propriété intellectuelle.",
        
        guide_exp_title: "2. Expertises Technologiques",
        guide_exp_desc: "<strong style='color:#d4af37;'>• GenAI & Data :</strong> Intégration de l'IA pour l'analyse prédictive et l'automatisation.<br><strong style='color:#d4af37;'>• Cybersécurité :</strong> Protection des infrastructures critiques et audit de résilience.<br><strong style='color:#d4af37;'>• Ingénierie ESG :</strong> Stratégie environnementale, sociale et de gouvernance.<br><strong style='color:#d4af37;'>• Web3 & Blockchain :</strong> Tokenisation, traçabilité et ancrage numérique (Woleet).<br><strong style='color:#d4af37;'>• Marketing Digital :</strong> Stratégie d'acquisition, SEO et visibilité en ligne.<br><strong style='color:#d4af37;'>• Optimisation Processus :</strong> Excellence opérationnelle et réduction des coûts.<br><strong style='color:#d4af37;'>• Gestion des Talents (RH) :</strong> Recrutement, rétention et formation 2.0.<br><strong style='color:#d4af37;'>• Design Thinking :</strong> Expérience utilisateur (UX) et innovation produit.",

        // --- CHARTE JURIDIQUE EXHAUSTIVE ---
        modal_title: "Politique de Souveraineté & Confidentialité",
        priv_date: "Dernière mise à jour : Février 2026",
        priv_t1: "1. Identité et Opérations",
        priv_c1: "e-META LABS SASU opère en tant qu'unité d'intelligence stratégique internationale depuis ses différents hubs (Dakar, Paris, Dubaï). Les données collectées via notre plateforme B2B sont strictement limitées au périmètre de la réalisation de diagnostics stratégiques assistés par Intelligence Artificielle.",
        priv_t2: "2. Collecte et Traitement des Données",
        priv_c2: "Nous collectons uniquement les informations nécessaires à l'analyse : nom de l'entité, contacts professionnels, contexte opérationnel, et documents stratégiques fournis volontairement. La transmission de l'analyse finale peut s'effectuer de manière chiffrée de bout en bout via l'API WhatsApp Business, sous réserve du consentement explicite (Opt-in) du client.",
        priv_t3: "3. Souveraineté et Intelligence Artificielle",
        priv_c3: "La confidentialité de vos stratégies est notre priorité absolue. Les informations soumises à notre moteur IA (Google Gemini Pro/Flash) sont traitées de manière éphémère via des API sécurisées. Aucun modèle d'apprentissage (Machine Learning) public ou privé n'est entraîné en utilisant vos données opérationnelles. Le traitement est isolé et détruit après génération du rapport.",
        priv_t4: "4. Ancrage Blockchain et Propriété Intellectuelle",
        priv_c4: "Pour garantir la protection absolue de vos idées et concepts, tout document téléversé sur notre plateforme est instantanément haché cryptographiquement (algorithme SHA-256). Cette empreinte numérique unique est ancrée sur la blockchain publique via la technologie Woleet. Cela vous octroie une preuve d'antériorité numérique irréfutable (Proof of Existence) à valeur légale internationale, sans que nous n'ayons besoin de stocker le fichier d'origine sur nos serveurs à long terme.",
        priv_t5: "5. Clause de Non-Substitution",
        priv_c5: "Les rapports, audits et matrices générés par le moteur d'Intelligence Artificielle d'e-META LABS constituent des outils d'aide à la décision stratégique de très haut niveau. Ils sont fournis à titre consultatif et ne se substituent en aucun cas à une consultation juridique, fiscale, ou financière certifiée par des professionnels dûment agréés par les autorités compétentes.",
        priv_t6: "6. Contact & Droits Internationaux",
        priv_c6: "Conformément aux réglementations internationales sur la protection des données (RGPD européen, lois locales en vigueur), vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos informations. Pour exercer ces droits ou pour toute question relative à notre conformité, veuillez contacter notre direction juridique à l'adresse : contact@e-metalabs.com.",
        
        btn_full_policy: "📑 Consulter la Charte Complète",
        url_policy: "privacy.html?lang=fr",
        btn_return: "Retour au Moteur IA",
        btn_close: "Fermer"
    },
    en: {
        // --- VISION SUBLIME ---
        hero_label: "MASTER DIAGNOSTIC 2026",
        hero_slogan_1: "Strategic Excellence",
        hero_slogan_2: "& High Precision AI",
        subtitle: "Strategic Excellence & High Precision AI",
        
        btn_reset: "↻ Reset",
        lbl_counter: "Secured & Anchored Diagnostics",
        step1_title: "01. Identification",
        lbl_company: "Company / Entity",
        ph_company: "e.g., Alpha Group...",
        lbl_email: "Corporate Email",
        lbl_phone: "WhatsApp Number",
        btn_next: "Next",
        
        step2_title: "02. Strategic Matrix",
        btn_guide: "📖 Expertise Guide",
        lbl_sector: "Strategic Sector",
        sec_fintech: "FinTech & DeFi",
        sec_agri: "AgriTech & Food Security",
        sec_green: "GreenTech & Energy",
        sec_gov: "GovTech & Smart Cities",
        sec_health: "Healthcare & BioTech",
        sec_log: "Logistics & Supply Chain",
        sec_mine: "Mining, Oil & Gas",
        sec_btp: "Real Estate & PropTech",
        sec_retail: "E-commerce & Retail",
        sec_edu: "Education & EdTech",
        sec_tour: "Tourism & Hospitality",
        sec_media: "Creative Industries & Media",
        
        lbl_geo: "Area of Operation",
        opt_geo_def: "Select an area...",
        grp_africa: "Africa",
        geo_sn: "Senegal (Dakar Hub)",
        geo_ci: "Ivory Coast (Abidjan Hub)",
        geo_ng: "Nigeria (Lagos Hub)",
        geo_ma: "Morocco (Casablanca Hub)",
        geo_za: "South Africa (Johannesburg)",
        grp_na: "North America",
        geo_us: "United States (USA)",
        geo_ca: "Canada (Toronto / Montreal)",
        grp_latam: "Latin America",
        geo_br: "Brazil (São Paulo)",
        geo_latam: "Latin America (Mexico, Colombia...)",
        grp_apac: "Asia-Pacific (APAC)",
        geo_cn: "China (Shanghai / Beijing)",
        geo_sg: "Singapore (APAC Hub)",
        geo_in: "India (Mumbai / Bangalore)",
        grp_eu: "Europe",
        geo_fr: "France (Paris Hub)",
        geo_uk: "United Kingdom (London)",
        geo_eu: "European Union (Germany, Spain...)",
        grp_mena: "Middle East (MENA)",
        geo_ae: "United Arab Emirates (Dubai Hub)",
        geo_sa: "Saudi Arabia (Riyadh)",
        grp_global: "Global",
        geo_global: "International / Multi-Zones",
        
        lbl_expertise: "Required Expertise",
        exp_ai: "GenAI & Data Science",
        exp_cyber: "Cybersecurity & Resilience",
        exp_esg: "ESG Engineering & Climate",
        exp_web3: "Web3 & Blockchain (Woleet)",
        exp_mkt: "Digital Marketing & SEO",
        exp_proc: "Process Optimization",
        exp_hr: "Talent Management (HR)",
        exp_design: "Design Thinking & UX",
        
        btn_prev: "Back",
        btn_next_matrice: "Open Matrix",
        
        step3_title: "03. Analysis Matrix",
        lbl_context: "Operational Context",
        ph_context: "Describe your current situation, 1-3 year goals, and major challenges (competition, funding, digital transition...). The more details you provide, the more precise the AI recommendations will be.",
        lbl_file_upload: "📄 Attach Document (Optional)",
        btn_browse: "Browse...",
        lbl_no_file: "No file selected",
        lbl_file_desc: "IP Guaranteed: File protected by Blockchain anchoring.",
        legal_consent: "I accept the",
        link_privacy: "Official Privacy Policy",
        lbl_wa_optin: "I agree to receive my analysis via WhatsApp.",
        btn_submit: "Launch AI Analysis",
        
        footer_rights: "All Rights Reserved.",
        modal_res_title: "Strategic Diagnostic",
        btn_new_analysis: "New Analysis",
        msg_reset_confirm: "Restart the form?",
        
        // --- GUIDE LEXIQUE ---
        guide_title: "Strategic Glossary",
        guide_sec_title: "1. Strategic Sectors",
        guide_sec_desc: "<strong style='color:#d4af37;'>• FinTech / DeFi:</strong> Digital finance, payments, and decentralization.<br><strong style='color:#d4af37;'>• GovTech:</strong> State modernization and public service digitization.<br><strong style='color:#d4af37;'>• Health & BioTech:</strong> Medical innovations and health data management.<br><strong style='color:#d4af37;'>• GreenTech:</strong> Ecological transition, decarbonization, and renewable energy.<br><strong style='color:#d4af37;'>• AgriTech:</strong> Food security and agricultural technological optimization.<br><strong style='color:#d4af37;'>• Logistics:</strong> Supply chain optimization and global traceability.<br><strong style='color:#d4af37;'>• Mining, Oil & Gas:</strong> Smart extraction, safety, and compliance.<br><strong style='color:#d4af37;'>• PropTech:</strong> Real estate innovation and smart building management.<br><strong style='color:#d4af37;'>• E-commerce:</strong> Digital retail, customer experience, and transactions.<br><strong style='color:#d4af37;'>• Education (EdTech):</strong> Learning platforms and knowledge transfer.<br><strong style='color:#d4af37;'>• Tourism:</strong> Hospitality digitization and flow management.<br><strong style='color:#d4af37;'>• Creative Industries:</strong> Media, entertainment, and intellectual property.",
        
        guide_exp_title: "2. Technological Expertise",
        guide_exp_desc: "<strong style='color:#d4af37;'>• GenAI & Data:</strong> AI integration for predictive analysis and automation.<br><strong style='color:#d4af37;'>• Cybersecurity:</strong> Protection of critical infrastructure and resilience audits.<br><strong style='color:#d4af37;'>• ESG Engineering:</strong> Environmental, Social, and Governance strategy.<br><strong style='color:#d4af37;'>• Web3 & Blockchain:</strong> Tokenization, traceability, and digital anchoring (Woleet).<br><strong style='color:#d4af37;'>• Digital Marketing:</strong> Acquisition strategy, SEO, and online visibility.<br><strong style='color:#d4af37;'>• Process Optimization:</strong> Operational excellence and cost reduction.<br><strong style='color:#d4af37;'>• Talent Management (HR):</strong> Recruitment, retention, and 2.0 training.<br><strong style='color:#d4af37;'>• Design Thinking:</strong> User experience (UX) and product innovation.",

        // --- CHARTE JURIDIQUE EXHAUSTIVE ---
        modal_title: "Sovereignty & Privacy Policy",
        priv_date: "Last updated: February 2026",
        priv_t1: "1. Identity and Operations",
        priv_c1: "e-META LABS SASU operates as an international strategic intelligence unit from its various hubs (Dakar, Paris, Dubai). The data collected via our B2B platform is strictly limited to the scope of conducting AI-assisted strategic diagnostics.",
        priv_t2: "2. Data Collection and Processing",
        priv_c2: "We only collect information necessary for the analysis: entity name, professional contacts, operational context, and voluntarily provided strategic documents. The delivery of the final analysis can be done via end-to-end encrypted WhatsApp Business API, subject to the client's explicit consent (Opt-in).",
        priv_t3: "3. Sovereignty and Artificial Intelligence",
        priv_c3: "The confidentiality of your strategies is our absolute priority. Information submitted to our AI engine (Google Gemini Pro/Flash) is processed ephemerally via secure APIs. No public or private machine learning models are trained using your operational data. The processing is isolated and destroyed after the report is generated.",
        priv_t4: "4. Blockchain Anchoring and Intellectual Property",
        priv_c4: "To guarantee the absolute protection of your ideas and concepts, any document uploaded to our platform is instantly cryptographically hashed (SHA-256 algorithm). This unique digital fingerprint is anchored on the public blockchain via Woleet technology. This grants you irrefutable digital proof of existence with international legal value, without us needing to store the original file on our servers long-term.",
        priv_t5: "5. Non-Substitution Clause",
        priv_c5: "The reports, audits, and matrices generated by the e-META LABS Artificial Intelligence engine constitute high-level strategic decision-support tools. They are provided for advisory purposes and under no circumstances replace legal, tax, or financial consultations certified by professionals duly licensed by competent authorities.",
        priv_t6: "6. Contact & International Rights",
        priv_c6: "In accordance with international data protection regulations (European GDPR, applicable local laws), you have the right to access, rectify, port, and delete your information. To exercise these rights or for any questions regarding our compliance, please contact our legal department at: contact@e-metalabs.com.",
        
        btn_full_policy: "📑 Read Full Privacy Policy",
        url_policy: "privacy.html?lang=en",
        btn_return: "Return to AI Engine",
        btn_close: "Close"
    },
    es: {
        // --- VISION SUBLIME ---
        hero_label: "DIAGNÓSTICO MAESTRO 2026",
        hero_slogan_1: "Excelencia Estratégica",
        hero_slogan_2: "& Alta Precisión IA",
        subtitle: "Excelencia Estratégica y Alta Precisión IA",
        
        btn_reset: "↻ Reiniciar",
        lbl_counter: "Diagnósticos Asegurados",
        step1_title: "01. Identificación",
        lbl_company: "Empresa / Entidad",
        ph_company: "ej. Grupo Alfa...",
        lbl_email: "Correo Profesional",
        lbl_phone: "Número WhatsApp",
        btn_next: "Siguiente",
        
        step2_title: "02. Matriz Estratégica",
        btn_guide: "📖 Guía de Especialidades",
        lbl_sector: "Sector Estratégico",
        sec_fintech: "FinTech y DeFi",
        sec_agri: "AgriTech y Seguridad Alimentaria",
        sec_green: "GreenTech y Energía",
        sec_gov: "GovTech y Smart Cities",
        sec_health: "Salud y BioTech",
        sec_log: "Logística y Cadena de Suministro",
        sec_mine: "Minería, Petróleo y Gas",
        sec_btp: "Bienes Raíces y PropTech",
        sec_retail: "E-commerce y Retail",
        sec_edu: "Educación y EdTech",
        sec_tour: "Turismo y Hostelería",
        sec_media: "Industrias Creativas y Medios",
        
        lbl_geo: "Zona de Intervención",
        opt_geo_def: "Seleccione una zona...",
        grp_africa: "África",
        geo_sn: "Senegal (Hub Dakar)",
        geo_ci: "Costa de Marfil (Hub Abiyán)",
        geo_ng: "Nigeria (Hub Lagos)",
        geo_ma: "Marruecos (Hub Casablanca)",
        geo_za: "Sudáfrica (Johannesburgo)",
        grp_na: "América del Norte",
        geo_us: "Estados Unidos (EE.UU.)",
        geo_ca: "Canadá (Toronto / Montreal)",
        grp_latam: "América Latina",
        geo_br: "Brasil (São Paulo)",
        geo_latam: "América Latina (México, Colombia...)",
        grp_apac: "Asia-Pacífico (APAC)",
        geo_cn: "China (Shanghái / Pekín)",
        geo_sg: "Singapur (Hub APAC)",
        geo_in: "India (Bombay / Bangalore)",
        grp_eu: "Europa",
        geo_fr: "Francia (Hub París)",
        geo_uk: "Reino Unido (Londres)",
        geo_eu: "Unión Europea (Alemania, España...)",
        grp_mena: "Oriente Medio (MENA)",
        geo_ae: "Emiratos Árabes Unidos (Hub Dubái)",
        geo_sa: "Arabia Saudita (Riad)",
        grp_global: "Global",
        geo_global: "Internacional / Multizonas",
        
        lbl_expertise: "Experiencia Requerida",
        exp_ai: "GenAI y Data Science",
        exp_cyber: "Ciberseguridad y Resiliencia",
        exp_esg: "Ingeniería ESG y Clima",
        exp_web3: "Web3 y Blockchain",
        exp_mkt: "Marketing Digital y SEO",
        exp_proc: "Optimización de Procesos",
        exp_hr: "Gestión de Talento (RRHH)",
        exp_design: "Design Thinking y UX",
        
        btn_prev: "Volver",
        btn_next_matrice: "Abrir Matriz",
        
        step3_title: "03. Matriz de Análisis",
        lbl_context: "Contexto Operativo",
        ph_context: "Describa su situación actual, objetivos a 1-3 años y desafíos principales (competencia, financiamiento, transición digital...). Cuantos más detalles proporcione, más precisas serán las recomendaciones de la IA.",
        lbl_file_upload: "📄 Adjuntar Documento",
        btn_browse: "Explorar...",
        lbl_no_file: "Ningún archivo",
        lbl_file_desc: "Su archivo será sellado y protegido por anclaje Blockchain.",
        legal_consent: "Acepto la",
        link_privacy: "Política de Privacidad Oficial",
        lbl_wa_optin: "Acepto recibir mi análisis a través de WhatsApp.",
        btn_submit: "Lanzar Análisis IA",
        
        footer_rights: "Todos los derechos reservados.",
        modal_res_title: "Diagnóstico Estratégico",
        btn_new_analysis: "Nuevo Análisis",
        msg_reset_confirm: "¿Deseas reiniciar?",
        
        // --- GUIDE LEXIQUE ---
        guide_title: "Glosario Estratégico",
        guide_sec_title: "1. Sectores Estratégicos",
        guide_sec_desc: "<strong style='color:#d4af37;'>• FinTech / DeFi:</strong> Finanzas digitales, pagos y descentralización.<br><strong style='color:#d4af37;'>• GovTech:</strong> Modernización del Estado y digitalización de servicios públicos.<br><strong style='color:#d4af37;'>• Salud y BioTech:</strong> Innovaciones médicas y gestión de datos de salud.<br><strong style='color:#d4af37;'>• GreenTech:</strong> Transición ecológica, descarbonización y energías renovables.<br><strong style='color:#d4af37;'>• AgriTech:</strong> Seguridad alimentaria y optimización tecnológica agrícola.<br><strong style='color:#d4af37;'>• Logística:</strong> Optimización de la cadena de suministro y trazabilidad.<br><strong style='color:#d4af37;'>• Minería y Gas:</strong> Extracción inteligente, seguridad y cumplimiento.<br><strong style='color:#d4af37;'>• PropTech:</strong> Innovación inmobiliaria y gestión de edificios inteligentes.<br><strong style='color:#d4af37;'>• E-commerce:</strong> Retail digital, experiencia del cliente y transacciones.<br><strong style='color:#d4af37;'>• Educación (EdTech):</strong> Plataformas de aprendizaje y transferencia de conocimiento.<br><strong style='color:#d4af37;'>• Turismo:</strong> Digitalización de la hostelería y gestión de flujos.<br><strong style='color:#d4af37;'>• Industrias Creativas:</strong> Medios, entretenimiento y propiedad intelectual.",
        
        guide_exp_title: "2. Experiencia Tecnológica",
        guide_exp_desc: "<strong style='color:#d4af37;'>• GenAI & Data:</strong> Integración de IA para análisis predictivo y automatización.<br><strong style='color:#d4af37;'>• Ciberseguridad:</strong> Protección de infraestructuras críticas y auditorías de resiliencia.<br><strong style='color:#d4af37;'>• Ingeniería ESG:</strong> Estrategia Ambiental, Social y de Gobernanza.<br><strong style='color:#d4af37;'>• Web3 y Blockchain:</strong> Tokenización, trazabilidad y anclaje digital (Woleet).<br><strong style='color:#d4af37;'>• Marketing Digital:</strong> Estrategia de adquisición, SEO y visibilidad en línea.<br><strong style='color:#d4af37;'>• Optimización de Procesos:</strong> Excelencia operativa y reducción de costos.<br><strong style='color:#d4af37;'>• Gestión de Talento (RRHH):</strong> Reclutamiento, retención y formación 2.0.<br><strong style='color:#d4af37;'>• Design Thinking:</strong> Experiencia de usuario (UX) e innovación de productos.",

        // --- CHARTE JURIDIQUE EXHAUSTIVE ---
        modal_title: "Política de Soberanía y Privacidad",
        priv_date: "Última actualización: Febrero 2026",
        priv_t1: "1. Identidad y Operaciones",
        priv_c1: "e-META LABS SASU opera como una unidad internacional de inteligencia estratégica desde sus diversos hubs (Dakar, París, Dubái). Los datos recopilados a través de nuestra plataforma B2B se limitan estrictamente al ámbito de la realización de diagnósticos estratégicos asistidos por Inteligencia Artificial.",
        priv_t2: "2. Recopilación y Tratamiento de Datos",
        priv_c2: "Solo recopilamos la información necesaria para el análisis: nombre de la entidad, contactos profesionales, contexto operativo y documentos estratégicos proporcionados voluntariamente. La entrega del análisis final puede realizarse mediante cifrado de extremo a extremo a través de la API de WhatsApp Business, sujeto al consentimiento explícito (Opt-in) del cliente.",
        priv_t3: "3. Soberanía e Inteligencia Artificial",
        priv_c3: "La confidencialidad de sus estrategias es nuestra máxima prioridad. La información enviada a nuestro motor de IA (Google Gemini Pro/Flash) se procesa de forma efímera a través de API seguras. Ningún modelo de aprendizaje automático (Machine Learning), público o privado, se entrena con sus datos operativos. El procesamiento se aísla y se destruye tras la generación del informe.",
        priv_t4: "4. Anclaje Blockchain y Propiedad Intelectual",
        priv_c4: "Para garantizar la protección absoluta de sus ideas y conceptos, cualquier documento subido a nuestra plataforma se convierte instantáneamente en un hash criptográfico (algoritmo SHA-256). Esta huella digital única se ancla en la cadena de bloques pública (blockchain) a través de la tecnología Woleet. Esto le otorga una prueba digital de existencia irrefutable (Proof of Existence) con valor legal internacional, sin que necesitemos almacenar el archivo original en nuestros servidores a largo plazo.",
        priv_t5: "5. Cláusula de No Sustitución",
        priv_c5: "Los informes, auditorías y matrices generados por el motor de Inteligencia Artificial de e-META LABS constituyen herramientas de apoyo a la toma de decisiones estratégicas de muy alto nivel. Se proporcionan con fines consultivos y en ningún caso sustituyen a una consulta legal, fiscal o financiera certificada por profesionales debidamente autorizados por las autoridades competentes.",
        priv_t6: "6. Contacto y Derechos Internacionales",
        priv_c6: "De acuerdo con las normativas internacionales de protección de datos (RGPD europeo, leyes locales vigentes), usted tiene derecho a acceder, rectificar, portar y eliminar su información. Para ejercer estos derechos o para cualquier pregunta relacionada con nuestro cumplimiento, comuníquese con nuestro departamento legal en: contact@e-metalabs.com.",
        
        btn_full_policy: "📑 Leer la Política Completa",
        url_policy: "privacy.html?lang=es",
        btn_return: "Volver al Motor IA",
        btn_close: "Cerrar"
    },
    ar: {
        // --- VISION SUBLIME ---
        hero_label: "التشخيص الرئيسي 2026",
        hero_slogan_1: "التميز الاستراتيجي",
        hero_slogan_2: "والذكاء الاصطناعي عالي الدقة",
        subtitle: "التميز الاستراتيجي والذكاء الاصطناعي عالي الدقة",
        
        btn_reset: "↻ إعادة تعيين",
        lbl_counter: "تشخيصات آمنة وموثقة",
        step1_title: "01. تحديد الهوية",
        lbl_company: "الشركة / المؤسسة",
        ph_company: "مثال: مجموعة ألفا...",
        lbl_email: "البريد الإلكتروني المهني",
        lbl_phone: "رقم الواتساب",
        btn_next: "التالي",
        
        step2_title: "02. المصفوفة الاستراتيجية",
        btn_guide: "📖 دليل الخبرات",
        lbl_sector: "القطاع الاستراتيجي",
        sec_fintech: "التكنولوجيا المالية",
        sec_agri: "التكنولوجيا الزراعية",
        sec_green: "التكنولوجيا الخضراء",
        sec_gov: "تكنولوجيا الحكومة",
        sec_health: "الصحة والتكنولوجيا الحيوية",
        sec_log: "سلسلة التوريد",
        sec_mine: "التعدين والغاز",
        sec_btp: "تكنولوجيا العقارات",
        sec_retail: "التجارة الإلكترونية",
        sec_edu: "تكنولوجيا التعليم",
        sec_tour: "السياحة والضيافة",
        sec_media: "الإعلام الإبداعي",
        
        lbl_geo: "منطقة التدخل",
        opt_geo_def: "اختر منطقة التدخل...",
        grp_africa: "أفريقيا",
        geo_sn: "السنغال (مركز داكار)",
        geo_ci: "ساحل العاج (مركز أبيدجان)",
        geo_ng: "نيجيريا (مركز لاغوس)",
        geo_ma: "المغرب (مركز الدار البيضاء)",
        geo_za: "جنوب أفريقيا (جوهانسبرغ)",
        grp_na: "أمريكا الشمالية",
        geo_us: "الولايات المتحدة (USA)",
        geo_ca: "كندا (تورونتو / مونتريال)",
        grp_latam: "أمريكا اللاتينية",
        geo_br: "البرازيل (ساو باولو)",
        geo_latam: "أمريكا اللاتينية (المكسيك، كولومبيا...)",
        grp_apac: "آسيا والمحيط الهادئ",
        geo_cn: "الصين (شنغهاي / بكين)",
        geo_sg: "سنغافورة (مركز APAC)",
        geo_in: "الهند (مومباي / بنغالور)",
        grp_eu: "أوروبا",
        geo_fr: "فرنسا (مركز باريس)",
        geo_uk: "المملكة المتحدة (لندن)",
        geo_eu: "الاتحاد الأوروبي (ألمانيا، إسبانيا...)",
        grp_mena: "الشرق الأوسط (MENA)",
        geo_ae: "الإمارات (مركز دبي)",
        geo_sa: "السعودية (الرياض)",
        grp_global: "عالمي",
        geo_global: "دولي / مناطق متعددة",
        
        lbl_expertise: "الخبرة المطلوبة",
        exp_ai: "الذكاء الاصطناعي التوليدي",
        exp_cyber: "الأمن السيبراني",
        exp_esg: "الهندسة البيئية",
        exp_web3: "البلوكشين (Woleet)",
        exp_mkt: "التسويق الرقمي",
        exp_proc: "تحسين العمليات",
        exp_hr: "الموارد البشرية",
        exp_design: "تجربة المستخدم",
        
        btn_prev: "رجوع",
        btn_next_matrice: "فتح مصفوفة التحليل",
        
        step3_title: "03. مصفوفة التحليل",
        lbl_context: "السياق التشغيلي",
        ph_context: "صف وضعك الحالي وأهدافك لمدة 1-3 سنوات والتحديات الرئيسية (المنافسة، التمويل، التحول الرقمي...). كلما قدمت تفاصيل أكثر، كانت توصيات الذكاء الاصطناعي أكثر دقة.",
        lbl_file_upload: "📄 إرفاق مستند (اختياري)",
        btn_browse: "تصفح...",
        lbl_no_file: "لم يتم تحديد أي ملف",
        lbl_file_desc: "ضمان الملكية الفكرية: محمي بواسطة البلوكشين.",
        legal_consent: "أوافق على",
        link_privacy: "سياسة الخصوصية الرسمية",
        lbl_wa_optin: "أوافق على تلقي تحليلي عبر واتساب.",
        btn_submit: "بدء تحليل الذكاء الاصطناعي",
        
        footer_rights: "جميع الحقوق محفوظة.",
        modal_res_title: "التشخيص الاستراتيجي",
        btn_new_analysis: "تحليل جديد",
        msg_reset_confirm: "هل تريد حقًا البدء من جديد؟",
        
        // --- GUIDE LEXIQUE ---
        guide_title: "المعجم الاستراتيجي",
        guide_sec_title: "1. القطاعات الاستراتيجية",
        guide_sec_desc: "<strong style='color:#d4af37;'>• التكنولوجيا المالية:</strong> التمويل الرقمي، المدفوعات واللامركزية.<br><strong style='color:#d4af37;'>• تكنولوجيا الحكومة:</strong> تحديث الدولة ورقمنة الخدمات العامة.<br><strong style='color:#d4af37;'>• الصحة والتكنولوجيا الحيوية:</strong> الابتكارات الطبية وإدارة البيانات الصحية.<br><strong style='color:#d4af37;'>• التكنولوجيا الخضراء:</strong> التحول البيئي وإزالة الكربون والطاقة المتجددة.<br><strong style='color:#d4af37;'>• التكنولوجيا الزراعية:</strong> الأمن الغذائي والتحسين التكنولوجي الزراعي.<br><strong style='color:#d4af37;'>• اللوجستيات:</strong> تحسين سلسلة التوريد والتتبع العالمي.<br><strong style='color:#d4af37;'>• التعدين والغاز:</strong> الاستخراج الذكي والسلامة والامتثال.<br><strong style='color:#d4af37;'>• تكنولوجيا العقارات:</strong> الابتكار العقاري وإدارة المباني الذكية.<br><strong style='color:#d4af37;'>• التجارة الإلكترونية:</strong> التجزئة الرقمية، تجربة العملاء والمعاملات.<br><strong style='color:#d4af37;'>• تكنولوجيا التعليم:</strong> منصات التعلم ونقل المعرفة.<br><strong style='color:#d4af37;'>• السياحة:</strong> رقمنة الضيافة وإدارة التدفقات.<br><strong style='color:#d4af37;'>• الصناعات الإبداعية:</strong> الإعلام والترفيه والملكية الفكرية.",
        
        guide_exp_title: "2. الخبرات التكنولوجية",
        guide_exp_desc: "<strong style='color:#d4af37;'>• الذكاء الاصطناعي التوليدي:</strong> دمج الذكاء الاصطناعي للتحليل التنبؤي والأتمتة.<br><strong style='color:#d4af37;'>• الأمن السيبراني:</strong> حماية البنية التحتية الحيوية وتدقيق المرونة.<br><strong style='color:#d4af37;'>• الهندسة البيئية (ESG):</strong> الاستراتيجية البيئية والاجتماعية وحوكمة الشركات.<br><strong style='color:#d4af37;'>• الويب 3 والبلوكشين:</strong> تحويل الأصول إلى رموز، التتبع والتوثيق الرقمي (Woleet).<br><strong style='color:#d4af37;'>• التسويق الرقمي:</strong> استراتيجية الاستحواذ وتحسين محركات البحث.<br><strong style='color:#d4af37;'>• تحسين العمليات:</strong> التميز التشغيلي وخفض التكاليف.<br><strong style='color:#d4af37;'>• إدارة المواهب:</strong> التوظيف والاحتفاظ والتدريب.<br><strong style='color:#d4af37;'>• التفكير التصميمي:</strong> تجربة المستخدم (UX) وابتكار المنتجات.",
        
        // --- CHARTE JURIDIQUE EXHAUSTIVE ---
        modal_title: "سياسة السيادة والخصوصية",
        priv_date: "آخر تحديث: فبراير 2026",
        priv_t1: "1. الهوية والعمليات",
        priv_c1: "تعمل e-META LABS SASU كوحدة استخبارات استراتيجية دولية من مراكزها المختلفة (داكار، باريس، دبي). تقتصر البيانات التي يتم جمعها عبر منصتنا (B2B) بشكل صارم على نطاق إجراء التشخيصات الاستراتيجية بمساعدة الذكاء الاصطناعي.",
        priv_t2: "2. جمع البيانات ومعالجتها",
        priv_c2: "نحن نجمع فقط المعلومات الضرورية للتحليل: اسم الكيان، جهات الاتصال المهنية، السياق التشغيلي، والوثائق الاستراتيجية المقدمة طواعية. يمكن تسليم التحليل النهائي عبر تشفير شامل من طرف إلى طرف باستخدام واجهة برمجة تطبيقات WhatsApp Business، رهناً بالموافقة الصريحة للعميل.",
        priv_t3: "3. السيادة والذكاء الاصطناعي",
        priv_c3: "سرية استراتيجياتك هي أولويتنا القصوى. تتم معالجة المعلومات المقدمة لمحرك الذكاء الاصطناعي الخاص بنا (Google Gemini Pro/Flash) بشكل مؤقت عبر واجهات برمجة تطبيقات آمنة. لا يتم تدريب أي نماذج تعلم آلي عامة أو خاصة باستخدام بياناتك التشغيلية. يتم عزل المعالجة وإتلافها بعد إنشاء التقرير.",
        priv_t4: "4. توثيق البلوكشين والملكية الفكرية",
        priv_c4: "لضمان الحماية المطلقة لأفكارك ومفاهيمك، يتم تشفير أي مستند يتم تحميله على منصتنا فورًا (بخوارزمية SHA-256). يتم تثبيت هذه البصمة الرقمية الفريدة على تقنية البلوكشين العامة عبر واجهة Woleet. يمنحك هذا دليلاً رقميًا قاطعًا على إثبات الوجود بقيمة قانونية دولية، دون الحاجة إلى تخزين الملف الأصلي على خوادمنا على المدى الطويل.",
        priv_t5: "5. شرط عدم الاستبدال",
        priv_c5: "تشكل التقارير والتدقيقات والمصفوفات التي تم إنشاؤها بواسطة محرك الذكاء الاصطناعي التابع لـ e-META LABS أدوات دعم اتخاذ القرار الاستراتيجي عالية المستوى. يتم توفيرها لأغراض استشارية ولا تحل بأي حال من الأحوال محل الاستشارات القانونية أو الضريبية أو المالية المعتمدة من قبل المتخصصين المرخصين حسب الأصول من قبل السلطات المختصة.",
        priv_t6: "6. الاتصال والحقوق الدولية",
        priv_c6: "وفقًا للوائح حماية البيانات الدولية (GDPR الأوروبي، القوانين المحلية المعمول بها)، يحق لك الوصول إلى معلوماتك وتصحيحها ونقلها وحذفها. لممارسة هذه الحقوق أو لأي أسئلة تتعلق بامتثالنا، يرجى الاتصال بالقسم القانوني لدينا على: contact@e-metalabs.com.",
        
        btn_full_policy: "📑 اقرأ السياسة كاملة",
        url_policy: "privacy.html?lang=ar",
        btn_return: "العودة إلى محرك الذكاء الاصطناعي",
        btn_close: "إغلاق"
    }
};

// ==========================================
// MOTEUR D'APPLICATION DES LANGUES (INTOUCHÉ)
// ==========================================

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'OPTGROUP') {
                el.label = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    const policyLinkBtn = document.getElementById('policy_link');
    if (policyLinkBtn && translations[lang] && translations[lang]['url_policy']) {
        policyLinkBtn.href = translations[lang]['url_policy'];
    }

    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.href = `index.html?lang=${lang}`;
    }
}

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');
    
    const activeLang = langFromUrl || 'fr';
    setLanguage(activeLang);

    const langButtons = document.querySelectorAll('.lang-switch button');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            setLanguage(selectedLang);
            
            const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?lang=' + selectedLang;
            window.history.pushState({path:newUrl}, '', newUrl);
        });
    });
});
