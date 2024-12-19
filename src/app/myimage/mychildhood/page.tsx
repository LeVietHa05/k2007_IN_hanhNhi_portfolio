import Backheader from "@/app/ui/backHeader";
import Image from "next/image";

export default function mychildhood() {
  const imageSets1 = [
    {
      src: "/childhood1.png",
      alt: "childhood 1",
      size: [540, 356],
    },
    {
      src: "/childhood2.png",
      alt: "childhood 2",
      size: [540, 356],
    },
    {
      src: "/childhood3.png",
      alt: "childhood 3",
      size: [346, 328],
    },
    {
      src: "/childhood4.png",
      alt: "childhood 4",
      size: [346, 328],
    },
    {
      src: "/childhood5.png",
      alt: "childhood 5",
      size: [346, 328],
    },
    {
      src: "/childhood6.png",
      alt: "childhood 6",
      size: [375, 330],
    },
    {
      src: "/childhood7.png",
      alt: "childhood 7",
      size: [375, 330],
    },
    {
      src: "/childhood8.png",
      alt: "childhood 8",
      size: [290, 330],
    },
  ];
  const imageSets2 = [
    [
      { src: "/childhood9.png", alt: "childhood 9", size: [505, 447] },
      { src: "/childhood10.png", alt: "childhood 10", size: [505, 814] },
    ],
    [
      { src: "/childhood11.png", alt: "childhood 11", size: [575, 407] },
      { src: "/childhood12.png", alt: "childhood 12", size: [575, 407] },
      { src: "/childhood13.png", alt: "childhood 13", size: [575, 407] },
    ],
  ];

  return (
    <div className="mt-20 px-20">
      <Backheader text="My childhood" href="/myimage"></Backheader>
      <div className="flex flex-wrap gap-10 w-full mt-10">
        {imageSets1.map((image) => {
          return (
            <Image
              key={image.alt}
              src={image.src}
              alt={image.alt}
              width={image.size[0]}
              height={image.size[1]}
            />
          );
        })}
      </div>
      <div className="flex gap-10 mt-10">
        <div className="flex flex-col gap-10">
          {imageSets2[0].map((image) => {
            return (
              <Image
                key={image.alt}
                src={image.src}
                alt={image.alt}
                width={image.size[0]}
                height={image.size[1]}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-10">
          {imageSets2[1].map((image) => {
            return (
              <Image
                key={image.alt}
                src={image.src}
                alt={image.alt}
                width={image.size[0]}
                height={image.size[1]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
