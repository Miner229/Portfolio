import { l, type L } from "./i18n";

export type Screenshot = { src: string; alt: L; width: number; height: number };

export type Project = {
  slug: string;
  name: L;
  kind: "team" | "freelance";
  badge: L;
  purpose: L;
  highlights: L<string[]>;
  contribution: L<string[]>;
  stack: string[];
  visual: "crm" | "mtt" | "bonus";
  /** Add a real screenshot here (file in /public) to replace the illustrative interface. */
  screenshot?: Screenshot;
  study: {
    overview: L<string[]>;
    role: L<string[]>;
    decisions: L<string[]>;
    delivered: L<string[]>;
  };
};

const team = l("Team project · Contributor", "Командный проект · Участник");

export const projects: Project[] = [
  {
    slug: "tricolor-crm-migration",
    name: l("Tricolor CRM Migration and Customer Accounts", "Миграция CRM Tricolor и личные кабинеты клиентов"),
    kind: "team",
    badge: team,
    purpose: l(
      "Development of CRM functionality and customer account services.",
      "Разработка функциональности CRM и сервисов личных кабинетов клиентов.",
    ),
    visual: "crm",
    highlights: l(
      [
        "Contributed to the migration from Microsoft Dynamics CRM 2013 to Dynamics 365.",
        "Wrote forward and rollback SQL scripts for partial migrations and incremental transfers.",
        "Extended CRM entities, business rules and plugins, and integrations with internal customer systems.",
        "Contributed to customer accounts for service access, subscriptions and settings.",
      ],
      [
        "Участвовал в миграции с Microsoft Dynamics CRM 2013 на Dynamics 365.",
        "Написал SQL-скрипты миграции и отката для частичных миграций и инкрементальных переносов.",
        "Расширял сущности, бизнес-правила и плагины CRM, а также интеграции с внутренними клиентскими системами.",
        "Участвовал в разработке личных кабинетов: доступ к услугам, подписки и настройки.",
      ],
    ),
    contribution: l(
      [
        "Contributed to the migration from Microsoft Dynamics CRM 2013 to Dynamics 365.",
        "Prepared the new environment, aligned database content and supported parallel testing.",
        "Wrote forward and rollback SQL scripts for partial migrations and incremental transfers.",
        "Extended CRM entities, business rules and plugins.",
        "Extended CRM business logic and integrations with internal customer systems.",
        "Contributed to customer accounts for service access, subscriptions and settings.",
        "Supported load, integration and regression testing.",
      ],
      [
        "Участвовал в миграции с Microsoft Dynamics CRM 2013 на Dynamics 365.",
        "Подготовил новое окружение, сверил содержимое базы данных и поддержал параллельное тестирование.",
        "Написал SQL-скрипты миграции и отката для частичных миграций и инкрементальных переносов.",
        "Расширял сущности, бизнес-правила и плагины CRM.",
        "Расширял бизнес-логику CRM и интеграции с внутренними клиентскими системами.",
        "Участвовал в разработке личных кабинетов: доступ к услугам, подписки и настройки.",
        "Поддерживал нагрузочное, интеграционное и регрессионное тестирование.",
      ],
    ),
    stack: ["C#/.NET", "Microsoft Dynamics CRM/365", "SQL", "REST API", "Vue.js"],
    study: {
      overview: l(
        [
          "I work on Tricolor applications at Smart Team Service as a full stack and backend developer.",
          "The project had two parts: moving the CRM from Microsoft Dynamics CRM 2013 to Dynamics 365, and extending the customer account services built around it.",
        ],
        [
          "Я работаю над приложениями Tricolor в Smart Team Service в роли full stack и backend-разработчика.",
          "У проекта две части: перенос CRM с Microsoft Dynamics CRM 2013 на Dynamics 365 и развитие сервисов личных кабинетов вокруг неё.",
        ],
      ),
      role: l(
        [
          "I was one contributor in a team. The work below is my part of the project, not the whole programme.",
          "My scope covered migration preparation and SQL scripts, CRM business logic and integrations, customer account features and testing support.",
        ],
        [
          "Я был одним из участников команды. Ниже описана моя часть работы, а не весь проект целиком.",
          "В мою зону входили подготовка миграции и SQL-скрипты, бизнес-логика и интеграции CRM, функциональность личных кабинетов и поддержка тестирования.",
        ],
      ),
      decisions: l(
        [
          "Partial migrations and incremental transfers each had a forward script and a rollback script, so a step could be reversed.",
          "Parallel testing was supported before cutover.",
          "Load, integration and regression testing was carried out around the migration.",
        ],
        [
          "Для частичных миграций и инкрементальных переносов делались скрипты и вперёд, и назад, чтобы любой шаг можно было откатить.",
          "Перед переключением поддерживалось параллельное тестирование.",
          "Вокруг миграции проводилось нагрузочное, интеграционное и регрессионное тестирование.",
        ],
      ),
      delivered: l(
        [
          "A new Dynamics 365 environment with database content aligned to the existing data.",
          "Forward and rollback SQL scripts for partial migrations and incremental transfers.",
          "Extended CRM entities, business rules and plugins, with integrations to internal customer systems.",
          "Customer accounts for service access, subscriptions and settings.",
          "No performance figures or data volumes are published for this project.",
        ],
        [
          "Новое окружение Dynamics 365 с данными, сверенными с существующими.",
          "SQL-скрипты миграции и отката для частичных миграций и инкрементальных переносов.",
          "Расширенные сущности, бизнес-правила и плагины CRM, а также интеграции с внутренними клиентскими системами.",
          "Личные кабинеты: доступ к услугам, подписки и настройки.",
          "Показатели производительности и объёмы данных по этому проекту не публикуются.",
        ],
      ),
    },
  },
  {
    slug: "mtt-commix",
    name: l("MTT Commix and CRM Integrations", "MTT Commix и интеграции с CRM"),
    kind: "team",
    badge: team,
    purpose: l(
      "A unified workspace for customer-service communication and operator workflows.",
      "Единое рабочее пространство для клиентской коммуникации и процессов операторов.",
    ),
    visual: "mtt",
    highlights: l(
      [
        "Developed REST APIs in ASP.NET Core and Vue.js interfaces for request forms, customer cards and process statuses.",
        "Integrated CRM with payment, telephony and messaging services, with retry and circuit-breaker policies.",
        "Optimised PostgreSQL queries, indexes and partitioning. Response times for key endpoints fell from 500–700 ms to 150–220 ms.",
      ],
      [
        "Разработал REST API на ASP.NET Core и интерфейсы на Vue.js: формы заявок, карточки клиентов и статусы процессов.",
        "Интегрировал CRM с платёжными, телефонными и мессенджер-сервисами, добавил политики retry и circuit breaker.",
        "Оптимизировал запросы, индексы и партиционирование PostgreSQL: время ответа ключевых эндпоинтов сократилось с 500–700 мс до 150–220 мс.",
      ],
    ),
    contribution: l(
      [
        "Developed REST APIs using ASP.NET Core.",
        "Built Vue.js interfaces for request forms, customer cards and process statuses.",
        "Implemented validation on the client and server.",
        "Integrated CRM with payment, telephony and messaging services.",
        "Optimised PostgreSQL queries, indexes and partitioning.",
        "Reduced response times for key endpoints from 500–700 ms to 150–220 ms.",
        "Added retry and circuit-breaker policies for external integrations.",
        "Participated in code review.",
      ],
      [
        "Разработал REST API на ASP.NET Core.",
        "Сделал интерфейсы на Vue.js: формы заявок, карточки клиентов и статусы процессов.",
        "Реализовал валидацию на клиенте и на сервере.",
        "Интегрировал CRM с платёжными, телефонными и мессенджер-сервисами.",
        "Оптимизировал запросы, индексы и партиционирование PostgreSQL.",
        "Сократил время ответа ключевых эндпоинтов с 500–700 мс до 150–220 мс.",
        "Добавил политики retry и circuit breaker для внешних интеграций.",
        "Участвовал в code review.",
      ],
    ),
    stack: ["ASP.NET Core", "Vue.js", "PostgreSQL", "REST API", "Polly"],
    study: {
      overview: l(
        [
          "I work on MTT applications at Smart Team Service. Commix is a unified customer-service platform that brings communication channels and customer tools into one workspace for operators.",
        ],
        [
          "Я работаю над приложениями MTT в Smart Team Service. Commix — единая платформа клиентского сервиса, которая собирает каналы коммуникации и клиентские инструменты в одном рабочем пространстве оператора.",
        ],
      ),
      role: l(
        [
          "I worked in a team on the platform's backend and operator interface.",
          "My scope covered ASP.NET Core APIs, Vue.js screens, validation, CRM integrations, PostgreSQL performance work, and code review.",
        ],
        [
          "Я работал в команде над бэкендом платформы и интерфейсом оператора.",
          "В мою зону входили API на ASP.NET Core, экраны на Vue.js, валидация, интеграции CRM, оптимизация PostgreSQL и code review.",
        ],
      ),
      decisions: l(
        [
          "Validation runs on both the client and the server.",
          "Calls to payment, telephony and messaging services use retry and circuit-breaker policies.",
          "Slow endpoints were addressed through PostgreSQL query, index and partitioning changes.",
        ],
        [
          "Валидация выполняется и на клиенте, и на сервере.",
          "Вызовы платёжных, телефонных и мессенджер-сервисов защищены политиками retry и circuit breaker.",
          "Медленные эндпоинты ускоряли за счёт изменений в запросах, индексах и партиционировании PostgreSQL.",
        ],
      ),
      delivered: l(
        [
          "Response times for key endpoints fell from 500–700 ms to 150–220 ms. The figure applies to key endpoints, not to the whole platform.",
          "REST APIs and Vue.js interfaces for request forms, customer cards and process statuses.",
          "CRM integrated with payment, telephony and messaging services.",
          "Retry and circuit-breaker policies on external integrations.",
        ],
        [
          "Время ответа ключевых эндпоинтов сократилось с 500–700 мс до 150–220 мс. Цифра относится к ключевым эндпоинтам, а не ко всей платформе.",
          "REST API и интерфейсы на Vue.js для форм заявок, карточек клиентов и статусов процессов.",
          "CRM интегрирована с платёжными, телефонными и мессенджер-сервисами.",
          "Политики retry и circuit breaker для внешних интеграций.",
        ],
      ),
    },
  },
  {
    slug: "employee-bonus-management",
    name: l("Employee Bonus Management System", "Система управления бонусами сотрудников"),
    kind: "freelance",
    badge: l("Freelance · Built for a UK client", "Фриланс · Для клиента из Великобритании"),
    purpose: l(
      "An internal application for submitting employee requests and managing approval decisions.",
      "Внутреннее приложение для подачи заявок сотрудников и управления решениями по ним.",
    ),
    visual: "bonus",
    highlights: l(
      [
        "Built JWT authentication and role-based access for employee, manager, SEO and admin roles.",
        "Developed approval and rejection workflows. Decisions are visible to the employee.",
        "Designed backend logic and PostgreSQL data structures, and deployed to a Kazakhstan-based VPS.",
      ],
      [
        "Реализовал JWT-аутентификацию и ролевой доступ для ролей: сотрудник, руководитель, SEO и администратор.",
        "Разработал процессы одобрения и отклонения заявок. Решения видны сотруднику.",
        "Спроектировал бэкенд-логику и структуры данных PostgreSQL, развернул приложение на VPS в Казахстане.",
      ],
    ),
    contribution: l(
      [
        "Built JWT authentication and role-based access.",
        "Implemented separate employee, manager, SEO and admin roles.",
        "Developed approval and rejection workflows.",
        "Made management decisions visible to the relevant employee.",
        "Designed backend logic and PostgreSQL data structures.",
        "Added internal notes.",
        "Deployed the application to a Kazakhstan-based VPS for a UK client.",
      ],
      [
        "Реализовал JWT-аутентификацию и ролевой доступ.",
        "Реализовал отдельные роли: сотрудник, руководитель, SEO и администратор.",
        "Разработал процессы одобрения и отклонения заявок.",
        "Сделал решения руководства видимыми для соответствующего сотрудника.",
        "Спроектировал бэкенд-логику и структуры данных PostgreSQL.",
        "Добавил внутренние заметки.",
        "Развернул приложение на VPS в Казахстане для клиента из Великобритании.",
      ],
    ),
    stack: ["Python", "React", "Node.js", "TypeScript", "PostgreSQL", "JWT"],
    study: {
      overview: l(
        [
          "An internal application where employees submit requests and managers approve or reject them. I built it for a UK client as part of my freelance work.",
        ],
        [
          "Внутреннее приложение, в котором сотрудники подают заявки, а руководители их одобряют или отклоняют. Я сделал его для клиента из Великобритании в рамках фриланс-работы.",
        ],
      ),
      role: l(
        [
          "This was a freelance build. My scope covered backend logic, PostgreSQL data structures, authentication, roles, the approval workflow and deployment.",
        ],
        [
          "Это была фриланс-разработка. В мою зону входили бэкенд-логика, структуры данных PostgreSQL, аутентификация, роли, процесс согласования и развёртывание.",
        ],
      ),
      decisions: l(
        [
          "Access is split across four roles: employee, manager, SEO and admin, using JWT authentication and role-based access.",
          "Management decisions are shown to the employee who made the request.",
          "The application runs on a Kazakhstan-based VPS.",
        ],
        [
          "Доступ разделён между четырьмя ролями: сотрудник, руководитель, SEO и администратор. Используются JWT-аутентификация и ролевой доступ.",
          "Решения руководства показываются сотруднику, который подал заявку.",
          "Приложение работает на VPS в Казахстане.",
        ],
      ),
      delivered: l(
        [
          "Separate employee, manager, SEO and admin roles.",
          "Approval and rejection flows, with decisions visible to the employee.",
          "Internal notes.",
          "A deployed application on a VPS for the client.",
          "No usage or performance figures are published for this project.",
        ],
        [
          "Отдельные роли: сотрудник, руководитель, SEO и администратор.",
          "Процессы одобрения и отклонения с видимостью решений для сотрудника.",
          "Внутренние заметки.",
          "Развёрнутое на VPS приложение для клиента.",
          "Данные об использовании и производительности по этому проекту не публикуются.",
        ],
      ),
    },
  },
];

export const additionalProjects = [
  {
    name: l("Tournament Management System", "Система управления турнирами"),
    note: l("Freelance", "Фриланс"),
    description: l(
      "Participant records and referee score entry, with live results showing the current highest score.",
      "Учёт участников и ввод оценок судьями; живые результаты показывают текущий лучший балл.",
    ),
    stack: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    name: l("Amateur Figure Skating Association Portal", "Портал ассоциации любительского фигурного катания"),
    note: l("Team contribution", "Участие в команде"),
    description: l(
      "Contributed to a shared portal for athletes and organisations, supporting competition processes and access to amateur figure skating.",
      "Участвовал в разработке общего портала для спортсменов и организаций: поддержка соревновательных процессов и доступ к любительскому фигурному катанию.",
    ),
    stack: [] as string[],
  },
  {
    name: l("Smart Team Service Website", "Сайт Smart Team Service"),
    note: l("", ""),
    description: l(
      "Developed a company landing page presenting its services and advantages.",
      "Разработал лендинг компании, в котором представлены её услуги и преимущества.",
    ),
    stack: [] as string[],
  },
  {
    name: l("AI Telegram Bot", "AI Telegram-бот"),
    note: l("", ""),
    description: l(
      "Built a Llama-based Telegram bot for school-related use.",
      "Создал Telegram-бота на базе языковой модели Llama для школьных задач.",
    ),
    stack: ["Python", "Llama"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
