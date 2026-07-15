(function () {
  const storageKey = 'portfolio-language';
  const defaultLang = 'pt';
  const translations = {
    pt: {
      'nav.home': 'Início',
      'nav.case-studies': 'Cases',
      'nav.about': 'Sobre (CV)',
      'nav.contact': 'Contato',
      'case.back': 'Voltar',
      'page.title.home': 'Lari Toschi | Product Designer',
      'page.title.case-studies': 'Cases | Lari Toschi',
      'page.title.about': 'Sobre | Lari Toschi',
      'page.title.contact': 'Contato | Lari Toschi',
      'page.title.case-study': 'Case Study | Lari Toschi',
      'page.title.case-study-askflow': 'AskFlow Agents | Case Study',
      'page.title.case-study-retail': 'Retail Data | Case Study',
      'page.title.case-study-blip': 'Blip | Case Study',
      'page.title.case-askflow': 'AskFlow Agents • Case Completo',
      'page.title.case-retail': 'Retail Data • Case Completo',
      'page.title.case-blip': 'Blip • Case Completo',
      'hero.eyebrow': 'Designer de Produto Pl/Sr • UX Research • UI Design',
      'hero.title': 'Olá, sou a Lari! Transformo problemas complexos em experiências envolventes.',
      'hero.text': 'Combino product strategy, design de interação e insight comportamental para criar produtos intuitivos e com impacto mensurável.',
      'hero.cta.primary': 'Ver cases em destaque',
      'hero.cta.secondary': 'Vamos conversar',
      'home.about.label': 'Sobre',
      'home.about.title': 'Formada em Arquitetura com ênfase em computação pela USP, foco em produto e muita curiosidade por comportamento humano.',
      'home.about.text': 'Com mais de 5 anos de experiência, atuo próxima à estratégia de negócio, mesclando usabilidade e design, com minha maior experiência em SaaS B2B.',
      'home.featured.label': 'Cases em destaque',
      'home.featured.title': 'Trabalhos selecionados que equilibram clareza, estratégia e resultado de negócio.',
      'home.featured.link': 'Ver tudo',
      'home.carousel.label': 'Galeria de imagens',
      'home.carousel.title': 'Exemplos de design e explorações de conceito.',
      'home.carousel.slide1.title': 'Conceito de lançamento de produto',
      'home.carousel.slide1.text': 'Uma exploração visual de mensagens de lançamento e hierarquia de conteúdo em uma experiência moderna.',
      'home.carousel.slide1.cta': 'Ver mais',
      'home.carousel.slide2.title': 'Exploração de interface',
      'home.carousel.slide2.text': 'Um conceito de interface que destaca clareza, espaçamento e hierarquia de conteúdo entre telas.',
      'home.carousel.slide2.cta': 'Ver mais',
      'home.carousel.slide3.title': 'Prévia de dashboard',
      'home.carousel.slide3.text': 'Um conceito de dashboard leve com overlay sutil e um botão discreto para ver mais.',
      'home.carousel.slide3.cta': 'Ver mais',
      'home.featured.card.askflow.pill': 'AskFlow Agents',
      'home.featured.card.askflow.title': 'Simplificando a ativação de IA para impulsionar o crescimento do negócio',
      'home.featured.card.askflow.desc': 'Redesenhei um editor conversacional complexo em uma biblioteca de templates leve e aumentei as ativações mensais em 40%.',
      'home.featured.card.askflow.meta1': '+40% de ativações mensais',
      'home.featured.card.askflow.meta2': 'Configuração em menos de 1 minuto',
      'home.featured.card.askflow.meta3': 'Menor carga de suporte',
      'home.featured.card.blip.pill': 'Dashboard de Cobrança',
      'home.featured.card.blip.title': 'Consolidando métricas de uso em uma experiência SaaS mais clara',
      'home.featured.card.blip.desc': 'Transformei dados operacionais fragmentados em uma interface mais clara que reduziu confusão e custos de suporte.',
      'home.featured.card.retail.pill': 'Analytics de Varejo',
      'home.featured.card.retail.title': 'Triangulação de dados para uma estratégia de CRM mais conversora',
      'home.featured.card.retail.desc': 'Estruturei um dashboard de varejo para unificar sinais de checkout e verificações de qualidade em uma superfície de decisão mais clara.',
      'home.contact.label': 'Vamos conversar',
      'home.contact.title': 'Aberta para freelancing e disposta a conversar sobre oportunidades em product e UX design.',
      'home.contact.cta': 'Entre em contato',
      'about.intro.label': 'Sobre',
      'about.intro.title': 'Designer de produto com visão de sistemas e abordagem centrada no usuário.',
      'about.intro.text': 'Formada em Arquitetura pela USP com foco em computação. Com mais de 5 anos de experiência em UX e produto, conecto estratégia, design e implementação para construir produtos intuitivos, simples e escaláveis.',
      'about.profile.title': 'Atualmente baseada em',
      'about.profile.location': 'Taubaté, SP',
      'about.profile.description': 'Vive com o marido e seus 4 gatos. Ama livros de psicologia, café chique e design bem feito.',
      'about.experience.title': 'Experiência',
      'about.education.title': 'Educação & Certificações',
      'about.skills.title': 'Competências principais',
      'about.tools.title': 'Ferramentas',
      'contact.page.label': 'Contato',
      'contact.title': 'Vamos criar experiências cativantes juntos?',
      'contact.text': 'Seja para uma conversa sobre design de interação, estratégia de produto, ou uma oportunidade de colaboração, adoraria ouvir de você.',
      'contact.form.name': 'Nome',
      'contact.form.email': 'E-mail',
      'contact.form.message': 'Mensagem',
      'contact.form.placeholder.name': 'Seu nome',
      'contact.form.placeholder.email': 'voce@exemplo.com',
      'contact.form.placeholder.message': 'Fale sobre o produto, desafio ou oportunidade.',
      'contact.form.submit': 'Enviar mensagem',
      'contact.social.email': 'E-mail',
      'contact.social.linkedin': 'LinkedIn',
      'contact.social.phone': 'Telefone',
      'case-studies.page.label': 'Cases de estudo',
      'case-studies.title': 'Trabalhos selecionados na interseção entre design, estratégia e resultado de negócio.',
      'case-studies.text': 'Cada projeto explora um desafio diferente de produto, desde redesign de onboarding até dashboards densos em dados e ferramentas operacionais.',
      'case-studies.card.askflow.title': 'AskFlow Agent Library',
      'case-studies.card.askflow.desc': 'Simplificando a ativação para impulsionar o crescimento do negócio por meio de uma experiência de onboarding baseada em templates.',
      'case-studies.card.askflow.meta1': 'Design de Produto',
      'case-studies.card.askflow.meta2': '+40% de ativações',
      'case-studies.card.retail.title': 'Dashboard para triangulação de dados no varejo',
      'case-studies.card.retail.desc': 'Transformando a qualidade dos dados de checkout em uma superfície de decisão mais clara para estratégias de CRM com maior conversão.',
      'case-studies.card.retail.meta1': 'Estratégia UX',
      'case-studies.card.retail.meta2': 'Qualidade de dados',
      'case-studies.card.blip.title': 'Dashboard de cobrança e uso do WhatsApp',
      'case-studies.card.blip.desc': 'Consolidando métricas complexas de uso de SaaS em uma experiência intuitiva que reduziu atritos operacionais.',
      'case-studies.card.blip.meta1': 'Design de Produto',
      'case-studies.card.blip.meta2': 'Clareza operacional',
      'case.hero.label': 'Case Study',
      'case.hero.label.full': 'Case completo',
      'case.askflow.hero.title': 'AskFlow Agents: simplificando a ativação de fluxos de automação, do detalhe até a escala',
      'case.askflow.hero.subtitle': 'Como transformar um editor conversacional complexo em uma biblioteca de templates simplificada aumentou as ativações mensais em +40%.',
      'case.retail.hero.title': 'Triangulação de dados no varejo: transformando sinais de checkout em uma estratégia de CRM mais clara.',
      'case.retail.hero.subtitle': 'Como a criação de uma superfície analítica mais clara ajudou as equipes a identificar problemas de qualidade e melhorar a tomada de decisão.',
      'case.blip.hero.title': 'Dashboard de cobrança e uso do WhatsApp: transformando complexidade em confiança.',
      'case.blip.hero.subtitle': 'Como transformar dados fragmentados de uso de SaaS em uma interface mais clara ajudou equipes a reduzir esforço operacional.',
      'case.askflow.full.hero.title': 'AskFlow Agents: da personalização à eficiência.',
      'case.askflow.full.hero.subtitle': 'Um walkthrough completo da estratégia de redesign, do processo de descoberta e do impacto no negócio por trás da experiência da Agent Library.',
      'case.retail.full.hero.title': 'Triangulação de dados no varejo: projetando para mais confiança na decisão.',
      'case.retail.full.hero.subtitle': 'Uma visão completa de como a experiência do dashboard foi reestruturada para tornar a qualidade dos dados de checkout mais fácil de interpretar.',
      'case.blip.full.hero.title': 'Dashboard de cobrança e uso do WhatsApp: transformando complexidade em confiança.',
      'case.blip.full.hero.subtitle': 'Uma versão completa da lógica de design por trás da reorganização de dados operacionais em uma experiência mais clara.'
    },
    en: {
      'nav.home': 'Home',
      'nav.case-studies': 'Case Studies',
      'nav.about': 'About (CV)',
      'nav.contact': 'Contact',
      'case.back': 'Back',
      'page.title.home': 'Lari Toschi | UX & Product Designer',
      'page.title.case-studies': 'Case Studies | Lari Toschi',
      'page.title.about': 'About | Lari Toschi',
      'page.title.contact': 'Contact | Lari Toschi',
      'page.title.case-study': 'Case Study | Lari Toschi',
      'page.title.case-study-askflow': 'AskFlow Agents | Real case',
      'page.title.case-study-retail': 'Retail Data | Case Study',
      'page.title.case-study-blip': 'Blip | Real case',
      'page.title.case-askflow': 'AskFlow Agents • Full Case',
      'page.title.case-retail': 'Retail Data • Full Case',
      'page.title.case-blip': 'Blip • Full Case',
      'hero.eyebrow': 'Senior Product Designer • UX Strategy • UI',
      'hero.title': 'Hi, I’m Lari! I turn complex product flows into captivating user experiences.',
      'hero.text': 'I blend product strategy, interaction design, and behavioral insight to build products that feel intuitive and drive measurable growth.',
      'hero.cta.primary': 'View featured work',
      'hero.cta.secondary': 'Let’s talk',
      'home.about.label': 'About',
      'home.about.title': 'Architecture-trained, product-minded, tech-savvy and deeply curious about human behavior.',
      'home.about.text': 'With 5+ years of experience, I’ve worked across product strategy, usability, and growth-focused design in tech and B2B SaaS environments. Graduated in Architecture (USP), bringing a strong spatial and systems mindset into digital product design.',
      'home.featured.label': 'Featured Work',
      'home.featured.title': 'Selected cases that balance clarity, strategy, and measurable outcomes.',
      'home.featured.link': 'See all',
      'home.carousel.label': 'Image showcase',
      'home.carousel.title': 'Design samples and concept explorations.',
      'home.carousel.slide1.title': 'Product launch concept',
      'home.carousel.slide1.text': 'A visual exploration of launch messaging and content hierarchy in a modern product experience.',
      'home.carousel.slide1.cta': 'See more',
      'home.carousel.slide2.title': 'Interface exploration',
      'home.carousel.slide2.text': 'A sample concept emphasizing clarity, spacing, and content hierarchy across screens.',
      'home.carousel.slide2.cta': 'See more',
      'home.carousel.slide3.title': 'Dashboard preview',
      'home.carousel.slide3.text': 'A lightweight dashboard concept with a subtle overlay and quiet call to action.',
      'home.carousel.slide3.cta': 'See more',
      'home.featured.card.askflow.pill': 'AskFlow Agents',
      'home.featured.card.askflow.title': 'Simplifying AI activation to drive business growth',
      'home.featured.card.askflow.desc': 'Redesigned a complex conversational editor into a lightweight template library and boosted monthly activations by 40%.',
      'home.featured.card.askflow.meta1': '+40% monthly activations',
      'home.featured.card.askflow.meta2': 'Under 1 minute setup',
      'home.featured.card.askflow.meta3': 'Lower support load',
      'home.featured.card.blip.pill': 'Billing Dashboard',
      'home.featured.card.blip.title': 'Consolidating usage metrics into a clearer SaaS experience',
      'home.featured.card.blip.desc': 'Turned fragmented operational data into a clearer interface that reduced confusion and support overhead.',
      'home.featured.card.retail.pill': 'Retail Analytics',
      'home.featured.card.retail.title': 'Data triangulation for higher-converting CRM strategy',
      'home.featured.card.retail.desc': 'Shaped a retail dashboard to unify checkout signals and quality checks into a clearer decision surface.',
      'home.contact.label': 'Let’s connect',
      'home.contact.title': 'Open for freelancing and contract opportunities in senior product design where strategy, clarity, and growth meet.',
      'home.contact.cta': 'Contact me',
      'about.intro.label': 'About',
      'about.intro.title': 'Product designer with a systems lens and a human-centered approach.',
      'about.intro.text': 'Graduated in Architecture from USP with a minor on computer science. With 5+ years of UX and product experience, I bridge strategy, design, and implementation to build intuitive products that feel simple and scale well.',
      'about.profile.title': 'Currently based in',
      'about.profile.location': 'Taubaté, SP, Brazil',
      'about.profile.description': 'Lives with her husband and 4 cats. Loves psychology books, good coffee, and crisp micro-interactions.',
      'about.experience.title': 'Experience',
      'about.education.title': 'Education & Certifications',
      'about.skills.title': 'Core Skills',
      'about.tools.title': 'Tools',
      'contact.page.label': 'Contact',
      'contact.title': 'Let’s build something clear, useful, and memorable.',
      'contact.text': 'Whether it’s a product strategy conversation, a design leadership discussion, or a collaboration opportunity, I’d love to hear from you.',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.placeholder.name': 'Your name',
      'contact.form.placeholder.email': 'you@example.com',
      'contact.form.placeholder.message': 'Tell me about the product, challenge, or opportunity.',
      'contact.form.submit': 'Send message',
      'contact.social.email': 'Email',
      'contact.social.linkedin': 'LinkedIn',
      'contact.social.phone': 'Phone',
      'case-studies.page.label': 'Case Studies',
      'case-studies.title': 'Selected work at the intersection of clarity, strategy, and measurable growth.',
      'case-studies.text': 'Each project explores a different product challenge, from onboarding redesign to data-heavy dashboards and operational tooling.',
      'case-studies.card.askflow.title': 'AskFlow Agent Library',
      'case-studies.card.askflow.desc': 'Simplifying activation to drive business growth through a template-first onboarding experience.',
      'case-studies.card.askflow.meta1': 'Product Design',
      'case-studies.card.askflow.meta2': '+40% activations',
      'case-studies.card.retail.title': 'Dashboard for Data Triangulation in Retail',
      'case-studies.card.retail.desc': 'Transforming checkout data quality into a clearer decision surface for high-converting CRM approaches.',
      'case-studies.card.retail.meta1': 'UX Strategy',
      'case-studies.card.retail.meta2': 'Data quality',
      'case-studies.card.blip.title': 'WhatsApp Usage Billing Dashboard',
      'case-studies.card.blip.desc': 'Consolidating complex SaaS usage metrics into an intuitive experience that reduced operational friction.',
      'case-studies.card.blip.meta1': 'Product Design',
      'case-studies.card.blip.meta2': 'Operational clarity',
      'case.hero.label': 'Case Study',
      'case.hero.label.full': 'Full case',
      'case.askflow.hero.title': 'AskFlow Agents: Simplifying AI activation to drive business growth.',
      'case.askflow.hero.subtitle': 'How redesigning a complex drag-and-drop conversational editor into a simplified template library boosted monthly activations by +40%.',
      'case.retail.hero.title': 'Retail data triangulation: turning checkout signals into a better CRM strategy.',
      'case.retail.hero.subtitle': 'How designing a clearer analytics surface helped teams identify quality issues and improve decision-making.',
      'case.blip.hero.title': 'WhatsApp usage billing dashboard: simplifying a complex operational experience.',
      'case.blip.hero.subtitle': 'How turning fragmented SaaS usage data into a clearer interface helped teams reduce operational overhead.',
      'case.askflow.full.hero.title': 'AskFlow Agents: from personalization to efficiency.',
      'case.askflow.full.hero.subtitle': 'A complete walkthrough of the redesign strategy, discovery process, and business impact behind the Agent Library experience.',
      'case.retail.full.hero.title': 'Retail data triangulation: designing for faster decision confidence.',
      'case.retail.full.hero.subtitle': 'A complete view of how the dashboard experience was restructured to make checkout data quality easier to interpret.',
      'case.blip.full.hero.title': 'Blip usage billing dashboard: turning complexity into trust.',
      'case.blip.full.hero.subtitle': 'A full version of the design rationale behind reorganizing operational data into a clearer experience.'
    }
  };

  function applyLanguage(lang) {
    const selectedLang = translations[lang] ? lang : defaultLang;

    document.documentElement.lang = selectedLang;
    document.body.setAttribute('data-lang', selectedLang);

    const titleElement = document.querySelector('title[data-i18n-key]');
    if (titleElement) {
      const titleKey = titleElement.getAttribute('data-i18n-key');
      const translatedTitle = translations[selectedLang]?.[titleKey];

      if (translatedTitle) {
        titleElement.textContent = translatedTitle;
      }
    }

    document.querySelectorAll('[data-i18n-key]').forEach((element) => {
      const key = element.getAttribute('data-i18n-key');
      const translatedText = translations[selectedLang]?.[key];

      if (translatedText) {
        element.textContent = translatedText;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translatedPlaceholder = translations[selectedLang]?.[key];

      if (translatedPlaceholder) {
        element.placeholder = translatedPlaceholder;
      }
    });

    document.querySelectorAll('.lang-btn').forEach((button) => {
      const isActive = button.getAttribute('data-lang') === selectedLang;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function initCarousel() {
    const carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');
    const indicators = Array.from(carousel.querySelectorAll('.carousel-indicator'));
    let activeIndex = slides.findIndex((slide) => slide.classList.contains('active'));
    if (activeIndex < 0) activeIndex = 0;

    const updateState = (index) => {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeIndex;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', (!isActive).toString());
      });
      indicators.forEach((indicator, indicatorIndex) => {
        const isActive = indicatorIndex === activeIndex;
        indicator.classList.toggle('active', isActive);
        indicator.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    };

    prevButton?.addEventListener('click', () => updateState(activeIndex - 1));
    nextButton?.addEventListener('click', () => updateState(activeIndex + 1));
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => updateState(index));
    });
  }

  const savedLang = window.localStorage.getItem(storageKey);
  const initialLang = savedLang && translations[savedLang] ? savedLang : defaultLang;
  applyLanguage(initialLang);
  initCarousel();

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.lang-btn');
    if (!button) return;

    const selectedLang = button.getAttribute('data-lang');
    if (!selectedLang) return;

    window.localStorage.setItem(storageKey, selectedLang);
    applyLanguage(selectedLang);
  });
})();
