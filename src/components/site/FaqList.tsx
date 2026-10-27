import { PlusIcon } from "./Icons";

export function FaqList({ faqs, light = false }: { faqs: { question: string; answer: string }[]; light?: boolean }) {
  return (
    <div className={`divide-y ${light ? "divide-petal/15" : "divide-plum-900/10"}`}>
      {faqs.map((f, i) => (
        <details key={i} className="group py-5">
          <summary className={`flex items-start justify-between gap-6 font-serif text-xl font-medium leading-snug md:text-[1.45rem] ${light ? "text-petal" : "text-plum-900"}`}>
            <span>{f.question}</span>
            <span className={`mt-1 shrink-0 transition-transform duration-300 group-open:rotate-45 ${light ? "text-gold-300" : "text-gold-500"}`}>
              <PlusIcon className="h-4 w-4" />
            </span>
          </summary>
          <p className={`mt-3 max-w-3xl text-[1rem] leading-[1.8] ${light ? "text-petal/75" : "text-muted"}`}>{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
