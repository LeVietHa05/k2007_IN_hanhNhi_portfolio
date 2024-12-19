import Image from "next/image";
import React from "react";
import { montserrat } from "./fonts";

interface BrainCardProps {
  title: string;
  description: string[];
  imgSrc: string;
  imgAlt: string;
  imgsize: number[]
}

export function CardBrain({
  title,
  description,
  imgSrc,
  imgAlt,
  imgsize,
}: BrainCardProps) {
  return (
    <div className="braincard flex items-center py-2 px-5 gap-4 absolute group h-full transition-all duration-300">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={imgsize[0]}
        height={imgsize[1]}
        className="shrink-0"></Image>
      <div className="relative">
        <div
          className={`${montserrat.className} relative leading-8 custom-color-2 -bottom-20 group-hover:bottom-0 transition-all duration-300`}>
          {title}
        </div>
        <ul className="relative p-4 opacity-0 -bottom-10 group-hover:bottom-0 transition-all duration-300 group-hover:opacity-100">
          {description.map((des, i) => {
            return (
              <li key={i} className="list-disc text-gray-700 text-sm">
                {des}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function CardBrainWithDot() {
  
}