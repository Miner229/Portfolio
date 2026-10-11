import { l, type L } from "./i18n";

export type Ui = {
  skip: string; menu: string; close: string; mainNav: string; footerNav: string; sectionsNav: string; langLabel: string;
  nav: { projects: string; experience: string; about: string; contact: string };
  index: { intro: string; work: string; experience: string; skills: string; about: string; contact: string };
  telegramCta: string; downloadCv: string; viewWork: string; allProjects: string; readCase: string;
  contribution: string; technologies: string; tickerLabel: string;
  hero: { experienceLabel: string; experienceValue: string; roleLabel: string; roleValue: string; stackLabel: string; locationLabel: string; locationValue: string };
  sections: { work: string; experience: string; skills: string; about: string };
  projectsPage: { title: string; intro: string; selected: string; more: string; description: string };
  case: { back: string; overview: string; role: string; work: string; decisions: string; delivered: string; stack: string; nav: string; backWork: string; next: string; suffix: string };
  cta: { title: string; text: string };
  footer: { tagline: string; navigation: string; contact: string };
  visual: { illustrative: string; screenshot: string; crm: string; mtt: string; bonus: string };
  notFound: { title: string; text: string; back: string; metaTitle: string };
};

const en: Ui = {
  skip: "Skip to content", menu: "Menu", close: "Close", mainNav: "Main", footerNav: "Footer", sectionsNav: "Page sections", langLabel: "Language",
  nav: { projects: "Projects", experience: "Experience", about: "About", contact: "Contact" },
  index: { intro: "Intro", work: "Work", experience: "Experience", skills: "Skills", about: "About", contact: "Contact" },
  telegramCta: "Message on Telegram", downloadCv: "Download CV", viewWork: "View selected work", allProjects: "All projects", readCase: "Read case study",
  contribution: "My contribution", technologies: "Technologies", tickerLabel: "Technologies I work with",
  hero: {
    experienceLabel: "Commercial experience", experienceValue: "Since 2018", roleLabel: "Current role", roleValue: "Smart Team Service",
    stackLabel: "Main stack", locationLabel: "Location", locationValue: "Kazakhstan, open to remote roles",
  },
  sections: { work: "Selected work", experience: "Experience", skills: "Technical skills", about: "About" },
  projectsPage: {
    title: "Projects", intro: "Three case studies from my work, and four smaller projects.", selected: "Case studies", more: "More projects",
    description: "Case studies and smaller projects by Alexei Atlasov: CRM migration, customer-service integrations and internal business tools.",
  },
  case: {
    back: "Projects", overview: "Overview", role: "My role and scope", work: "Main implementation work", decisions: "Technical constraints and decisions",
    delivered: "Delivered functionality and results", stack: "Stack", nav: "Case studies", backWork: "Back to projects", next: "Next", suffix: "case study",
  },
  cta: {
    title: "Have a CRM integration or an internal tool to build?",
    text: "The quickest way to reach me is Telegram. I work on enterprise integrations, CRM and web applications, and I am open to remote roles.",
  },
  footer: { tagline: "Full stack developer working with C#/.NET, Vue, React, Python and Node.js.", navigation: "Navigation", contact: "Contact" },
  visual: {
    illustrative: "Illustrative interface · fictional sample data, not a client screenshot", screenshot: "Screenshot",
    crm: "Illustrative interface: customer records and migration stages",
    mtt: "Illustrative interface: operator workspace with customer information and requests",
    bonus: "Illustrative interface: employee requests and approval statuses",
  },
  notFound: {
    title: "This page does not exist.", text: "The link may be out of date. Everything is on the homepage and the projects page.",
    back: "Back to the homepage", metaTitle: "Page not found",
  },
};

const ru: Ui = {
  skip: "Перейти к содержимому", menu: "Меню", close: "Закрыть", mainNav: "Основная навигация", footerNav: "Навигация в подвале", sectionsNav: "Разделы страницы", langLabel: "Язык",
  nav: { projects: "Проекты", experience: "Опыт", about: "Обо мне", contact: "Контакты" },
  index: { intro: "Вступление", work: "Работы", experience: "Опыт", skills: "Навыки", about: "Обо мне", contact: "Контакты" },
  telegramCta: "Написать в Telegram", downloadCv: "Скачать резюме", viewWork: "Смотреть работы", allProjects: "Все проекты", readCase: "Читать кейс",
  contribution: "Мой вклад", technologies: "Технологии", tickerLabel: "Технологии, с которыми я работаю",
  hero: {
    experienceLabel: "Коммерческий опыт", experienceValue: "С 2018 года", roleLabel: "Текущая роль", roleValue: "Smart Team Service",
    stackLabel: "Основной стек", locationLabel: "Локация", locationValue: "Казахстан, открыт к удалённой работе",
  },
  sections: { work: "Избранные работы", experience: "Опыт работы", skills: "Технические навыки", about: "Обо мне" },
  projectsPage: {
    title: "Проекты", intro: "Три кейса из моей работы и четыре небольших проекта.", selected: "Кейсы", more: "Другие проекты",
    description: "Кейсы и небольшие проекты Алексея Атласова: миграция CRM, интеграции для клиентского сервиса и внутренние бизнес-инструменты.",
  },
  case: {
    back: "Проекты", overview: "Обзор", role: "Моя роль и зона ответственности", work: "Основная работа", decisions: "Технические ограничения и решения",
    delivered: "Результат и реализованная функциональность", stack: "Стек", nav: "Кейсы", backWork: "Назад к проектам", next: "Далее", suffix: "кейс",
  },
  cta: {
    title: "Нужна интеграция с CRM или внутренний инструмент?",
    text: "Быстрее всего написать мне в Telegram. Я работаю с корпоративными интеграциями, CRM и веб-приложениями и открыт к удалённой работе.",
  },
  footer: { tagline: "Full stack разработчик: C#/.NET, Vue, React, Python и Node.js.", navigation: "Навигация", contact: "Контакты" },
  visual: {
    illustrative: "Иллюстрация интерфейса · вымышленные данные, не скриншот проекта клиента", screenshot: "Скриншот",
    crm: "Иллюстрация интерфейса: записи клиентов и этапы миграции",
    mtt: "Иллюстрация интерфейса: рабочее место оператора с данными клиента и заявками",
    bonus: "Иллюстрация интерфейса: заявки сотрудников и статусы согласования",
  },
  notFound: {
    title: "Такой страницы нет.", text: "Возможно, ссылка устарела. Всё нужное есть на главной странице и на странице проектов.",
    back: "На главную", metaTitle: "Страница не найдена",
  },
};

export const ui: L<Ui> = l(en, ru);
