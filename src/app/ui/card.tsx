import Image from "next/image";

interface CardProps {
  link: string;
  alt: string;
  width: number;
  height: number;
  overlayText: string;
}

export default function Card({
  link,
  alt = "alt",
  width = 500,
  height = 500,
  overlayText,
}: CardProps) {
  return (
    <div className="custom-card relative rounded-lg">
      <Image src={link} alt={alt} width={width} height={height} />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg">{overlayText}</span>
      </div>
    </div>
  );
}
