import Image from "next/image";
import Link from "next/link";
import { montserrat, alice } from "./fonts";

interface CardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  overlayText: string;
  link: string;
}

export default function Card({
  src,
  alt = "alt",
  width = 500,
  height = 500,
  overlayText,
  link,
}: CardProps) {
  return (
    <Link href={link}>
      <div
        className={`${montserrat.className} custom-card relative rounded-lg `}>
        <Image src={src} alt={alt} width={width} height={height} />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:backdrop-blur-sm">
          <span
            className={`${alice.className} custom-color-1 text-4xl font-bold uppercase`}>
            {overlayText}
          </span>
        </div>
      </div>
    </Link>
  );
}
