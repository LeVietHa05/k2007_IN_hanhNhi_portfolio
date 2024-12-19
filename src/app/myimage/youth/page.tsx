import Backheader from "@/app/ui/backHeader";
import Image from "next/image";
import Paragraph from "@/app/ui/paragraph";

const parts = [
  {
    isLeft: true,
    text: "A yearbook photo is not merely a picture, it is a whole world of memories preserved intact. It captures the days spent rushing down the hallways together, the moments of uncontrollable laughter from a joke, and the silent embraces when someone couldn’t hide their sorrow.",
    imgSrc: "/youth1.png",
    imgAlt: "youth 1",
    size: [540, 380],
  },
  {
    isLeft: false,
    text: "In this moment, everyone is smiling brightly, but deep within their eyes is an irrepressible sense of nostalgia. They know that soon, each one will go in a different direction, carrying their own dreams and aspirations. Yet, in a small corner of their hearts, those years under this school roof will always be the most beautiful part of their youth.",
    imgSrc: "/youth2.png",
    imgAlt: "youth 2",
    size: [540, 380],
  },
  {
    isLeft: true,
    text: "Marie Curie, the place that has witnessed countless youths pass through, will still remain. But this summer, it will lose a graduating class – those who will take with them their most cherished memories and step into the vast world beyond.",
    imgSrc: "/youth3.png",
    imgAlt: "youth 3",
    size: [540, 380],
  },
];

export default function younth() {
  return (
    <div className="mt-20 px-20">
      <Backheader text="Youth in a Photograph" href="/myimage"></Backheader>
      {parts.map((partt) => {
        return part({
          left: partt.isLeft,
          text: partt.text,
          imgSrc: partt.imgSrc,
          imgAlt: partt.imgAlt,
          imgsize: partt.size,
        });
      })}
      <Image className="mt-10" src={"/youth4.png"} alt="temp" width={1120} height={2461}></Image>
    </div>
  );
}

function part({
  left,
  text,
  imgSrc,
  imgAlt,
  imgsize,
}: {
  left: boolean;
  text: string;
  imgSrc: string;
  imgAlt: string;
  imgsize: number[];
}) {
  if (left) {
    return (
      <div className="flex gap-10 mt-10">
        <div className="flex justify-center items-center">
          <Paragraph text={text}></Paragraph>
        </div>
        <div className="shrink-0">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgsize[0]}
            height={imgsize[1]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-10 mt-10">
        <div className="shrink-0">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgsize[0]}
            height={imgsize[1]}
          />
        </div>
        <div className="flex justify-center items-center">
          <Paragraph text={text}></Paragraph>
        </div>
      </div>
    );
  }
}
