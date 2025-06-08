export const languages = {
  kk: "Қазақша",
  ru: "Русский",
  en: "English",
} as const

export type Language = keyof typeof languages

export const defaultLanguage: Language = "kk"

export const translations = {
  kk: {
    // Header
    about: "Біз туралы",
    programs: "Бағдарламалар",
    news: "Жаңалықтар",
    contact: "Байланыс",

    // Hero Section
    heroTitle: "Жоғары білім беруді дамыту ұлттық орталығы",
    heroSubtitle:
      "Инновациялық даму бағдарламалары, зерттеу бастамалары және жоғары білім берудегі стратегиялық серіктестік арқылы мекемелерді, педагогтарды және студенттерді қуаттандыру.",
    explorePrograms: "Бағдарламаларды зерттеу",
    learnMore: "Толығырақ",

    // Stats
    partnerInstitutions: "Серіктес мекемелер",
    studentsImpacted: "Қамтылған студенттер",
    researchProjects: "Зерттеу жобалары",
    yearsExcellence: "Жыл тәжірибе",

    // About Section
    aboutTitle: "ЖБДҰО туралы",
    aboutSubtitle: "Инновация, ынтымақтастық және үздіктік арқылы жоғары білім беруді трансформациялау көшбасшысы.",
    ourMission: "Біздің миссиямыз",
    missionText:
      "Мекемелік тиімділік пен студенттердің табысын арттыратын инновациялық бағдарламалар, стратегиялық серіктестік және дәлелдемелі тәжірибе арқылы жоғары білім беруді дамыту.",
    ourVision: "Біздің көзқарасымыз",
    visionText:
      "Жоғары білім берудегі трансформациялық өзгерістердің басты катализаторы болу, дүние жүзінде үздіктік, инновация және қолжетімділікті дамыту.",
    ourImpact: "Біздің әсеріміз",
    impactText:
      "Мекемелер, педагогтар мен студенттерге пайда әкелетін зерттеу, саясат дамыту және әлеуетті арттыру арқылы тұрақты өзгерістер жасау.",

    // Programs
    programsTitle: "Біздің бағдарламалар",
    programsSubtitle: "Жоғары білім сапасы мен тиімділігін арттыруға арналған кешенді бағдарламалар.",
    facultyDevelopment: "Профессорлық-оқытушылық құрамды дамыту",
    facultyDesc: "Педагогтарға арналған кәсіби даму бағдарламалары",
    facultyText:
      "Оқыту әдістемелерін, зерттеу мүмкіндіктерін және көшбасшылық дағдыларын дамытуға арналған кешенді дайындық бағдарламалары.",
    institutionalCapacity: "Мекемелік әлеуетті арттыру",
    capacityDesc: "Ұйымдық тиімділікті нығайту",
    capacityText:
      "Жоғары оқу орындары үшін стратегиялық жоспарлау, басқаруды жетілдіру және операциялық үздіктік бағдарламалары.",
    qualityAssurance: "Сапа кепілдігі",
    qualityDesc: "Стандарттар мен аккредиттеуді қолдау",
    qualityText: "Білім беру үздіктігі үшін кешенді сапа кепілдігі жүйелері және аккредиттеуді қолдау қызметтері.",

    // News
    newsTitle: "Соңғы жаңалықтар мен жаңартулар",
    newsSubtitle:
      "Біздің соңғы бастамаларымыз, зерттеу нәтижелері және бағдарлама жаңартулары туралы хабардар болыңыз.",
    readMore: "Толығырақ оқу",

    // Contact
    contactTitle: "Байланысу",
    contactSubtitle:
      "Бізбен серіктестікке дайынсыз ба немесе біздің бағдарламалар туралы көбірек білгіңіз келе ме? Сізбен байланысуды қалаймыз.",
    contactInfo: "Байланыс ақпараты",
    sendMessage: "Хабарлама жіберу",
    yourName: "Сіздің атыңыз",
    yourEmail: "Сіздің электрондық поштаңыз",
    yourMessage: "Сіздің хабарламаңыз",
    sendButton: "Хабарлама жіберу",

    // Footer
    footerDesc: "Инновация мен ынтымақтастық арқылы жоғары білім беру үздіктігін дамыту.",
    programs: "Бағдарламалар",
    resources: "Ресурстар",
    connect: "Байланыс",
    research: "Зерттеу",
    publications: "Басылымдар",
    bestPractices: "Үздік тәжірибелер",
    newsletter: "Жаңалықтар таратушысы",
    events: "Іс-шаралар",
    socialMedia: "Әлеуметтік желілер",
    rightsReserved: "Барлық құқықтар қорғалған.",

    // Professional Growth, etc.
    professionalGrowth: "Кәсіби өсу",
    organizationalDevelopment: "Ұйымдық даму",
    excellenceStandards: "Үздіктік стандарттары",
  },
  ru: {
    // Header
    about: "О нас",
    programs: "Программы",
    news: "Новости",
    contact: "Контакты",

    // Hero Section
    heroTitle: "Национальный центр развития высшего образования",
    heroSubtitle:
      "Расширение возможностей учреждений, преподавателей и студентов через инновационные программы развития, исследовательские инициативы и стратегические партнерства в высшем образовании.",
    explorePrograms: "Изучить программы",
    learnMore: "Узнать больше",

    // Stats
    partnerInstitutions: "Партнерские учреждения",
    studentsImpacted: "Охваченные студенты",
    researchProjects: "Исследовательские проекты",
    yearsExcellence: "Лет опыта",

    // About Section
    aboutTitle: "О НЦРВО",
    aboutSubtitle: "Лидер трансформации высшего образования через инновации, сотрудничество и совершенство.",
    ourMission: "Наша миссия",
    missionText:
      "Развитие высшего образования через инновационные программы, стратегические партнерства и основанные на фактах практики, которые повышают институциональную эффективность и успех студентов.",
    ourVision: "Наше видение",
    visionText:
      "Быть ведущим катализатором трансформационных изменений в высшем образовании, способствуя совершенству, инновациям и доступности во всем мире.",
    ourImpact: "Наше влияние",
    impactText:
      "Создание долгосрочных изменений через исследования, разработку политики и наращивание потенциала, которые приносят пользу учреждениям, преподавателям и студентам по всему миру.",

    // Programs
    programsTitle: "Наши программы",
    programsSubtitle: "Комплексные программы, направленные на повышение качества и эффективности высшего образования.",
    facultyDevelopment: "Развитие профессорско-преподавательского состава",
    facultyDesc: "Программы профессионального развития для преподавателей",
    facultyText:
      "Комплексные программы обучения для улучшения методологии преподавания, исследовательских возможностей и лидерских навыков.",
    institutionalCapacity: "Наращивание институционального потенциала",
    capacityDesc: "Укрепление организационной эффективности",
    capacityText:
      "Стратегическое планирование, улучшение управления и программы операционного совершенства для высших учебных заведений.",
    qualityAssurance: "Обеспечение качества",
    qualityDesc: "Поддержка стандартов и аккредитации",
    qualityText:
      "Комплексные системы обеспечения качества и услуги поддержки аккредитации для совершенства образования.",

    // News
    newsTitle: "Последние новости и обновления",
    newsSubtitle: "Будьте в курсе наших последних инициатив, результатов исследований и обновлений программ.",
    readMore: "Читать далее",

    // Contact
    contactTitle: "Связаться с нами",
    contactSubtitle:
      "Готовы к партнерству с нами или хотите узнать больше о наших программах? Мы будем рады услышать от вас.",
    contactInfo: "Контактная информация",
    sendMessage: "Отправить сообщение",
    yourName: "Ваше имя",
    yourEmail: "Ваш email",
    yourMessage: "Ваше сообщение",
    sendButton: "Отправить сообщение",

    // Footer
    footerDesc: "Развитие совершенства высшего образования через инновации и сотрудничество.",
    programs: "Программы",
    resources: "Ресурсы",
    connect: "Связь",
    research: "Исследования",
    publications: "Публикации",
    bestPractices: "Лучшие практики",
    newsletter: "Рассылка",
    events: "События",
    socialMedia: "Социальные сети",
    rightsReserved: "Все права защищены.",

    // Professional Growth, etc.
    professionalGrowth: "Профессиональный рост",
    organizationalDevelopment: "Организационное развитие",
    excellenceStandards: "Стандарты совершенства",
  },
  en: {
    // Header
    about: "About",
    programs: "Programs",
    news: "News",
    contact: "Contact",

    // Hero Section
    heroTitle: "National Center for Higher Education Development",
    heroSubtitle:
      "Empowering institutions, educators, and students through innovative development programs, research initiatives, and strategic partnerships in higher education.",
    explorePrograms: "Explore Programs",
    learnMore: "Learn More",

    // Stats
    partnerInstitutions: "Partner Institutions",
    studentsImpacted: "Students Impacted",
    researchProjects: "Research Projects",
    yearsExcellence: "Years of Excellence",

    // About Section
    aboutTitle: "About NCHED",
    aboutSubtitle: "Leading the transformation of higher education through innovation, collaboration, and excellence.",
    ourMission: "Our Mission",
    missionText:
      "To advance higher education through innovative programs, strategic partnerships, and evidence-based practices that enhance institutional effectiveness and student success.",
    ourVision: "Our Vision",
    visionText:
      "To be the premier catalyst for transformative change in higher education, fostering excellence, innovation, and accessibility worldwide.",
    ourImpact: "Our Impact",
    impactText:
      "Creating lasting change through research, policy development, and capacity building that benefits institutions, educators, and students globally.",

    // Programs
    programsTitle: "Our Programs",
    programsSubtitle: "Comprehensive programs designed to enhance higher education quality and effectiveness.",
    facultyDevelopment: "Faculty Development",
    facultyDesc: "Professional development programs for educators",
    facultyText:
      "Comprehensive training programs to enhance teaching methodologies, research capabilities, and leadership skills.",
    institutionalCapacity: "Institutional Capacity Building",
    capacityDesc: "Strengthening organizational effectiveness",
    capacityText:
      "Strategic planning, governance improvement, and operational excellence programs for higher education institutions.",
    qualityAssurance: "Quality Assurance",
    qualityDesc: "Standards and accreditation support",
    qualityText:
      "Comprehensive quality assurance frameworks and accreditation support services for educational excellence.",

    // News
    newsTitle: "Latest News & Updates",
    newsSubtitle: "Stay informed about our latest initiatives, research findings, and program updates.",
    readMore: "Read More",

    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "Ready to partner with us or learn more about our programs? We'd love to hear from you.",
    contactInfo: "Contact Information",
    sendMessage: "Send us a Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    sendButton: "Send Message",

    // Footer
    footerDesc: "Advancing higher education excellence through innovation and collaboration.",
    programs: "Programs",
    resources: "Resources",
    connect: "Connect",
    research: "Research",
    publications: "Publications",
    bestPractices: "Best Practices",
    newsletter: "Newsletter",
    events: "Events",
    socialMedia: "Social Media",
    rightsReserved: "All rights reserved.",

    // Professional Growth, etc.
    professionalGrowth: "Professional Growth",
    organizationalDevelopment: "Organizational Development",
    excellenceStandards: "Excellence Standards",
  },
}

export function getTranslation(language: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[language]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
