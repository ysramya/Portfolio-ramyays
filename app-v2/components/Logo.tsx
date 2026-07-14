import Image from "next/image";

export default function Logo({
  hasLogo,
  className,
  imageClassName,
}: {
  hasLogo: boolean;
  className?: string;
  imageClassName?: string;
}) {
  if (hasLogo) {
    // The source mark is a full black square canvas with a large wordmark,
    // so it needs a bit more display size than a typical square favicon to
    // stay legible instead of reading as a solid block.
    return (
      <Image
        src="/img/brand/logo.png"
        alt="Ramya Yerramilli"
        width={96}
        height={96}
        className={imageClassName ?? "w-11 h-11 rounded-lg object-cover"}
      />
    );
  }

  return (
    <span className={className ?? "font-[family-name:var(--font-display)] text-lg font-semibold"}>
      <span className="text-[var(--color-ink)]">RY</span>
      <span className="text-[var(--color-green)]">.</span>
    </span>
  );
}
