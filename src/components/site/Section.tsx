import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, center = false, light = false }: { children: ReactNode; center?: boolean; light?: boolean }) {
  return <span className={`eyebrow ${center ? "eyebrow-center justify-center" : ""} ${light ? "!text-gold-300 [&::before]:bg-gold-300 [&::after]:bg-gold-300" : ""}`}>{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  center = false,
  light = false,
  className = "",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  center?: boolean;
  light?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <div className={`mb-5 ${center ? "flex justify-center" : ""}`}>
          <Eyebrow center={center} light={light}>
            {eyebrow}
          </Eyebrow>
        </div>
      )}
      <Tag className={`display-title text-[2rem] md:text-[2.6rem] lg:text-[3rem] ${light ? "text-petal" : "text-plum-900"}`}>{title}</Tag>
      {lede && <p className={`mt-6 text-[1.0625rem] leading-[1.8] md:text-lg ${light ? "text-petal/85" : "text-muted"}`}>{lede}</p>}
    </Reveal>
  );
}

export function Container({ children, className = "", narrow = false }: { children: ReactNode; className?: string; narrow?: boolean }) {
  return <div className={`mx-auto w-full ${narrow ? "max-w-prose2" : "max-w-content"} px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Hairline({ className = "" }: { className?: string }) {
  return <div className={`hairline ${className}`} aria-hidden="true" />;
}
