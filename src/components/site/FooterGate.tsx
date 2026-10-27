"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** The big "Inquire here" footer band is hidden on the pages that already are the inquiry. */
export function FooterGate({ withCta, plain }: { withCta: ReactNode; plain: ReactNode }) {
  const pathname = usePathname();
  const hide = pathname === "/contact" || pathname === "/thank-you";
  return <>{hide ? plain : withCta}</>;
}
