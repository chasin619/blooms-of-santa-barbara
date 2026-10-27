import Link from "next/link";

export function Breadcrumbs({ items, light = false }: { items: { name: string; href?: string }[]; light?: boolean }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className={`text-[11px] font-semibold uppercase tracking-wide2 ${light ? "text-petal/90" : "text-muted"}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {all.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className={light ? "text-gold-300" : "text-gold-500"}>·</span>}
            {item.href && i < all.length - 1 ? (
              <Link href={item.href} className={`transition-colors ${light ? "hover:text-petal" : "hover:text-plum-900"}`}>
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className={light ? "text-petal" : "text-plum-900"}>
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
