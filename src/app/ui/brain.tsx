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
    <div className="braincard flex py-2 px-5 gap-4 absolute">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={imgsize[0]}
        height={imgsize[1]}
        className="shrink-0"></Image>
      <div>
        <div className={`${montserrat.className} leading-8 custom-color-2`}>
          {title}
        </div>
        <ul className="p-4">
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