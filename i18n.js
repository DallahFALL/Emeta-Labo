/* * PROJET : e-META LABS
 * FICHIER : i18n.js (Traduction Intégrale + Pages Légales + Mémoire Sécurisée)
 */

const translations = {
    fr: {
        // --- VISION SUBLIME & UI ---
        hero_label: "MASTER DIAGNOSTIC 2026", hero_slogan_1: "Excellence Stratégique", hero_slogan_2: "& Haute Précision IA",
        subtitle: "Excellence Stratégique & Haute Précision IA", btn_reset: "↻ Reset", lbl_counter: "Diagnostics Sécurisés & Ancrés",
        step1_title: "01. Identification", lbl_company: "Société / Entité", ph_company: "ex: Groupe Alpha, Ministère...",
        lbl_email: "Email Professionnel", lbl_phone: "Numéro WhatsApp", btn_next: "Suivant",
        
        // --- MATRICE & EXPERTISES ---
        step2_title: "02. Matrice Stratégique", btn_guide: "📖 Guide des Expertises", lbl_sector: "Secteur Stratégique",
        sec_fintech: "FinTech & DeFi", sec_agri: "AgriTech & Food Security", sec_green: "GreenTech & Énergies",
        sec_gov: "GovTech & Smart Cities", sec_health: "Santé & BioTech", sec_log: "Logistique & Supply Chain",
        sec_mine: "Mines, Pétrole & Gaz", sec_btp: "Immobilier & PropTech", sec_retail: "E-commerce & Retail",
        sec_edu: "Éducation & EdTech", sec_tour: "Tourisme & Hôtellerie", sec_media: "Industries Créatives & Médias",
        sec_consulting: "Conseil & Services B2B", sec_saas: "SaaS & Éditeurs Logiciels", sec_telecom: "Télécoms & Infrastructures",
        sec_other: "Autre / Sur-mesure", lbl_custom_sector: "Précisez votre industrie :", ph_custom_sector: "Ex: Sport Professionnel, Aérospatial...",
        lbl_geo: "Zone d'Intervention", opt_geo_def: "Sélectionner votre pays exact...",
        
        // --- LISTE DES PAYS ---
        c_za: "Afrique du Sud", c_dz: "Algérie", c_de: "Allemagne", c_sa: "Arabie Saoudite", c_ar: "Argentine", 
        c_au: "Australie", c_be: "Belgique", c_bj: "Bénin", c_br: "Brésil", c_bf: "Burkina Faso", c_bi: "Burundi", 
        c_cm: "Cameroun", c_ca: "Canada", c_cv: "Cap-Vert", c_cf: "Centrafrique", c_cl: "Chili", c_cn: "Chine", 
        c_co: "Colombie", c_cg: "Congo", c_cd: "RD Congo", c_kr: "Corée du Sud", c_ci: "Côte d'Ivoire", c_dj: "Djibouti", 
        c_eg: "Égypte", c_ae: "Émirats Arabes Unis", c_es: "Espagne", c_us: "États-Unis", c_et: "Éthiopie", 
        c_fr: "France", c_ga: "Gabon", c_gn: "Guinée", c_gq: "Guinée équatoriale", c_in: "Inde", c_it: "Italie", 
        c_jp: "Japon", c_ke: "Kenya", c_mg: "Madagascar", c_ml: "Mali", c_ma: "Maroc", c_mu: "Maurice", 
        c_mr: "Mauritanie", c_mx: "Mexique", c_ne: "Niger", c_ng: "Nigeria", c_ug: "Ouganda", c_uk: "Royaume-Uni", 
        c_rw: "Rwanda", c_sn: "Sénégal", c_ch: "Suisse", c_td: "Tchad", c_tg: "Togo", c_tn: "Tunisie", c_other: "Autre pays...",
        
        lbl_expertise: "Expertise Requise",
        exp_ai: "GenAI & Data Science", exp_cyber: "Cybersécurité & Résilience", exp_esg: "Ingénierie ESG & Climat",
        exp_web3: "Web3 & Blockchain (Bitcoin OTS)", exp_mkt: "Marketing Digital & SEO", exp_proc: "Optimisation des Processus",
        exp_hr: "Gestion des Talents (RH)", exp_design: "Design Thinking & UX", exp_gtm: "Go-to-Market & Growth Strategy", exp_auto: "Auto-Détection par l'IA",
        
        btn_prev: "Retour", btn_next_matrice: "Ouvrir Matrice",
        
        // --- ETAPE 3 ---
        step3_title: "03. Matrice Analyse", lbl_context: "Contexte Opérationnel", ph_context: "Décrivez votre situation actuelle, vos objectifs à 1-3 ans et vos défis majeurs. Plus vous fournirez de détails, plus les recommandations de l'IA seront chirurgicales.",
        lbl_file_upload: "📄 Joindre un Document (Optionnel)", btn_browse: "Parcourir...", lbl_no_file: "Aucun fichier",
        lbl_file_desc: "Propriété Intellectuelle garantie : Votre fichier sera scellé (Woleet).", legal_consent: "J'accepte la", link_privacy: "Politique de Confidentialité Officielle",
        lbl_wa_optin: "J'accepte de recevoir mon analyse par WhatsApp.", btn_submit: "Lancer l'Analyse IA",
        
        footer_rights: "Tous droits réservés.", modal_res_title: "Diagnostic Stratégique", btn_new_analysis: "Nouvelle Analyse", msg_reset_confirm: "Voulez-vous vraiment recommencer ?",
        
        // --- GUIDE LEXIQUE ---
        guide_title: "Lexique Stratégique", guide_sec_title: "1. Secteurs Stratégiques",
        lex_sec_fintech: "<strong>• FinTech & DeFi :</strong> Finance numérique, paiements et décentralisation.",
        lex_sec_gov: "<strong>• GovTech & Smart Cities :</strong> Modernisation de l'État et numérisation des services publics.",
        lex_sec_health: "<strong>• Santé & BioTech :</strong> Innovations médicales et gestion des données de santé.",
        lex_sec_green: "<strong>• GreenTech & Énergies :</strong> Transition écologique, décarbonation et énergies renouvelables.",
        lex_sec_agri: "<strong>• AgriTech & Food Sec. :</strong> Sécurité alimentaire et optimisation technologique agricole.",
        lex_sec_log: "<strong>• Logistique & Supply :</strong> Optimisation de la chaîne logistique et traçabilité globale.",
        lex_sec_mine: "<strong>• Mines, Pétrole & Gaz :</strong> Extraction intelligente, sécurité et conformité.",
        lex_sec_btp: "<strong>• Immobilier & PropTech:</strong> Innovation immobilière et gestion de bâtiments intelligents.",
        lex_sec_retail: "<strong>• E-commerce & Retail :</strong> Retail digital, expérience client et transactions.",
        lex_sec_edu: "<strong>• Éducation (EdTech) :</strong> Plateformes d'apprentissage et transmission du savoir.",
        lex_sec_tour: "<strong>• Tourisme & Hôtellerie:</strong> Digitalisation de l'hôtellerie et gestion des flux.",
        lex_sec_media: "<strong>• Industries Créatives :</strong> Médias, divertissement et propriété intellectuelle.",
        lex_sec_consulting: "<strong>• Conseil & Services B2B :</strong> Stratégie d'entreprise, transformation digitale et accompagnement des dirigeants.",
        lex_sec_saas: "<strong>• SaaS & Éditeurs :</strong> Développement de solutions cloud, scalabilité et modèles d'abonnement.",
        lex_sec_telecom: "<strong>• Télécoms & Infra. :</strong> Connectivité à haut débit, data centers et souveraineté des réseaux.",

        guide_exp_title: "2. Expertises Technologiques",
        lex_exp_ai: "<strong>• GenAI & Data Science :</strong> Intégration de l'IA pour l'analyse prédictive et l'automatisation.",
        lex_exp_cyber: "<strong>• Cybersécurité :</strong> Protection des infrastructures critiques et audit de résilience.",
        lex_exp_esg: "<strong>• Ingénierie ESG :</strong> Stratégie environnementale, sociale et de gouvernance.",
        lex_exp_web3: "<strong>• Web3 & Blockchain :</strong> Ancrage numérique certifié sur la Blockchain Bitcoin via OpenTimestamps.",
        lex_exp_mkt: "<strong>• Marketing Digital :</strong> Stratégie d'acquisition, visibilité en ligne et conversion.",
        lex_exp_proc: "<strong>• Opti. des Processus :</strong> Excellence opérationnelle et réduction des coûts (RPA).",
        lex_exp_hr: "<strong>• Gestion des Talents :</strong> Recrutement prédictif, rétention et formation 2.0.",
        lex_exp_design: "<strong>• Design Thinking :</strong> Expérience utilisateur et innovation produit.",
        lex_exp_gtm: "<strong>• Go-to-Market & Growth:</strong> Stratégie de pénétration de marché, distribution et acquisition client asymétrique.",

        // TARIFS e-META LABS
        pricing_starter_name: "STARTER", pricing_starter_desc: "Pour tester la puissance analytique d'e-META LABS.", pricing_starter_price: "0 FCFA",
        pricing_starter_feat1: "✓ 2 Diagnostics foudroyants", pricing_starter_feat2: "✓ Identification du risque majeur", pricing_starter_feat3: "✓ Format texte (Email)", pricing_starter_feat4: "⚠️ Plan d'action stratégique non inclus", pricing_starter_btn: "Tester gratuitement",
        pricing_pro_badge: "LE PLUS POPULAIRE", pricing_pro_name: "PRO (PACK 3)", pricing_pro_desc: "Un pack de <strong>3 audits stratégiques</strong> complets et sans concession.", pricing_pro_price: "14 900 FCFA", pricing_pro_period: "",
        pricing_pro_feat1: "✓ <strong>3 Rapports</strong> complets", pricing_pro_feat2: "✓ Diagnostic financier & KPI", pricing_pro_feat3: "✓ Stratégies de disruption", pricing_pro_feat4: "✓ Rapports PDF Premium", pricing_pro_btn: "Acheter le Pack",
        pricing_expert_name: "EXPERT", pricing_expert_desc: "Votre cellule de prospective disponible 24/7.", pricing_expert_price: "29 000 FCFA", pricing_expert_period: "/ mois",
        pricing_expert_feat1: "✓ Jusqu'à 10 Audits / mois", pricing_expert_feat2: "✓ <b>Veille Data en temps réel</b>", pricing_expert_feat3: "✓ Protocole d'action sur 7 jours", pricing_expert_feat4: "✓ Livraison VIP (WhatsApp)", pricing_expert_btn: "S'abonner",
        
        btn_return_site: "← Retour au Moteur IA",
        link_mentions: "Mentions Légales", link_cgv: "CGV", link_confidentialite: "Confidentialité", link_remboursement: "Remboursement",

        // --- TEXTES LEGAUX INTÉGRAUX (FR) ---
        content_mentions: `<h1>Mentions Légales</h1><h2>1. Éditeur du site</h2><p>Le site <strong>e-metalabs.com</strong> (et e-meta.app) est édité par la société <strong>E-META LABS</strong>.<br><strong>Forme juridique :</strong> SASU au capital social de 500 000 FCFA.<br><strong>Siège social :</strong> Face Débarcadère, Rosso, Sénégal.<br><strong>RCCM :</strong> SN STL 2026 B768<br><strong>NINEA :</strong> 012887553<br><strong>Directeur de la publication :</strong> Abdoulaye Fall<br><strong>Contact :</strong> support@e-metalabs.com</p><h2>2. Hébergement</h2><p>L'infrastructure front-end est hébergée via GitHub Pages et nos serveurs cloud sont gérés par <strong>OVH Groupe SAS</strong>.<br><strong>Siège social OVH :</strong> 2 rue Kellermann, 59100 Roubaix, France.</p><h2>3. Propriété Intellectuelle</h2><p>L'ensemble des éléments figurant sur cette plateforme (textes, algorithmes, architecture, logos) est protégé par les dispositions du Code de la Propriété Intellectuelle. Toute reproduction ou tentative d'ingénierie inverse est strictement interdite sans l'accord écrit de E-META LABS.</p>`,
        
        content_cgv: `<h1>Conditions Générales de Vente (CGV)</h1><h2>1. Objet</h2><p>Les présentes CGV régissent la vente des services d'audit stratégique automatisé par Intelligence Artificielle fournis par E-META LABS (SASU, NINEA 012887553, Rosso Sénégal).</p><h2>2. Processus et Livraison</h2><p>Après validation du paiement, le rapport d'audit est généré et expédié exclusivement sous format numérique (PDF). La livraison s'effectue de manière asynchrone via l'application WhatsApp au numéro indiqué par le client, ou par courrier électronique.</p><h2>3. Tarification et Revendeurs (Merchant of Record)</h2><p>Les prix sont indiqués sur le site en FCFA ou devises équivalentes (EUR/USD). Les paiements sont sécurisés par nos partenaires financiers :</p><ul><li><strong>Transactions Internationales (Paddle) :</strong> Notre processus de commande est géré par Paddle.com. Paddle.com Market Ltd est le revendeur légal pour ces commandes.</li><li><strong>Transactions UEMOA (PayTech) :</strong> Les paiements par Mobile Money sont traités et sécurisés par l'infrastructure PayTech au Sénégal.</li></ul><h2>4. Responsabilité Opérationnelle</h2><p>Les diagnostics fournis par E-META LABS sont générés par une IA. Ils constituent un outil d'aide à la décision mais ne peuvent se substituer à une consultation juridique, fiscale ou médicale certifiée. E-META LABS décline toute responsabilité quant aux décisions prises sur la base exclusive de ces rapports.</p>`,
        
        content_confidentialite: `<h1>Politique de Confidentialité (RGPD & CDP)</h1><h2>1. Collecte des données stratégiques</h2><p>Le Moteur E-META LABS collecte : le Nom de l'entité, l'Email professionnel, le Numéro WhatsApp, le Secteur d'activité, ainsi que les données de contexte et documents fournis volontairement.</p><h2>2. Finalité et Sécurité (Zero-Data Retention)</h2><p>Vos données servent uniquement à calibrer et générer l'audit via notre Moteur IA, puis à vous l'expédier. Nous appliquons une politique stricte de "Zero-Data Retention" au niveau des modèles de langage (LLM) tiers : vos données industrielles ne sont <strong>jamais</strong> utilisées pour entraîner des algorithmes publics. Votre secret professionnel est garanti.</p><h2>3. Partage aux sous-traitants accrédités</h2><p>Pour assurer le service, vos données transitent de manière cryptée (SSL/TLS) via nos partenaires : OpenAI/Google Cloud (Traitement IA), Meta (API WhatsApp Business), et Paddle/PayTech (Facturation). E-META LABS ne revend aucune donnée.</p><h2>4. Exercice de vos Droits</h2><p>Conformément au RGPD européen et à la CDP (Sénégal), vous disposez d'un droit absolu d'accès, de rectification et d'effacement de vos données. Pour l'exercer, contactez notre DPO : <strong>support@e-metalabs.com</strong>.</p>`,
        
        content_remboursement: `<h1>Politique de Remboursement et Rétractation</h1><h2>1. Nature du produit numérique</h2><p>Les services proposés par E-META LABS constituent des prestations de génération immédiate de contenus numériques hautement personnalisés (Audits Stratégiques PDF).</p><h2>2. Renoncement au droit de rétractation</h2><p>En cochant la case d'acceptation lors de la commande, <strong>le Client accepte expressément que l'exécution du service (ingestion des données par l'IA) commence immédiatement après le succès du paiement.</strong> Conformément aux lois internationales sur la consommation de biens numériques immatériels, le Client renonce par conséquent à son droit de rétractation de 14 jours dès lors que la génération a démarré et que le rapport a été expédié.</p><h2>3. Conditions exceptionnelles de remboursement</h2><p>E-META LABS accordera un remboursement intégral et immédiat <strong>uniquement</strong> dans les cas suivants :</p><ul><li>Échec technique avéré de notre serveur empêchant la génération ou la livraison finale du rapport.</li><li>Double facturation accidentelle due à une erreur de la passerelle de paiement (PayTech ou Paddle).</li></ul><h2>4. Procédure de réclamation</h2><p>Toute demande technique ou de remboursement doit être adressée dans un délai maximum de 14 jours à notre cellule de support : <strong>support@e-metalabs.com</strong>.</p>`
    },
    en: {
        hero_label: "MASTER DIAGNOSTIC 2026", hero_slogan_1: "Strategic Excellence", hero_slogan_2: "& High Precision AI",
        subtitle: "Strategic Excellence & High Precision AI", btn_reset: "↻ Reset", lbl_counter: "Secured & Anchored Diagnostics",
        step1_title: "01. Identification", lbl_company: "Company / Entity", ph_company: "e.g., Alpha Group...",
        lbl_email: "Corporate Email", lbl_phone: "WhatsApp Number", btn_next: "Next",
        
        step2_title: "02. Strategic Matrix", btn_guide: "📖 Expertise Guide", lbl_sector: "Strategic Sector",
        sec_fintech: "FinTech & DeFi", sec_agri: "AgriTech & Food Security", sec_green: "GreenTech & Energy",
        sec_gov: "GovTech & Smart Cities", sec_health: "Healthcare & BioTech", sec_log: "Logistics & Supply Chain",
        sec_mine: "Mining, Oil & Gas", sec_btp: "Real Estate & PropTech", sec_retail: "E-commerce & Retail",
        sec_edu: "Education & EdTech", sec_tour: "Tourism & Hospitality", sec_media: "Creative Industries & Media",
        sec_consulting: "Consulting & B2B Services", sec_saas: "SaaS & Software Providers", sec_telecom: "Telecom & Infrastructure",
        sec_other: "Other / Custom", lbl_custom_sector: "Specify your industry:", ph_custom_sector: "Ex: Professional Sports, Aerospace...",
        lbl_geo: "Area of Operation", opt_geo_def: "Select your exact country...",
        
        c_za: "South Africa", c_dz: "Algeria", c_de: "Germany", c_sa: "Saudi Arabia", c_ar: "Argentina", 
        c_au: "Australia", c_be: "Belgium", c_bj: "Benin", c_br: "Brazil", c_bf: "Burkina Faso", c_bi: "Burundi", 
        c_cm: "Cameroon", c_ca: "Canada", c_cv: "Cape Verde", c_cf: "Central African Republic", c_cl: "Chile", c_cn: "China", 
        c_co: "Colombia", c_cg: "Congo", c_cd: "DR Congo", c_kr: "South Korea", c_ci: "Ivory Coast", c_dj: "Djibouti", 
        c_eg: "Egypt", c_ae: "United Arab Emirates", c_es: "Spain", c_us: "United States", c_et: "Ethiopia", 
        c_fr: "France", c_ga: "Gabon", c_gn: "Guinea", c_gq: "Equatorial Guinea", c_in: "India", c_it: "Italy", 
        c_jp: "Japan", c_ke: "Kenya", c_mg: "Madagascar", c_ml: "Mali", c_ma: "Morocco", c_mu: "Mauritius", 
        c_mr: "Mauritania", c_mx: "Mexico", c_ne: "Niger", c_ng: "Nigeria", c_ug: "Uganda", c_uk: "United Kingdom", 
        c_rw: "Rwanda", c_sn: "Senegal", c_ch: "Switzerland", c_td: "Chad", c_tg: "Togo", c_tn: "Tunisia", c_other: "Other country...",

        lbl_expertise: "Required Expertise",
        exp_ai: "GenAI & Data Science", exp_cyber: "Cybersecurity & Resilience", exp_esg: "ESG Engineering & Climate",
        exp_web3: "Web3 & Blockchain (Bitcoin OTS)", exp_mkt: "Digital Marketing & SEO", exp_proc: "Process Optimization",
        exp_hr: "Talent Management (HR)", exp_design: "Design Thinking & UX", exp_gtm: "Go-to-Market & Growth Strategy", exp_auto: "AI Auto-Detection",
        
        btn_prev: "Back", btn_next_matrice: "Open Matrix",
        
        step3_title: "03. Analysis Matrix", lbl_context: "Operational Context", ph_context: "Describe your current situation, 1-3 year goals, and major challenges...",
        lbl_file_upload: "📄 Attach Document (Optional)", btn_browse: "Browse...", lbl_no_file: "No file selected",
        lbl_file_desc: "IP Guaranteed: File protected by Blockchain anchoring.", legal_consent: "I accept the", link_privacy: "Official Privacy Policy",
        lbl_wa_optin: "I agree to receive my analysis via WhatsApp.", btn_submit: "Launch AI Analysis", footer_rights: "All Rights Reserved.",
        modal_res_title: "Strategic Diagnostic", btn_new_analysis: "New Analysis", msg_reset_confirm: "Restart the form?",
        
        guide_title: "Strategic Glossary", guide_sec_title: "1. Strategic Sectors",
        lex_sec_fintech: "<strong>• FinTech & DeFi:</strong> Digital finance, payments, and decentralization.",
        lex_sec_gov: "<strong>• GovTech & Smart Cities:</strong> State modernization and public service digitization.",
        lex_sec_health: "<strong>• Health & BioTech:</strong> Medical innovations and health data management.",
        lex_sec_green: "<strong>• GreenTech & Energy:</strong> Ecological transition, decarbonization, and renewable energy.",
        lex_sec_agri: "<strong>• AgriTech & Food Sec.:</strong> Food security and agricultural technological optimization.",
        lex_sec_log: "<strong>• Logistics & Supply:</strong> Supply chain optimization and global traceability.",
        lex_sec_mine: "<strong>• Mining, Oil & Gas:</strong> Smart extraction, safety, and compliance.",
        lex_sec_btp: "<strong>• PropTech:</strong> Real estate innovation and smart building management.",
        lex_sec_retail: "<strong>• E-commerce & Retail:</strong> Digital retail, customer experience, and transactions.",
        lex_sec_edu: "<strong>• Education (EdTech):</strong> Learning platforms and knowledge transfer.",
        lex_sec_tour: "<strong>• Tourism & Hospitality:</strong> Hospitality digitization and flow management.",
        lex_sec_media: "<strong>• Creative Industries:</strong> Media, entertainment, and intellectual property.",
        lex_sec_consulting: "<strong>• Consulting & B2B:</strong> Corporate strategy, digital transformation, and executive advisory.",
        lex_sec_saas: "<strong>• SaaS & Software:</strong> Cloud solutions development, scalability, and subscription models.",
        lex_sec_telecom: "<strong>• Telecom & Infra.:</strong> High-speed connectivity, data centers, and network sovereignty.",

        guide_exp_title: "2. Technological Expertise",
        lex_exp_ai: "<strong>• GenAI & Data:</strong> AI integration for predictive analysis and automation.",
        lex_exp_cyber: "<strong>• Cybersecurity:</strong> Protection of critical infrastructure and resilience audits.",
        lex_exp_esg: "<strong>• ESG Engineering:</strong> Environmental, Social, and Governance strategy.",
        lex_exp_web3: "<strong>• Web3 & Blockchain :</strong> Certified digital anchoring on the Bitcoin Blockchain.",
        lex_exp_mkt: "<strong>• Digital Marketing:</strong> Acquisition strategy, SEO, and online visibility.",
        lex_exp_proc: "<strong>• Process Opti.:</strong> Operational excellence and cost reduction.",
        lex_exp_hr: "<strong>• Talent Mgt (HR):</strong> Recruitment, retention, and 2.0 training.",
        lex_exp_design: "<strong>• Design Thinking:</strong> User experience (UX) and product innovation.",
        lex_exp_gtm: "<strong>• Go-to-Market & Growth:</strong> Market penetration strategy, distribution, and asymmetric client acquisition.",

        pricing_starter_name: "STARTER", pricing_starter_desc: "To test the analytical power of e-META LABS.", pricing_starter_price: "$0",
        pricing_starter_feat1: "✓ 2 Lightning-fast diagnostics", pricing_starter_feat2: "✓ Major risk identification", pricing_starter_feat3: "✓ Text format (Email)", pricing_starter_feat4: "⚠️ Strategic action plan not included", pricing_starter_btn: "Test for free",
        pricing_pro_badge: "MOST POPULAR", pricing_pro_name: "PRO (PACK 3)", pricing_pro_desc: "A pack of <strong>3 comprehensive</strong> and uncompromising strategic audits.", pricing_pro_price: "$25", pricing_pro_period: "",
        pricing_pro_feat1: "✓ <strong>3 Complete Reports</strong>", pricing_pro_feat2: "✓ Financial diagnosis & KPIs", pricing_pro_feat3: "✓ Disruption strategy (Pivot)", pricing_pro_feat4: "✓ Premium PDF Reports", pricing_pro_btn: "Buy the Pack",
        pricing_expert_name: "EXPERT", pricing_expert_desc: "Your strategic foresight unit available 24/7.", pricing_expert_price: "$49", pricing_expert_period: "/ month",
        pricing_expert_feat1: "✓ Up to 10 Audits / month", pricing_expert_feat2: "✓ <b>Real-time Data tracking</b>", pricing_expert_feat3: "✓ 7-day action protocol", pricing_expert_feat4: "✓ VIP Delivery (WhatsApp)", pricing_expert_btn: "Subscribe",

        btn_return_site: "← Return to AI Engine",
        link_mentions: "Legal Notice", link_cgv: "T&C", link_confidentialite: "Privacy Policy", link_remboursement: "Refund Policy",

        // --- TEXTES LEGAUX INTÉGRAUX (EN) ---
        content_mentions: `<h1>Legal Notice</h1><h2>1. Site Publisher</h2><p>The site <strong>e-metalabs.com</strong> (and e-meta.app) is published by <strong>E-META LABS</strong>.<br><strong>Legal form:</strong> SASU with a share capital of 500,000 FCFA.<br><strong>Head office:</strong> Face Débarcadère, Rosso, Senegal.<br><strong>RCCM:</strong> SN STL 2026 B768<br><strong>NINEA:</strong> 012887553<br><strong>Director of Publication:</strong> Abdoulaye Fall<br><strong>Contact:</strong> support@e-metalabs.com</p><h2>2. Hosting</h2><p>The front-end infrastructure is hosted via GitHub Pages and our cloud servers are managed by <strong>OVH Groupe SAS</strong>.<br><strong>OVH Head Office:</strong> 2 rue Kellermann, 59100 Roubaix, France.</p><h2>3. Intellectual Property</h2><p>All elements on this platform (texts, algorithms, architecture, logos) are protected by Intellectual Property laws. Any reproduction or reverse engineering attempt is strictly prohibited without the written consent of E-META LABS.</p>`,
        
        content_cgv: `<h1>Terms and Conditions of Sale (T&C)</h1><h2>1. Purpose</h2><p>These T&Cs govern the sale of automated strategic audit services powered by Artificial Intelligence provided by E-META LABS (SASU, NINEA 012887553, Rosso Senegal).</p><h2>2. Process and Delivery</h2><p>Upon payment validation, the audit report is generated and delivered exclusively in digital format (PDF). Delivery is performed asynchronously via the WhatsApp application to the number provided by the client, or via email.</p><h2>3. Pricing and Merchant of Record</h2><p>Prices are listed in FCFA or equivalent currencies (EUR/USD). Payments are secured by our financial partners:</p><ul><li><strong>International Transactions (Paddle):</strong> Our order process is conducted by our online reseller Paddle.com. Paddle.com Market Ltd is the Merchant of Record for all our orders.</li><li><strong>UEMOA Transactions (PayTech):</strong> Mobile Money payments are processed and secured end-to-end by the PayTech infrastructure in Senegal.</li></ul><h2>4. Operational Liability</h2><p>The diagnostics provided by E-META LABS are generated by AI. They constitute a highly valuable strategic decision-making tool, but cannot substitute for certified legal, tax, or medical consultation. E-META LABS declines any responsibility for decisions made solely based on these reports.</p>`,
        
        content_confidentialite: `<h1>Privacy Policy (GDPR compliant)</h1><h2>1. Strategic Data Collection</h2><p>E-META LABS collects: Entity Name, Corporate Email, WhatsApp Number, Industry Sector, as well as context data and strategic documents voluntarily provided by the user.</p><h2>2. Purpose and Security (Zero-Data Retention)</h2><p>Your data is used solely to calibrate and generate the audit via our AI Engine, and to deliver it to you. We apply a strict "Zero-Data Retention" policy regarding third-party Large Language Models (LLMs): your industrial data is <strong>never</strong> used to train public algorithms. Your trade secrets are guaranteed.</p><h2>3. Sharing with Accredited Processors</h2><p>To provide the service, your data transits securely (SSL/TLS encrypted) via our partner infrastructures: OpenAI/Google Cloud (AI Processing), Meta (WhatsApp Business API), and Paddle/PayTech (Billing security). E-META LABS does not sell any data to third-party brokers.</p><h2>4. Exercising Your Rights</h2><p>In accordance with the European GDPR and applicable local laws, you have an absolute right to access, rectify, and erase your data. To exercise this right, contact our Data Protection Officer (DPO): <strong>support@e-metalabs.com</strong>.</p>`,
        
        content_remboursement: `<h1>Refund and Cancellation Policy</h1><h2>1. Nature of the Digital Product</h2><p>The services offered by E-META LABS constitute the immediate generation of highly personalized digital content (Strategic PDF Audits).</p><h2>2. Waiver of the Right of Withdrawal</h2><p>By checking the acceptance box during the order process, <strong>the Client expressly agrees that the execution of the service (data ingestion by the AI) begins immediately after successful payment.</strong> In accordance with international consumer laws regarding intangible digital goods, the Client therefore waives their 14-day right of withdrawal once the generation process has started and the report has been dispatched.</p><h2>3. Exceptional Refund Conditions</h2><p>E-META LABS (and its Merchant of Record Paddle for international transactions) will grant a full and immediate refund <strong>only</strong> in the following cases:</p><ul><li>Proven technical failure of our server preventing the final generation or delivery of the PDF report.</li><li>Accidental double billing due to an error by the payment gateway (PayTech or Paddle).</li></ul><h2>4. Claim Procedure</h2><p>Any request for technical assistance or refund related to an operational incident must be sent within a maximum of 14 days after the transaction to our support team: <strong>support@e-metalabs.com</strong>.</p>`
    },
    es: {
        hero_label: "DIAGNÓSTICO MAESTRO 2026", hero_slogan_1: "Excelencia Estratégica", hero_slogan_2: "& Alta Precisión IA",
        subtitle: "Excelencia Estratégica y Alta Precisión IA", btn_reset: "↻ Reiniciar", lbl_counter: "Diagnósticos Asegurados",
        step1_title: "01. Identificación", lbl_company: "Empresa / Entidad", ph_company: "ej. Grupo Alfa...",
        lbl_email: "Correo Profesional", lbl_phone: "Número WhatsApp", btn_next: "Siguiente",
        
        step2_title: "02. Matriz Estratégica", btn_guide: "📖 Guía de Especialidades", lbl_sector: "Sector Estratégico",
        sec_fintech: "FinTech y DeFi", sec_agri: "AgriTech y Seguridad Alimentaria", sec_green: "GreenTech y Energía",
        sec_gov: "GovTech y Smart Cities", sec_health: "Salud y BioTech", sec_log: "Logística y Cadena",
        sec_mine: "Minería, Petróleo y Gas", sec_btp: "Bienes Raíces y PropTech", sec_retail: "E-commerce y Retail",
        sec_edu: "Educación y EdTech", sec_tour: "Turismo y Hostelería", sec_media: "Industrias Creativas",
        sec_consulting: "Consultoría y B2B", sec_saas: "SaaS y Software", sec_telecom: "Telecomunicaciones",
        sec_other: "Otro / A medida", lbl_custom_sector: "Especifique su industria:", ph_custom_sector: "Ej: Deporte Profesional, Aeroespacial...",
        lbl_geo: "Zona de Intervención", opt_geo_def: "Seleccione su país exacto...",
        
        c_za: "Sudáfrica", c_dz: "Argelia", c_de: "Alemania", c_sa: "Arabia Saudita", c_ar: "Argentina", 
        c_au: "Australia", c_be: "Bélgica", c_bj: "Benín", c_br: "Brasil", c_bf: "Burkina Faso", c_bi: "Burundi", 
        c_cm: "Camerún", c_ca: "Canadá", c_cv: "Cabo Verde", c_cf: "República Centroafricana", c_cl: "Chile", c_cn: "China", 
        c_co: "Colombia", c_cg: "Congo", c_cd: "RD Congo", c_kr: "Corea del Sur", c_ci: "Costa de Marfil", c_dj: "Yibuti", 
        c_eg: "Egipto", c_ae: "Emiratos Árabes Unidos", c_es: "España", c_us: "Estados Unidos", c_et: "Etiopía", 
        c_fr: "Francia", c_ga: "Gabón", c_gn: "Guinea", c_gq: "Guinea Ecuatorial", c_in: "India", c_it: "Italia", 
        c_jp: "Japón", c_ke: "Kenia", c_mg: "Madagascar", c_ml: "Malí", c_ma: "Marruecos", c_mu: "Mauricio", 
        c_mr: "Mauritania", c_mx: "México", c_ne: "Níger", c_ng: "Nigeria", c_ug: "Uganda", c_uk: "Reino Unido", 
        c_rw: "Ruanda", c_sn: "Senegal", c_ch: "Suiza", c_td: "Chad", c_tg: "Togo", c_tn: "Túnez", c_other: "Otro país...",

        lbl_expertise: "Experiencia Requerida",
        exp_ai: "GenAI y Data Science", exp_cyber: "Ciberseguridad y Resiliencia", exp_esg: "Ingeniería ESG y Clima",
        exp_web3: "Web3 y Blockchain (Bitcoin OTS)", exp_mkt: "Marketing Digital y SEO", exp_proc: "Optimización de Procesos",
        exp_hr: "Gestión de Talento (RRHH)", exp_design: "Design Thinking y UX", exp_gtm: "Go-to-Market y Crecimiento", exp_auto: "Auto-Detección por IA",
        
        btn_prev: "Volver", btn_next_matrice: "Abrir Matriz",
        
        step3_title: "03. Matriz de Análisis", lbl_context: "Contexto Operativo", ph_context: "Describa su situación actual, objetivos a 1-3 años y desafíos principales...",
        lbl_file_upload: "📄 Adjuntar Documento (Opcional)", btn_browse: "Explorar...", lbl_no_file: "Ningún archivo",
        lbl_file_desc: "Propiedad Intelectual garantizada: Archivo protegido por anclaje Blockchain.", legal_consent: "Acepto la", link_privacy: "Política de Privacidad Oficial",
        lbl_wa_optin: "Acepto recibir mi análisis a través de WhatsApp.", btn_submit: "Lanzar Análisis IA", footer_rights: "Todos los derechos reservados.",
        modal_res_title: "Diagnóstico Estratégico", btn_new_analysis: "Nuevo Análisis", msg_reset_confirm: "¿Deseas reiniciar?",
        
        guide_title: "Glosario Estratégico", guide_sec_title: "1. Sectores Estratégicos",
        lex_sec_fintech: "<strong>• FinTech y DeFi:</strong> Finanzas digitales, pagos y descentralización.",
        lex_sec_gov: "<strong>• GovTech y Smart Cities:</strong> Modernización del Estado y digitalización de servicios públicos.",
        lex_sec_health: "<strong>• Salud y BioTech:</strong> Innovaciones médicas y gestión de datos de salud.",
        lex_sec_green: "<strong>• GreenTech y Energía:</strong> Transición ecológica, descarbonización y energías renovables.",
        lex_sec_agri: "<strong>• AgriTech y Alimentación:</strong> Seguridad alimentaria y optimización tecnológica agrícola.",
        lex_sec_log: "<strong>• Logística y Cadena:</strong> Optimización de la cadena de suministro y trazabilidad.",
        lex_sec_mine: "<strong>• Minería y Gas:</strong> Extracción inteligente, seguridad y cumplimiento.",
        lex_sec_btp: "<strong>• PropTech:</strong> Innovación inmobiliaria y gestión de edificios inteligentes.",
        lex_sec_retail: "<strong>• E-commerce y Retail:</strong> Retail digital, experiencia del cliente y transacciones.",
        lex_sec_edu: "<strong>• Educación (EdTech):</strong> Plataformas de aprendizaje y transferencia de conocimiento.",
        lex_sec_tour: "<strong>• Turismo y Hostelería:</strong> Digitalización de la hostelería y gestión de flujos.",
        lex_sec_media: "<strong>• Industrias Creativas:</strong> Medios, entretenimiento y propiedad intelectual.",
        lex_sec_consulting: "<strong>• Consultoría y B2B:</strong> Estrategia corporativa, transformación digital y asesoramiento ejecutivo.",
        lex_sec_saas: "<strong>• SaaS y Software:</strong> Desarrollo de soluciones en la nube, escalabilidad y modelos de suscripción.",
        lex_sec_telecom: "<strong>• Telecom e Infra.:</strong> Conectividad de alta velocidad, centros de datos y soberanía de redes.",

        guide_exp_title: "2. Experiencia Tecnológica",
        lex_exp_ai: "<strong>• GenAI & Data:</strong> Integración de IA para análisis predictivo y automatización.",
        lex_exp_cyber: "<strong>• Ciberseguridad:</strong> Protección de infraestructuras críticas y auditorías de resiliencia.",
        lex_exp_esg: "<strong>• Ingeniería ESG:</strong> Estrategia Ambiental, Social y de Gobernanza.",
        lex_exp_web3: "<strong>• Web3 & Blockchain :</strong> Anclaje digital certificado en la Blockchain de Bitcoin.",
        lex_exp_mkt: "<strong>• Marketing Digital:</strong> Estrategia de adquisición, SEO y visibilidad en línea.",
        lex_exp_proc: "<strong>• Optimización de Proc.:</strong> Excelencia operativa y reducción de costos.",
        lex_exp_hr: "<strong>• Gestión de Talento:</strong> Reclutamiento, retención y formación 2.0.",
        lex_exp_design: "<strong>• Design Thinking:</strong> Experiencia de usuario (UX) e innovación de productos.",
        lex_exp_gtm: "<strong>• Go-to-Market y Crecimiento:</strong> Estrategia de penetración de mercado y adquisición asimétrica.",

        pricing_starter_name: "STARTER", pricing_starter_desc: "Para probar el poder analítico de e-META LABS.", pricing_starter_price: "$0",
        pricing_starter_feat1: "✓ 2 Diagnósticos fulminantes", pricing_starter_feat2: "✓ Identificación de riesgo principal", pricing_starter_feat3: "✓ Formato texto (Email)", pricing_starter_feat4: "⚠️ Plan de acción estratégico no incluido", pricing_starter_btn: "Probar gratis",
        pricing_pro_badge: "MÁS POPULAR", pricing_pro_name: "PRO (PACK 3)", pricing_pro_desc: "Un paquete de <strong>3 auditorías estratégicas</strong> completas y sin concesiones.", pricing_pro_price: "$25", pricing_pro_period: "",
        pricing_pro_feat1: "✓ <strong>3 Informes completos</strong>", pricing_pro_feat2: "✓ Diagnóstico financiero y KPIs", pricing_pro_feat3: "✓ Estrategia de disrupción (Pivotar)", pricing_pro_feat4: "✓ Informes PDF Premium", pricing_pro_btn: "Comprar el Paquete",
        pricing_expert_name: "EXPERT", pricing_expert_desc: "Su unidad de prospectiva estratégica disponible 24/7.", pricing_expert_price: "$49", pricing_expert_period: "/ mes",
        pricing_expert_feat1: "✓ Hasta 10 Auditorías / mes", pricing_expert_feat2: "✓ <b>Vigilancia de Datos en tiempo real</b>", pricing_expert_feat3: "✓ Protocolo de acción de 7 días", pricing_expert_feat4: "✓ Entrega VIP (WhatsApp)", pricing_expert_btn: "Suscribirse",

        btn_return_site: "← Volver al Motor IA",
        link_mentions: "Aviso Legal", link_cgv: "CGV", link_confidentialite: "Privacidad", link_remboursement: "Reembolso",

        // --- TEXTES LEGAUX INTÉGRAUX (ES) ---
        content_mentions: `<h1>Aviso Legal</h1><h2>1. Editor del sitio</h2><p>El sitio <strong>e-metalabs.com</strong> (y e-meta.app) es editado por la empresa <strong>E-META LABS</strong>.<br><strong>Forma legal:</strong> SASU con un capital social de 500,000 FCFA.<br><strong>Sede social:</strong> Face Débarcadère, Rosso, Senegal.<br><strong>RCCM:</strong> SN STL 2026 B768<br><strong>NINEA:</strong> 012887553<br><strong>Director de Publicación:</strong> Abdoulaye Fall<br><strong>Contacto:</strong> support@e-metalabs.com</p><h2>2. Alojamiento</h2><p>La infraestructura front-end está alojada a través de GitHub Pages y nuestros servidores en la nube son gestionados por <strong>OVH Groupe SAS</strong>.<br><strong>Sede de OVH:</strong> 2 rue Kellermann, 59100 Roubaix, Francia.</p><h2>3. Propiedad Intelectual</h2><p>Todos los elementos de esta plataforma (textos, algoritmos, arquitectura, logotipos) están protegidos por las leyes de Propiedad Intelectual. Queda estrictamente prohibida cualquier reproducción o intento de ingeniería inversa sin el consentimiento escrito de E-META LABS.</p>`,
        
        content_cgv: `<h1>Términos y Condiciones de Venta (CGV)</h1><h2>1. Objeto</h2><p>Estos T&C rigen la venta de servicios de auditoría estratégica automatizada impulsada por Inteligencia Artificial proporcionados por E-META LABS (SASU, NINEA 012887553, Rosso Senegal).</p><h2>2. Proceso y Entrega</h2><p>Tras la validación del pago, el informe de auditoría se genera y entrega exclusivamente en formato digital (PDF). La entrega se realiza de forma asincrónica a través de la aplicación WhatsApp al número proporcionado por el cliente, o por correo electrónico.</p><h2>3. Precios y Comerciante Registrado (Merchant of Record)</h2><p>Los precios se indican en FCFA o monedas equivalentes (EUR/USD). Los pagos están asegurados por nuestros socios financieros:</p><ul><li><strong>Transacciones Internacionales (Paddle):</strong> Nuestro proceso de pedido es gestionado por Paddle.com. Paddle.com Market Ltd es el Comerciante Registrado (Merchant of Record) para estos pedidos.</li><li><strong>Transacciones UEMOA (PayTech):</strong> Los pagos de Mobile Money son procesados y asegurados de extremo a extremo por la infraestructura de PayTech en Senegal.</li></ul><h2>4. Responsabilidad Operativa</h2><p>Los diagnósticos proporcionados por E-META LABS son generados por IA. Constituyen una herramienta de apoyo a la toma de decisiones estratégicas, pero no pueden sustituir a una consulta legal, fiscal o médica certificada. E-META LABS declina toda responsabilidad por las decisiones tomadas basándose exclusivamente en estos informes.</p>`,
        
        content_confidentialite: `<h1>Política de Privacidad (Cumple con el RGPD)</h1><h2>1. Recopilación de Datos Estratégicos</h2><p>El Motor E-META LABS recopila: Nombre de la Entidad, Correo Profesional, Número de WhatsApp, Sector de la Industria, así como datos de contexto y documentos estratégicos proporcionados voluntariamente por el usuario.</p><h2>2. Propósito y Seguridad (Zero-Data Retention)</h2><p>Sus datos se utilizan únicamente para calibrar y generar la auditoría a través de nuestro Motor de IA, y luego enviársela. Aplicamos una política estricta de "Retención de Datos Cero" a nivel de los Modelos de Lenguaje (LLM) de terceros: sus datos industriales <strong>nunca</strong> se utilizan para entrenar algoritmos públicos. Su secreto profesional está garantizado.</p><h2>3. Intercambio con Subcontratistas Acreditados</h2><p>Para garantizar el servicio, sus datos transitan de forma cifrada (SSL/TLS) a través de nuestras infraestructuras asociadas: OpenAI/Google Cloud (Procesamiento de IA), Meta (API de WhatsApp Business) y Paddle/PayTech (Seguridad de facturación). E-META LABS no vende ningún dato a terceros.</p><h2>4. Ejercicio de sus Derechos</h2><p>De acuerdo con el RGPD europeo y las leyes locales aplicables, usted tiene un derecho absoluto a acceder, rectificar y borrar sus datos. Para ejercerlo, póngase en contacto con nuestro Delegado de Protección de Datos (DPO): <strong>support@e-metalabs.com</strong>.</p>`,
        
        content_remboursement: `<h1>Política de Reembolso y Cancelación</h1><h2>1. Naturaleza del Producto Digital</h2><p>Los servicios ofrecidos por E-META LABS constituyen la generación inmediata de contenido digital altamente personalizado (Auditorías Estratégicas PDF).</p><h2>2. Renuncia al Derecho de Desistimiento</h2><p>Al marcar la casilla de aceptación durante el pedido, <strong>el Cliente acepta expresamente que la ejecución del servicio (ingestión de datos por la IA) comience inmediatamente después del pago exitoso.</strong> De conformidad con las leyes internacionales de consumo sobre bienes digitales intangibles, el Cliente renuncia, por tanto, a su derecho de desistimiento de 14 días una vez que el proceso de generación ha comenzado y el informe ha sido enviado.</p><h2>3. Condiciones Excepcionales de Reembolso</h2><p>E-META LABS (y su Comerciante Registrado Paddle para transacciones internacionales) otorgará un reembolso total e inmediato <strong>únicamente</strong> en los siguientes casos:</p><ul><li>Fallo técnico comprobado de nuestro servidor que impida la generación o entrega final del informe PDF.</li><li>Doble facturación accidental debido a un error de la pasarela de pago (PayTech o Paddle).</li></ul><h2>4. Procedimiento de Reclamación</h2><p>Toda solicitud de asistencia técnica o reembolso relacionada con un incidente operativo debe enviarse en un plazo máximo de 14 días después de la transacción a nuestro equipo de soporte: <strong>support@e-metalabs.com</strong>.</p>`
    },
    ar: {
        hero_label: "التشخيص الرئيسي 2026", hero_slogan_1: "التميز الاستراتيجي", hero_slogan_2: "والذكاء الاصطناعي عالي الدقة",
        subtitle: "التميز الاستراتيجي والذكاء الاصطناعي عالي الدقة", btn_reset: "↻ إعادة تعيين", lbl_counter: "تشخيصات آمنة وموثقة",
        step1_title: "01. تحديد الهوية", lbl_company: "الشركة / المؤسسة", ph_company: "مثال: مجموعة ألفا...",
        lbl_email: "البريد الإلكتروني المهني", lbl_phone: "رقم الواتساب", btn_next: "التالي",
        
        step2_title: "02. المصفوفة الاستراتيجية", btn_guide: "📖 دليل الخبرات", lbl_sector: "القطاع الاستراتيجي",
        sec_fintech: "التكنولوجيا المالية", sec_agri: "التكنولوجيا الزراعية", sec_green: "التكنولوجيا الخضراء",
        sec_gov: "تكنولوجيا الحكومة", sec_health: "الصحة والتكنولوجيا الحيوية", sec_log: "سلسلة التوريد",
        sec_mine: "التعدين والغاز", sec_btp: "تكنولوجيا العقارات", sec_retail: "التجارة الإلكترونية",
        sec_edu: "تكنولوجيا التعليم", sec_tour: "السياحة والضيافة", sec_media: "الإعلام الإبداعي",
        sec_consulting: "الاستشارات وخدمات الشركات", sec_saas: "البرمجيات كخدمة وناشرو البرامج", sec_telecom: "الاتصالات والبنية التحتية",
        sec_other: "أخرى / مخصص", lbl_custom_sector: "حدد مجال عملك :", ph_custom_sector: "مثال: الرياضة الاحترافية، الفضاء...",
        lbl_geo: "منطقة التدخل", opt_geo_def: "حدد بلدك بالضبط...",
        
        c_za: "جنوب أفريقيا", c_dz: "الجزائر", c_de: "ألمانيا", c_sa: "المملكة العربية السعودية", c_ar: "الأرجنتين", 
        c_au: "أستراليا", c_be: "بلجيكا", c_bj: "بنين", c_br: "البرازيل", c_bf: "بوركينا فاسو", c_bi: "بوروندي", 
        c_cm: "الكاميرون", c_ca: "كندا", c_cv: "الرأس الأخضر", c_cf: "جمهورية أفريقيا الوسطى", c_cl: "تشيلي", c_cn: "الصين", 
        c_co: "كولومبيا", c_cg: "الكونغو", c_cd: "جمهورية الكونغو الديمقراطية", c_kr: "كوريا الجنوبية", c_ci: "ساحل العاج", c_dj: "جيبوتي", 
        c_eg: "مصر", c_ae: "الإمارات العربية المتحدة", c_es: "إسبانيا", c_us: "الولايات المتحدة", c_et: "إثيوبيا", 
        c_fr: "فرنسا", c_ga: "الغابون", c_gn: "غينيا", c_gq: "غينيا الاستوائية", c_in: "الهند", c_it: "إيطاليا", 
        c_jp: "اليابان", c_ke: "كينيا", c_mg: "مدغشقر", c_ml: "مالي", c_ma: "المغرب", c_mu: "موريشيوس", 
        c_mr: "موريتانيا", c_mx: "المكسيك", c_ne: "النيجر", c_ng: "نيجيريا", c_ug: "أوغندا", c_uk: "المملكة المتحدة", 
        c_rw: "رواندا", c_sn: "السنغال", c_ch: "سويسرا", c_td: "تشاد", c_tg: "توجو", c_tn: "تونس", c_other: "بلد آخر...",

        lbl_expertise: "الخبرة المطلوبة",
        exp_ai: "الذكاء الاصطناعي التوليدي", exp_cyber: "الأمن السيبراني", exp_esg: "الهندسة البيئية",
        exp_web3: "Web3 وبلوكشين (Bitcoin OTS)", exp_mkt: "التسويق الرقمي", exp_proc: "تحسين العمليات",
        exp_hr: "الموارد البشرية", exp_design: "تجربة المستخدم", exp_gtm: "استراتيجية الوصول للسوق والنمو", exp_auto: "اكتشاف تلقائي بالذكاء الاصطناعي",
        
        btn_prev: "رجوع", btn_next_matrice: "فتح مصفوفة التحليل",
        
        step3_title: "03. مصفوفة التحليل", lbl_context: "السياق التشغيلي", ph_context: "صف وضعك الحالي وأهدافك والتحديات الرئيسية...",
        lbl_file_upload: "📄 إرفاق مستند (اختياري)", btn_browse: "تصفح...", lbl_no_file: "لم يتم تحديد أي ملف",
        lbl_file_desc: "ضمان الملكية الفكرية: محمي بواسطة البلوكشين.", legal_consent: "أوافق على", link_privacy: "سياسة الخصوصية الرسمية",
        lbl_wa_optin: "أوافق على تلقي تحليلي عبر واتساب.", btn_submit: "بدء تحليل الذكاء الاصطناعي", footer_rights: "جميع الحقوق محفوظة.",
        modal_res_title: "التشخيص الاستراتيجي", btn_new_analysis: "تحليل جديد", msg_reset_confirm: "هل تريد حقًا البدء من جديد؟",
        
        guide_title: "المعجم الاستراتيجي", guide_sec_title: "1. القطاعات الاستراتيجية",
        lex_sec_fintech: "<strong>• التكنولوجيا المالية:</strong> التمويل الرقمي، المدفوعات واللامركزية.",
        lex_sec_gov: "<strong>• تكنولوجيا الحكومة:</strong> تحديث الدولة ورقمنة الخدمات العامة.",
        lex_sec_health: "<strong>• الصحة والتكنولوجيا الحيوية:</strong> الابتكارات الطبية وإدارة البيانات الصحية.",
        lex_sec_green: "<strong>• التكنولوجيا الخضراء:</strong> التحول البيئي وإزالة الكربون والطاقة المتجددة.",
        lex_sec_agri: "<strong>• التكنولوجيا الزراعية:</strong> الأمن الغذائي والتحسين التكنولوجي الزراعي.",
        lex_sec_log: "<strong>• اللوجستيات:</strong> تحسين سلسلة التوريد والتتبع العالمي.",
        lex_sec_mine: "<strong>• التعدين والغاز:</strong> الاستخراج الذكي والسلامة والامتثال.",
        lex_sec_btp: "<strong>• تكنولوجيا العقارات:</strong> الابتكار العقاري وإدارة المباني الذكية.",
        lex_sec_retail: "<strong>• التجارة الإلكترونية:</strong> التجزئة الرقمية، تجربة العملاء والمعاملات.",
        lex_sec_edu: "<strong>• تكنولوجيا التعليم:</strong> منصات التعلم ونقل المعرفة.",
        lex_sec_tour: "<strong>• السياحة:</strong> رقمنة الضيافة وإدارة التدفقات.",
        lex_sec_media: "<strong>• الصناعات الإبداعية:</strong> الإعلام والترفيه والملكية الفكرية.",
        lex_sec_consulting: "<strong>• الاستشارات وخدمات B2B:</strong> استراتيجية الشركات، التحول الرقمي، والتوجيه التنفيذي.",
        lex_sec_saas: "<strong>• البرمجيات كخدمة (SaaS):</strong> تطوير الحلول السحابية، القابلية للتوسع، ونماذج الاشتراك.",
        lex_sec_telecom: "<strong>• الاتصالات والبنية التحتية:</strong> الاتصال عالي السرعة، مراكز البيانات، والسيادة على الشبكات.",

        guide_exp_title: "2. الخبرات التكنولوجية",
        lex_exp_ai: "<strong>• الذكاء الاصطناعي التوليدي:</strong> دمج الذكاء الاصطناعي للتحليل التنبؤي والأتمتة.",
        lex_exp_cyber: "<strong>• الأمن السيبراني:</strong> حماية البنية التحتية الحيوية وتدقيق المرونة.",
        lex_exp_esg: "<strong>• الهندسة البيئية (ESG):</strong> الاستراتيجية البيئية والاجتماعية وحوكمة الشركات.",
        lex_exp_web3: "<strong>• Web3 & Blockchain :</strong> توثيق رقمي معتمد على بلوكشين البيتكوين.",
        lex_exp_mkt: "<strong>• التسويق الرقمي:</strong> استراتيجية الاستحواذ وتحسين محركات البحث.",
        lex_exp_proc: "<strong>• تحسين العمليات:</strong> التميز التشغيلي وخفض التكاليف.",
        lex_exp_hr: "<strong>• إدارة المواهب:</strong> التوظيف والاحتفاظ والتدريب.",
        lex_exp_design: "<strong>• التفكير التصميمي:</strong> تجربة المستخدم (UX) وابتكار المنتجات.",
        lex_exp_gtm: "<strong>• استراتيجية الوصول للسوق:</strong> استراتيجية اختراق السوق، التوزيع، واكتساب العملاء بشكل غير متماثل.",

        pricing_starter_name: "الأساسي (STARTER)", pricing_starter_desc: "لاختبار القوة التحليلية لـ e-META LABS.", pricing_starter_price: "مجاناً",
        pricing_starter_feat1: "✓ تشخيصان سريعان", pricing_starter_feat2: "✓ تحديد المخاطر الرئيسية", pricing_starter_feat3: "✓ تنسيق نصي (بريد إلكتروني)", pricing_starter_feat4: "⚠️ خطة العمل الاستراتيجية غير مشمولة", pricing_starter_btn: "جرب مجاناً",
        pricing_pro_badge: "الأكثر شعبية", pricing_pro_name: "PRO (حزمة 3)", pricing_pro_desc: "حزمة من <strong>3 عمليات تدقيق استراتيجية</strong> شاملة وصارمة.", pricing_pro_price: "$25", pricing_pro_period: "",
        pricing_pro_feat1: "✓ <strong>3 تقارير</strong> كاملة", pricing_pro_feat2: "✓ تشخيص مالي ومؤشرات أداء (KPI)", pricing_pro_feat3: "✓ استراتيجية الابتكار المزعزع", pricing_pro_feat4: "✓ تقارير PDF فاخرة", pricing_pro_btn: "شراء الحزمة",
        pricing_expert_name: "الخبير (EXPERT)", pricing_expert_desc: "خلية الاستشراف الخاصة بك متاحة على مدار الساعة.", pricing_expert_price: "$49", pricing_expert_period: "/ شهرياً",
        pricing_expert_feat1: "✓ حتى 10 تدقيقات / شهر", pricing_expert_feat2: "✓ <b>مراقبة البيانات في الوقت الفعلي</b>", pricing_expert_feat3: "✓ بروتوكول عمل لمدة 7 أيام", pricing_expert_feat4: "✓ تسليم VIP (واتساب)", pricing_expert_btn: "اشترك الآن",

        btn_return_site: "← العودة إلى محرك الذكاء الاصطناعي",
        link_mentions: "الإشعارات القانونية", link_cgv: "الشروط والأحكام", link_confidentialite: "الخصوصية", link_remboursement: "سياسة الاسترداد",

        // --- TEXTES LEGAUX INTÉGRAUX (AR) ---
        content_mentions: `<div dir="rtl"><h1>الإشعارات القانونية</h1><h2>1. ناشر الموقع</h2><p>تم نشر الموقع <strong>e-metalabs.com</strong> (و e-meta.app) بواسطة شركة <strong>E-META LABS</strong>.<br><strong>الشكل القانوني:</strong> SASU برأس مال قدره 500,000 فرنك أفريقي.<br><strong>المقر الرئيسي:</strong> Face Débarcadère، روصو، السنغال.<br><strong>السجل التجاري (RCCM):</strong> SN STL 2026 B768<br><strong>NINEA:</strong> 012887553<br><strong>مدير النشر:</strong> عبد الله فال<br><strong>الاتصال:</strong> support@e-metalabs.com</p><h2>2. الاستضافة</h2><p>تتم استضافة البنية التحتية عبر GitHub Pages وتتم إدارة خوادمنا السحابية بواسطة <strong>OVH Groupe SAS</strong>.<br><strong>المقر الرئيسي لشركة OVH:</strong> 2 rue Kellermann, 59100 Roubaix، فرنسا.</p><h2>3. الملكية الفكرية</h2><p>جميع العناصر الموجودة على هذه المنصة (النصوص والخوارزميات والهندسة المعمارية والشعارات) محمية بموجب قوانين الملكية الفكرية. يُحظر تمامًا أي استنساخ أو محاولة هندسة عكسية دون موافقة كتابية من E-META LABS.</p></div>`,
        
        content_cgv: `<div dir="rtl"><h1>الشروط والأحكام العامة للبيع (CGV)</h1><h2>1. الغرض</h2><p>تحكم هذه الشروط والأحكام بيع خدمات التدقيق الاستراتيجي الآلي المدعومة بالذكاء الاصطناعي المقدمة من E-META LABS (السنغال).</p><h2>2. العملية والتسليم</h2><p>عند التحقق من الدفع، يتم إنشاء تقرير التدقيق وتسليمه حصريًا بتنسيق رقمي (PDF). يتم التسليم بشكل غير متزامن عبر تطبيق WhatsApp إلى الرقم الذي قدمه العميل، أو عبر البريد الإلكتروني.</p><h2>3. التسعير وبائع التجزئة (Merchant of Record)</h2><p>يتم تأمين المدفوعات بواسطة شركائنا الماليين:</p><ul><li><strong>المعاملات الدولية (Paddle):</strong> تتم إدارة عملية الطلب الخاصة بنا بواسطة Paddle.com، وهو البائع القانوني لهذه الطلبات.</li><li><strong>معاملات منطقة UEMOA (PayTech):</strong> تتم معالجة مدفوعات الأموال عبر الهاتف المحمول وتأمينها بواسطة البنية التحتية PayTech في السنغال.</li></ul><h2>4. المسؤولية التشغيلية</h2><p>التشخيصات التي تقدمها E-META LABS يتم إنشاؤها بواسطة الذكاء الاصطناعي. إنها تشكل أداة لدعم اتخاذ القرار الاستراتيجي، ولكنها لا يمكن أن تحل محل الاستشارة القانونية أو الضريبية أو الطبية المعتمدة. تخلي E-META LABS مسؤوليتها عن القرارات المتخذة بناءً على هذه التقارير حصريًا.</p></div>`,
        
        content_confidentialite: `<div dir="rtl"><h1>سياسة الخصوصية (متوافقة مع RGPD)</h1><h2>1. جمع البيانات الاستراتيجية</h2><p>يجمع محرك E-META LABS: اسم الكيان، البريد الإلكتروني للشركة، رقم WhatsApp، قطاع الصناعة، بالإضافة إلى بيانات السياق والمستندات الاستراتيجية المقدمة طواعية من قبل المستخدم.</p><h2>2. الغرض والأمان (الاحتفاظ الصفري بالبيانات)</h2><p>تُستخدم بياناتك فقط لمعايرة وإنشاء التدقيق عبر محرك الذكاء الاصطناعي الخاص بنا، ثم إرساله إليك. نحن نطبق سياسة صارمة لـ "الاحتفاظ الصفري بالبيانات" فيما يتعلق بنماذج اللغات الكبيرة (LLMs) التابعة لجهات خارجية: <strong>لا يتم استخدام بياناتك الصناعية أبدًا</strong> لتدريب الخوارزميات العامة. أسرارك المهنية مضمونة.</p><h2>3. المشاركة مع المعالجين المعتمدين</h2><p>لتقديم الخدمة، تنتقل بياناتك بشكل آمن (مشفرة SSL/TLS) عبر البنى التحتية الشريكة لنا: OpenAI/Google Cloud و Meta و Paddle/PayTech. لا تبيع E-META LABS أي بيانات لوسطاء خارجيين.</p><h2>4. ممارسة حقوقك</h2><p>وفقًا للقانون الأوروبي العام لحماية البيانات (RGPD) والقوانين المحلية المعمول بها، يحق لك الوصول إلى بياناتك وتصحيحها ومحوها. لممارسة هذا الحق، اتصل بمسؤول حماية البيانات (DPO) لدينا: <strong>support@e-metalabs.com</strong>.</p></div>`,
        
        content_remboursement: `<div dir="rtl"><h1>سياسة الاسترداد والإلغاء</h1><h2>1. طبيعة المنتج الرقمي</h2><p>تشكل الخدمات التي تقدمها E-META LABS التوليد الفوري للمحتوى الرقمي المخصص للغاية (عمليات التدقيق الاستراتيجية PDF).</p><h2>2. التنازل عن حق الانسحاب</h2><p>من خلال تحديد مربع القبول أثناء عملية الطلب، <strong>يوافق العميل صراحةً على أن تنفيذ الخدمة (استيعاب البيانات بواسطة الذكاء الاصطناعي) يبدأ فورًا بعد الدفع الناجح.</strong> وفقًا لقوانين المستهلك الدولية فيما يتعلق بالسلع الرقمية غير الملموسة، يتنازل العميل بالتالي عن حقه في الانسحاب لمدة 14 يومًا بمجرد بدء عملية الإنشاء وإرسال التقرير.</p><h2>3. شروط الاسترداد الاستثنائية</h2><p>ستمنح E-META LABS استردادًا كاملاً وفوريًا <strong>فقط</strong> في الحالات التالية:</p><ul><li>فشل فني مثبت في خادمنا يمنع الإنشاء النهائي أو تسليم تقرير PDF.</li><li>فاتورة مزدوجة عرضية بسبب خطأ من بوابة الدفع.</li></ul><h2>4. إجراءات المطالبة</h2><p>يجب إرسال أي طلب للحصول على مساعدة فنية أو استرداد يتعلق بحادث تشغيلي في غضون 14 يومًا كحد أقصى بعد المعاملة إلى فريق الدعم لدينا: <strong>support@e-metalabs.com</strong>.</p></div>`
    }
};

// ==========================================
// MOTEUR D'APPLICATION DES LANGUES (MISE À JOUR)
// ==========================================

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    // MÉMOIRE : On sauvegarde la langue choisie
    localStorage.setItem('emeta_lang', lang);

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

    // Forçage de la langue dans les URL du footer
    document.querySelectorAll('.footer a.gold-link').forEach(link => {
        if (link.getAttribute('href')) { // Vérifie que le lien a bien un href
            let baseHref = link.getAttribute('href').split('?')[0]; 
            link.href = baseHref + '?lang=' + lang;
        }
    });

    // Mise à jour du lien de retour (pour les pages légales)
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.href = `index.html?lang=${lang}`;
    }
}

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // MÉMOIRE : On cherche d'abord dans l'URL, sinon dans le localStorage, sinon on force FR
    const activeLang = urlParams.get('lang') || localStorage.getItem('emeta_lang') || 'fr';
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
