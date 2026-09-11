import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * PhoneShot — a real app screen in its device frame.
 *
 * The source exports were phones on a white square. The files under
 * `public/img/asap/phones/` have that background cut away (transparent PNG,
 * cropped to the device), so they sit directly on ivory or deep green
 * without a white box around them. All are ~526×1080.
 */
export default function PhoneShot({
  src,
  alt,
  sizes = "(max-width: 768px) 45vw, 260px",
  priority = false,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={526}
      height={1080}
      sizes={sizes}
      priority={priority}
      draggable={false}
      className={`h-auto w-full select-none ${className}`}
      style={style}
    />
  );
}
