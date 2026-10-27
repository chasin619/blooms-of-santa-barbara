export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className={className} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.9 6.1 6.7.8-4.9 4.6 1.3 6.6L12 17.4l-6 3.2 1.3-6.6L2.4 9.4l6.7-.8L12 2.5z" />
    </svg>
  );
}

export function PlayIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13l10-6.5z" />
    </svg>
  );
}

/** A small five-petal bloom: the studio's mark, used on the favicon and as a tiny ornament. */
export function BloomIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3.2c1.9 0 3 1.7 3 3.6 0 .3 0 .6-.1.9 1.9-.8 3.9-.3 4.5 1.5.6 1.8-.6 3.4-2.4 4.1 1.6 1.2 2.2 3.1 1 4.6-1.2 1.5-3.2 1.3-4.7.1.1 1.9-1 3.6-2.9 3.6s-3-1.7-2.9-3.6c-1.5 1.2-3.5 1.4-4.7-.1-1.2-1.5-.6-3.4 1-4.6C2 12.6.8 11 1.4 9.2c.6-1.8 2.6-2.3 4.5-1.5-.1-.3-.1-.6-.1-.9 0-1.9 1.1-3.6 3-3.6 1.3 0 2.3.8 3.2 2 .9-1.2 1.9-2 3.2-2h-3.2z" opacity=".9" />
      <circle cx="12" cy="12.6" r="2.4" fill="#faf1ed" />
    </svg>
  );
}

/** A sprig of leaves on a hairline: the divider that stands in for the old wave flourish. */
export function Sprig({ className = "h-6 w-24 text-gold-500" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 28" fill="none" stroke="currentColor" strokeWidth="1" className={className} aria-hidden="true">
      <path d="M2 20h30M88 20h30" strokeLinecap="round" />
      <path d="M38 22c8-4 20-14 44-16" strokeLinecap="round" />
      <path d="M50 16.5c-1-5 1.5-8.5 6-9.5.5 4.5-1.5 8-6 9.5z" fill="currentColor" fillOpacity=".35" />
      <path d="M62 11.8c-2.6-3.8-1.5-8 2.4-10 2 3.6 1 7.8-2.4 10z" fill="currentColor" fillOpacity=".35" />
      <path d="M58 18.2c3.8-1.8 7.6-.4 9.6 3-3.4 1.8-7.4.4-9.6-3z" fill="currentColor" fillOpacity=".35" />
      <path d="M72 9.6c3.6-2.4 7.6-1.6 9.9 1.6-3.2 2.4-7.4 1.6-9.9-1.6z" fill="currentColor" fillOpacity=".35" />
      <path d="M44 20.8c.6-3.6 3-5.7 6.3-5.8-.6 3.4-3.1 5.6-6.3 5.8z" fill="currentColor" fillOpacity=".35" />
    </svg>
  );
}
