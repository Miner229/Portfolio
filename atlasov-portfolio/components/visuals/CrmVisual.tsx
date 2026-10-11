import { l, type Lang } from "@/data/i18n";

const T = l(
  {
    stages: "Migration stages",
    list: ["Prepare new environment", "Align database content", "Parallel testing", "Incremental transfer + rollback script", "Cutover"],
    state: { done: "Done", progress: "In progress", ready: "Ready", planned: "Planned" },
    records: "Customer records",
    cols: ["ID", "Customer", "Plan", "Status"],
    rows: [
      ["C-1042", "A. Sample", "Standard", "Migrated"],
      ["C-1043", "B. Example", "Family", "Migrated"],
      ["C-1044", "C. Demo", "Standard", "Pending"],
      ["C-1045", "D. Placeholder", "Basic", "Pending"],
    ],
    migrated: "Migrated",
  },
  {
    stages: "Этапы миграции",
    list: ["Подготовка нового окружения", "Сверка данных в базе", "Параллельное тестирование", "Инкрементальный перенос и скрипт отката", "Переключение"],
    state: { done: "Готово", progress: "В работе", ready: "Готов", planned: "Запланировано" },
    records: "Записи клиентов",
    cols: ["ID", "Клиент", "Тариф", "Статус"],
    rows: [
      ["C-1042", "А. Пример", "Стандарт", "Перенесён"],
      ["C-1043", "Б. Образец", "Семейный", "Перенесён"],
      ["C-1044", "В. Демо", "Стандарт", "Ожидает"],
      ["C-1045", "Г. Шаблон", "Базовый", "Ожидает"],
    ],
    migrated: "Перенесён",
  },
);

export default function CrmVisual({ lang }: { lang: Lang }) {
  const t = T[lang];
  const keys = ["done", "done", "progress", "ready", "planned"] as const;
  return (
    <div className="grid gap-px bg-line text-[0.78rem] leading-snug sm:grid-cols-[1fr_1.25fr]">
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">{t.stages}</p>
        <ol className="space-y-2.5">
          {t.list.map((label, i) => (
            <li key={label} className="flex items-start gap-2.5">
              <span
                className={`mt-1 size-2.5 shrink-0 rounded-full border border-accent ${
                  keys[i] === "done" ? "bg-accent" : keys[i] === "progress" ? "bg-accent/40" : ""
                }`}
              />
              <span className="min-w-0 flex-1">
                <span className="block">{label}</span>
                <span className="font-mono text-[0.68rem] text-muted">{t.state[keys[i]]}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">{t.records}</p>
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr className="border-b border-line font-mono text-[0.68rem] text-muted">
              <th className="w-[26%] pb-1.5 font-normal">{t.cols[0]}</th>
              <th className="w-[34%] pb-1.5 font-normal">{t.cols[1]}</th>
              <th className="hidden w-[20%] pb-1.5 font-normal sm:table-cell">{t.cols[2]}</th>
              <th className="pb-1.5 font-normal">{t.cols[3]}</th>
            </tr>
          </thead>
          <tbody>
            {t.rows.map((r) => (
              <tr key={r[0]} className="border-b border-line/70 last:border-0">
                <td className="truncate py-2 font-mono text-[0.7rem]">{r[0]}</td>
                <td className="truncate py-2">{r[1]}</td>
                <td className="hidden truncate py-2 text-muted sm:table-cell">{r[2]}</td>
                <td className="truncate py-2">
                  <span className={r[3] === t.migrated ? "text-accent" : "text-muted"}>{r[3]}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
