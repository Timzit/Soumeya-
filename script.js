// Traduction des contenus
const translations = {
    fr: {
        jobTitle: "Adjointe Responsable Division Eaux & Dessalement",
        division: "Département Technico-commercial",
        subtitle: "Sarl STC CO",
        slogan: '"Your partner in control and measurement"',
        phone: "📞 Téléphone",
        fax: "📠 Fix",
        email: "✉️ Email",
        whatsapp: "💬 WhatsApp",
        website: "🌐 Site web",
        address: "📍 Adresse",
        brochure: "📘 Brochure",
        brochureLink: "https://heyzine.com/flip-book/f6c2853e6f.html",  // Lien FR
        downloadPdf: "⬇️",
        downloadContact: "📥 Télécharger Contact",
        description: "STC Co fournit des solutions sur mesure en automatisation et instrumentation industrielle, en partenariat avec des leaders technologiques.",
        partners: "Nos partenaires",
        langIcon: "🌐"
    },
    en: {
        jobTitle: "Deputy Water & Desalination Division Manager",
        division: "Technical-sales Department",
        subtitle: "STC CO LLC",
        slogan: '"Your partner in control and measurement"',
        phone: "📞 Phone",
        fax: "📠 Fax",
        email: "✉️ Email",
        whatsapp: "💬 WhatsApp",
        website: "🌐 Website",
        address: "📍 Address",
        brochure: "📘 Brochure",
        brochureLink: "https://heyzine.com/flip-book/a2031a1251.html",  // Lien EN (à remplacer)
        downloadPdf: "⬇️",
        downloadContact: "📥 Download Contact",
        description: "STC Co provides custom solutions in industrial automation and instrumentation, in partnership with technology leaders.",
        partners: "Our Partners",
        langIcon: "🌐"
    }
};

let currentLang = 'fr';

// Fonction pour changer la brochure PDF
function updateBrochurePDF(lang) {
    const pdfDownloadBtn = document.querySelector('.pdf-download');
    if (pdfDownloadBtn) {
        if (lang === 'en') {
            pdfDownloadBtn.href = "./Brochure_EN.pdf";
        } else {
            pdfDownloadBtn.href = "./Brochure.pdf";
        }
    }
}

// Fonction pour changer le lien de la brochure en ligne
function updateBrochureLink(lang) {
    const brochureLink = document.getElementById('brochure-link-fr');
    if (brochureLink) {
        if (lang === 'en') {
            brochureLink.href = translations.en.brochureLink;
        } else {
            brochureLink.href = translations.fr.brochureLink;
        }
    }
}

// Fonction pour appliquer la traduction
function applyTranslation(lang) {
    const t = translations[lang];
    
    // Mise à jour des textes
    if (document.querySelector('.job-title')) 
        document.querySelector('.job-title').textContent = t.jobTitle;
    if (document.querySelector('.division-title')) 
        document.querySelector('.division-title').textContent = t.division;
    if (document.querySelector('.subtitle')) 
        document.querySelector('.subtitle').textContent = t.subtitle;
    if (document.querySelector('.subtitle1')) 
        document.querySelector('.subtitle1').textContent = t.slogan;
    if (document.querySelector('.description-text')) 
        document.querySelector('.description-text').textContent = t.description;
    if (document.querySelector('.partners-title')) 
        document.querySelector('.partners-title').textContent = t.partners;
    
    // Mise à jour des boutons
    if (document.querySelector('.phone-btn')) 
        document.querySelector('.phone-btn').innerHTML = t.phone;
    if (document.querySelector('.fax-btn')) 
        document.querySelector('.fax-btn').innerHTML = t.fax;
    if (document.querySelector('.email-btn')) 
        document.querySelector('.email-btn').innerHTML = t.email;
    if (document.querySelector('.whatsapp-btn')) 
        document.querySelector('.whatsapp-btn').innerHTML = t.whatsapp;
    if (document.querySelector('.website-btn')) 
        document.querySelector('.website-btn').innerHTML = t.website;
    if (document.querySelector('.address-btn')) 
        document.querySelector('.address-btn').innerHTML = t.address;
    if (document.querySelector('.brochure-link')) 
        document.querySelector('.brochure-link').innerHTML = t.brochure;
    if (document.querySelector('.pdf-download')) 
        document.querySelector('.pdf-download').innerHTML = t.downloadPdf;
    if (document.querySelector('.contact-btn')) 
        document.querySelector('.contact-btn').innerHTML = t.downloadContact;
    
    // Mise à jour du PDF et du lien brochure
    updateBrochurePDF(lang);
    updateBrochureLink(lang);  // ← NOUVEAU : change le lien de la brochure
    
    // Sauvegarde de la préférence
    localStorage.setItem('preferredLanguage', lang);
}

// Changement de langue
function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    applyTranslation(currentLang);
}

// Gestion du mode sombre (à conserver)
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '🌙';
        if (themeToggle) themeToggle.setAttribute('title', 'Mode clair');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        themeIcon.textContent = '🌞';
        if (themeToggle) themeToggle.setAttribute('title', 'Mode sombre');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            if (isDarkMode) {
                themeIcon.textContent = '🌙';
                if (themeToggle) themeToggle.setAttribute('title', 'Mode clair');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.textContent = '🌞';
                if (themeToggle) themeToggle.setAttribute('title', 'Mode sombre');
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        currentLang = savedLang;
        applyTranslation(currentLang);
    } else {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('en')) {
            currentLang = 'en';
            applyTranslation(currentLang);
        } else {
            currentLang = 'fr';
            applyTranslation(currentLang);
        }
    }
    
    const langToggle = document.getElementById('language-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    initThemeToggle();
});
