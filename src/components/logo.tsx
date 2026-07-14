import Image from "next/image";

export function Logo({
  className = "",
  height = 32,
}: {
  className?: string;
  height?: number;
}) {
  // Source asset is 1024×333. Width is auto-derived from aspect ratio.
  const width = Math.round((height * 1024) / 333);
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/bukucloud-logo.png"
        alt="BukuCloud"
        width={width}
        height={height}
        priority
        className="h-auto w-auto"
        style={{ height, width: "auto" }}
      />
    </span>
  );
}

/**
 * Light variant of the full wordmark for dark backgrounds.
 *
 * Reuses the same `bukucloud-logo.png` asset as the header so the silhouette
 * matches the brand mark exactly, then pushes it to pure white via a CSS
 * filter. No background pill required.
 */
export function LogoLight({
  className = "",
  height = 28,
}: {
  className?: string;
  height?: number;
}) {
  const width = Math.round((height * 1024) / 333);
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/bukucloud-logo.png"
        alt="BukuCloud"
        width={width}
        height={height}
        priority
        className="h-auto w-auto"
        style={{
          height,
          width: "auto",
          filter: "brightness(0) invert(1)",
        }}
      />
    </span>
  );
}

/** Mono variant: book-and-cloud icon paired with a white wordmark — for use on dark backgrounds. */
export function LogoMono({
  className = "",
  height = 28,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/bukucloud-icon.png"
        alt=""
        width={height}
        height={height}
        className="shrink-0"
        style={{ height, width: height }}
        aria-hidden
      />
      <span className="font-display text-[18px] tracking-tight text-white">
        bukucloud
      </span>
    </span>
  );
}
