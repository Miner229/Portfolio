export type Screenshot = { src: string; alt: string; width: number; height: number };

export type Project = {
  slug: string;
  name: string;
  kind: "team" | "freelance";
  badge: string;
  purpose: string;
  highlights: string[];
  contribution: string[];
  stack: string[];
  visual: "crm" | "mtt" | "bonus";
  /** Add a real screenshot here (file in /public) to replace the illustrative interface. */
  screenshot?: Screenshot;
  study: {
    overview: string[];
    role: string[];
    decisions: string[];
    delivered: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "tricolor-crm-migration",
    name: "Tricolor CRM Migration and Customer Accounts",
    kind: "team",
    badge: "Team project · Contributor",
    purpose: "Development of CRM functionality and customer account services.",
    visual: "crm",
    highlights: [
      "Contributed to the migration from Microsoft Dynamics CRM 2013 to Dynamics 365.",
      "Wrote forward and rollback SQL scripts for partial migrations and incremental transfers.",
      "Extended CRM entities, business rules and plugins, and worked on integrations with billing, contact-centre and document-management systems.",
      "Contributed to customer accounts for service access, subscriptions and settings.",
    ],
    contribution: [
      "Contributed to the migration from Microsoft Dynamics CRM 2013 to Dynamics 365.",
      "Prepared the new environment, aligned database content and supported parallel testing.",
      "Wrote forward and rollback SQL scripts for partial migrations and incremental transfers.",
      "Extended CRM entities, business rules and plugins.",
      "Worked on integrations with billing, contact-centre and document-management systems.",
      "Contributed to customer accounts for service access, subscriptions and settings.",
      "Supported load, integration and regression testing.",
    ],
    stack: ["C#/.NET", "Microsoft Dynamics CRM/365", "SQL", "REST API", "Vue.js"],
    study: {
      overview: [
        "Tricolor is a client of Smart Team Service, where I work as a full stack and backend developer.",
        "The project had two parts: moving the CRM from Microsoft Dynamics CRM 2013 to Dynamics 365, and extending the customer account services built around it.",
      ],
      role: [
        "I was one contributor in a team. The work below is my part of the project, not the whole programme.",
        "My scope covered migration preparation and SQL scripts, CRM business logic and integrations, customer account features and testing support.",
      ],
      decisions: [
        "Partial migrations and incremental transfers each had a forward script and a rollback script, so a step could be reversed.",
        "Parallel testing was supported before cutover.",
        "Load, integration and regression testing was carried out around the migration.",
      ],
      delivered: [
        "A new Dynamics 365 environment with database content aligned to the existing data.",
        "Forward and rollback SQL scripts for partial migrations and incremental transfers.",
        "Extended CRM entities, business rules and plugins, with integrations to billing, contact-centre and document-management systems.",
        "Customer accounts for service access, subscriptions and settings.",
        "No performance figures or data volumes are published for this project.",
      ],
    },
  },
  {
    slug: "mtt-commix",
    name: "MTT Commix and CRM Integrations",
    kind: "team",
    badge: "Team project · Contributor",
    purpose:
      "A unified workspace for customer-service communication and operator workflows.",
    visual: "mtt",
    highlights: [
      "Developed REST APIs in ASP.NET Core and Vue.js interfaces for request forms, customer cards and process statuses.",
      "Integrated CRM with payment, telephony and messaging services, with retry and circuit-breaker policies.",
      "Optimised PostgreSQL queries, indexes and partitioning. Response times for key endpoints fell from 500–700 ms to 150–220 ms.",
    ],
    contribution: [
      "Developed REST APIs using ASP.NET Core.",
      "Built Vue.js interfaces for request forms, customer cards and process statuses.",
      "Implemented validation on the client and server.",
      "Integrated CRM with payment, telephony and messaging services.",
      "Optimised PostgreSQL queries, indexes and partitioning.",
      "Reduced response times for key endpoints from 500–700 ms to 150–220 ms.",
      "Added retry and circuit-breaker policies for external integrations.",
      "Participated in code review and standardisation of API contracts.",
    ],
    stack: ["ASP.NET Core", "Vue.js", "PostgreSQL", "REST API", "Polly"],
    study: {
      overview: [
        "MTT is a client of Smart Team Service. Commix is a unified customer-service platform that brings communication channels and customer tools into one workspace for operators.",
      ],
      role: [
        "I worked in a team on the platform's backend and operator interface.",
        "My scope covered ASP.NET Core APIs, Vue.js screens, validation, CRM integrations, PostgreSQL performance work, and code review.",
      ],
      decisions: [
        "Validation runs on both the client and the server.",
        "Calls to payment, telephony and messaging services use retry and circuit-breaker policies.",
        "Slow endpoints were addressed through PostgreSQL query, index and partitioning changes.",
        "API contracts were standardised as part of code review.",
      ],
      delivered: [
        "Response times for key endpoints fell from 500–700 ms to 150–220 ms. The figure applies to key endpoints, not to the whole platform.",
        "REST APIs and Vue.js interfaces for request forms, customer cards and process statuses.",
        "CRM integrated with payment, telephony and messaging services.",
        "Retry and circuit-breaker policies on external integrations.",
      ],
    },
  },
  {
    slug: "employee-bonus-management",
    name: "Employee Bonus Management System",
    kind: "freelance",
    badge: "Freelance · Built for a UK client",
    purpose:
      "An internal application for submitting employee requests and managing approval decisions.",
    visual: "bonus",
    highlights: [
      "Built JWT authentication and role-based access for employee, manager, SEO and admin roles.",
      "Developed approval and rejection workflows. Decisions are visible to the employee.",
      "Designed backend logic and PostgreSQL data structures, and deployed to a Kazakhstan-based VPS.",
    ],
    contribution: [
      "Built JWT authentication and role-based access.",
      "Implemented separate employee, manager, SEO and admin roles.",
      "Developed approval and rejection workflows.",
      "Made management decisions visible to the relevant employee.",
      "Designed backend logic and PostgreSQL data structures.",
      "Added internal notes.",
      "Deployed the application to a Kazakhstan-based VPS for a UK client.",
    ],
    stack: ["Python", "React", "Node.js", "TypeScript", "PostgreSQL", "JWT"],
    study: {
      overview: [
        "An internal application where employees submit requests and managers approve or reject them. I built it for a UK client as part of my freelance work.",
      ],
      role: [
        "This was a freelance build. My scope covered backend logic, PostgreSQL data structures, authentication, roles, the approval workflow and deployment.",
      ],
      decisions: [
        "Access is split across four roles: employee, manager, SEO and admin, using JWT authentication and role-based access.",
        "Management decisions are shown to the employee who made the request.",
        "The application runs on a Kazakhstan-based VPS.",
      ],
      delivered: [
        "Separate employee, manager, SEO and admin roles.",
        "Approval and rejection flows, with decisions visible to the employee.",
        "Internal notes.",
        "A deployed application on a VPS for the client.",
        "No usage or performance figures are published for this project.",
      ],
    },
  },
];

export const additionalProjects = [
  {
    name: "Tournament Management System",
    note: "Freelance",
    description:
      "Participant records and referee score entry, with live results showing the current highest score.",
    stack: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Amateur Figure Skating Association Portal",
    note: "Team contribution",
    description:
      "Contributed to a shared portal for athletes and organisations, supporting competition processes and access to amateur figure skating.",
    stack: [] as string[],
  },
  {
    name: "Smart Team Service Website",
    note: "",
    description:
      "Developed a company landing page presenting its services and advantages.",
    stack: [] as string[],
  },
  {
    name: "AI Telegram Bot",
    note: "",
    description: "Built a Llama-based Telegram bot for school-related use.",
    stack: ["Python", "Llama"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
