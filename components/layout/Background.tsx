import Image from "next/image";
import { assets } from "@/config/site";

/** Fixed full screen artwork with the colour wash that sits over it. */
export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image src={assets.background} alt="" fill priority className="object-cover" />

      {/* Vertical tint so light text stays readable over any part of the photo. */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d5c]/70 via-[#0d4f70]/55 to-[#07293d]/85" />

      {/* Soft glow behind the page heading. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(160,230,255,0.28),transparent_60%)]" />
    </div>
  );
}
