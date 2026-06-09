"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  /** Element tag (defaults to `div`). */
  as?: ElementType;
  /** If true the element cascades its direct children with staggered delays. */
  stagger?: boolean;
  /** Extra entry delay in milliseconds — exposed to CSS via `--delay`. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

/**
 * Lightweight scroll-reveal wrapper.
 *
 * Renders the element with `data-reveal` (or `data-stagger`) and switches
 * to `data-revealed="true"` once it crosses the viewport threshold via
 * IntersectionObserver. Animations are defined in `globals.css` and
 * respect `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  as,
  stagger = false,
  delay = 0,
  className,
  style,
  id,
}: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.setAttribute("data-revealed", "true");
      return;
    }

    // Reveal anything already in view (e.g. above-the-fold) immediately so
    // hydration doesn't show empty content.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      el.setAttribute("data-revealed", "true");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.setAttribute("data-revealed", "true");
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const mergedStyle: CSSProperties = { ...style };
  if (delay) {
    (mergedStyle as Record<string, string>)["--delay"] = `${delay}ms`;
  }

  const dataProps = stagger
    ? { "data-stagger": "" }
    : { "data-reveal": "" };

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      id={id}
      className={className}
      style={mergedStyle}
      {...dataProps}
    >
      {children}
    </Tag>
  );
}
