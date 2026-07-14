import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost" | "mustard";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark border border-transparent",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white",
  dark: "bg-ink text-white hover:bg-ink/90 border border-transparent",
  ghost: "text-ink hover:text-accent border-0",
  mustard:
    "bg-mustard text-ink hover:bg-mustard/90 border border-transparent",
};

type ButtonAnchorProps = {
  href: string;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  external?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "size" | "children">;

const sizeClass = {
  sm: "px-3.5 py-2 text-[13px] rounded-[10px] gap-1.5",
  md: "px-5 py-3 text-[14px] rounded-[12px] gap-2",
  lg: "px-6 py-3.5 text-[15px] rounded-[12px] gap-2",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  external,
  children,
  className = "",
  ...rest
}: ButtonAnchorProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-colors";
  const cls = `${base} ${sizeClass[size]} ${variantClass[variant]} ${className}`;
  if (external || /^https?:\/\//.test(href) || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={cls}
        {...rest}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href as LinkProps["href"]}
      className={cls}
      {...(rest as Omit<typeof rest, "href">)}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  className = "",
  tone = "ink",
}: {
  children: ReactNode;
  className?: string;
  tone?: "ink" | "accent" | "white";
}) {
  const colors = {
    ink: "text-ink-muted",
    accent: "text-accent",
    white: "text-white/70",
  } as const;
  const lineColors = {
    ink: "bg-ink-muted",
    accent: "bg-accent",
    white: "bg-white/40",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] ${colors[tone]} ${className}`}
    >
      <span className={`inline-block h-px w-6 ${lineColors[tone]}`} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  size = "lg",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  size?: "md" | "lg" | "xl";
}) {
  const sizes = {
    md: "text-[clamp(28px,3.2vw,38px)]",
    lg: "text-[clamp(36px,4.6vw,56px)]",
    xl: "text-[clamp(44px,6.2vw,72px)]",
  } as const;
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : ""
      } ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display font-medium tracking-[-0.02em] leading-[1.05] text-ink ${sizes[size]}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-[60ch] text-[16px] leading-[1.6] text-ink-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Badge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "mustard" | "forest";
}) {
  const map = {
    default:
      "bg-surface-alt text-ink border-border",
    accent: "bg-accent text-white border-accent",
    mustard: "bg-mustard text-ink border-mustard",
    forest: "bg-forest text-white border-forest",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.075em] ${map[tone]}`}
    >
      {children}
    </span>
  );
}

export function Section({
  children,
  className = "",
  bg = "cream",
  bordered = false,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  bg?: "cream" | "alt" | "white" | "ink" | "accent";
  bordered?: boolean;
} & HTMLAttributes<HTMLElement>) {
  const bgs = {
    cream: "bg-bg-cream",
    alt: "bg-surface-alt",
    white: "bg-surface",
    ink: "bg-ink text-white",
    accent: "bg-accent text-white",
  } as const;
  return (
    <section
      className={`${bgs[bg]} ${
        bordered ? "border-t border-b border-border" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}

export function CheckIcon({ tone = "forest" }: { tone?: "forest" | "mustard" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="shrink-0 mt-[3px]"
      aria-hidden
    >
      <path
        d="m2.5 7.5 3 3 6-7"
        stroke={tone === "forest" ? "var(--color-forest)" : "var(--color-mustard)"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
