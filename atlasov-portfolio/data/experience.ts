import { l } from "./i18n";

export const experience = [
  {
    company: "Smart Team Service",
    role: l("Full Stack Developer / Backend Developer", "Full Stack разработчик / Backend-разработчик"),
    dates: l("2018 – Present", "2018 – настоящее время"),
    points: l(
      [
        "Build ASP.NET Core APIs and integrations with billing, telephony, contact-centre and document-management systems for Tricolor and MTT, handling retries, duplicate requests and integration errors.",
        "Develop Vue 2/3 and Nuxt.js applications for customer accounts and internal dashboards, including frontend architecture and Vuex/Pinia state.",
        "Extend Microsoft Dynamics CRM/365 entities, rules and plugins. Review code, estimate tasks, maintain technical documentation and work with analysts, developers and designers.",
      ],
      [
        "Разрабатываю ASP.NET Core API и интеграции с биллингом, телефонией, контакт-центром и системами документооборота для Tricolor и MTT: обрабатываю повторные запросы, дубли и ошибки интеграций.",
        "Делаю приложения на Vue 2/3 и Nuxt.js для личных кабинетов и внутренних дашбордов, включая архитектуру фронтенда и состояние на Vuex/Pinia.",
        "Расширяю сущности, правила и плагины Microsoft Dynamics CRM/365. Провожу code review, оцениваю задачи, веду техническую документацию и работаю с аналитиками, разработчиками и дизайнерами.",
      ],
    ),
  },
  {
    company: "Freelance",
    role: l("Full Stack Developer", "Full Stack разработчик"),
    dates: l("2025 – Present", "2025 – настоящее время"),
    points: l(
      [
        "Build paid applications with Python, React, Node.js, TypeScript and PostgreSQL, including an employee approval workflow and a live tournament scoring system.",
        "Implement JWT authentication, role-based access and backend logic, and deploy to a VPS with Git and GitHub.",
      ],
      [
        "Делаю платные приложения на Python, React, Node.js, TypeScript и PostgreSQL, в том числе процесс согласования заявок сотрудников и систему живого подсчёта очков на турнирах.",
        "Реализую JWT-аутентификацию, ролевой доступ и бэкенд-логику, разворачиваю приложения на VPS, работаю с Git и GitHub.",
      ],
    ),
  },
  {
    company: "Focus Capital",
    role: l("Web Developer", "Веб-разработчик"),
    dates: l("Mar 2025 – Sep 2025", "Март 2025 – сентябрь 2025"),
    points: l(
      [
        "Implemented custom Wix functionality in JavaScript, HTML and CSS.",
        "Prepared and launched website updates, and improved loading speed and interface response time.",
      ],
      [
        "Реализовал кастомную функциональность на Wix с помощью JavaScript, HTML и CSS.",
        "Готовил и запускал обновления сайтов, улучшил скорость загрузки и отклик интерфейса.",
      ],
    ),
  },
];
