import { l, type Lang } from "@/data/i18n";

const T = l(
  {
    requests: "Requests",
    who: "Employee",
    status: { approved: "Approved", pending: "Pending", rejected: "Rejected" },
    decision: "Manager decision",
    approve: "Approve",
    reject: "Reject",
    note: "Internal note",
    noteText: "Sample note for the record",
    shown: "Decision is shown to the employee",
    letters: ["A", "B", "C", "D"],
  },
  {
    requests: "Заявки",
    who: "Сотрудник",
    status: { approved: "Одобрена", pending: "На рассмотрении", rejected: "Отклонена" },
    decision: "Решение руководителя",
    approve: "Одобрить",
    reject: "Отклонить",
    note: "Внутренняя заметка",
    noteText: "Пример заметки для записи",
    shown: "Решение видно сотруднику",
    letters: ["А", "Б", "В", "Г"],
  },
);

type Key = "approved" | "pending" | "rejected";
const keys: Key[] = ["approved", "pending", "rejected", "pending"];
const badge: Record<Key, string> = {
  approved: "bg-accent text-paper",
  rejected: "border border-ink text-ink",
  pending: "border border-dashed border-muted text-muted",
};

export default function BonusVisual({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className="grid gap-px bg-line text-[0.78rem] leading-snug sm:grid-cols-[1.25fr_1fr]">
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">{t.requests}</p>
        <ul>
          {keys.map((k, i) => (
            <li key={i} className="flex items-center justify-between gap-3 border-b border-line/70 py-2 last:border-0">
              <span className="min-w-0 truncate">
                <span className="font-mono text-[0.7rem] text-muted">R-10{i + 1}</span>
                <span className="ml-2">
                  {t.who} {t.letters[i]}
                </span>
              </span>
              <span className={`shrink-0 px-2 py-0.5 font-mono text-[0.66rem] ${badge[k]}`}>{t.status[k]}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">{t.decision}</p>
        <p className="mb-3 text-muted">
          R-102 · {t.who} {t.letters[1]}
        </p>
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="bg-accent px-3 py-1.5 text-paper">{t.approve}</span>
          <span className="border border-ink px-3 py-1.5">{t.reject}</span>
        </div>
        <p className="mb-1 font-mono text-[0.68rem] text-muted">{t.note}</p>
        <div className="border border-line px-2.5 py-2 text-muted">{t.noteText}</div>
        <p className="mt-3 font-mono text-[0.68rem] text-muted">{t.shown}</p>
      </div>
    </div>
  );
}
