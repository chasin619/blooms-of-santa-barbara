import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "ghost";

/* Pill-shaped buttons: the one deliberately soft shape on a site of square photographs. */
const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-[12px] font-semibold uppercase tracking-luxe transition-all duration-300 px-7 py-4 text-center";

const variants: Record<Variant, string> = {
  primary: "bg-plum-900 text-petal hover:bg-rose-600",
  outline: "border border-plum-900/60 text-plum-900 hover:bg-plum-900 hover:text-petal",
  light: "border-[1.5px] border-petal bg-plum-950/25 text-petal shadow-[0_6px_30px_-10px_rgba(43,27,34,0.7)] backdrop-blur-[3px] hover:bg-petal hover:text-plum-900",
  ghost: "text-plum-900 underline decoration-gold-400 underline-offset-[6px] hover:text-rose-600 px-0 py-0 rounded-none",
};

export function ButtonLink({ href, children, variant = "primary", className = "", external = false }: { href: string; children: ReactNode; variant?: Variant; className?: string; external?: boolean }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("sms:")) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Button({ children, variant = "primary", className = "", ...rest }: { children: ReactNode; variant?: Variant; className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
