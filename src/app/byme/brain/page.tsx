"use client";

import Backheader from "@/app/ui/backHeader";
import { CardBrain } from "@/app/ui/brain";
import { useEffect } from "react";
const data = [
  {
    title: "Common Ancestor period (5-7 million years ago)",
    description: [
      "Common ancestor of apes and humans.",
      "Brain size: similar to modern apes (~300-400 cm³).",
      "The brain mainly serves basic mobility and survival.",
    ],
    imgSrc: "/brain1.png",
    imgAlt: "brain1",
    key: "brain1",
    width: 488,
    height: 254,
    imgsize: [204, 238],
  },
  {
    title: "Australopithecus period (4-2 million years ago)",
    description: [
      "The species Australopithecus appears, a close ancestor of the genus Homo.",
      "Brain size: 400-500 cm³.",
      "There are no sophisticated tools yet, but there are beginning to be signs of basic logical thinking.",
    ],
    imgSrc: "/brain2.png",
    imgAlt: "brain2",
    key: "brain2",
    width: 488,
    height: 296,
    imgsize: [204, 238],
  },
  {
    title: "Homo habilis period (2.4-1.4 million years ago)",
    description: [
      "The first 'skillful' humans began making rudimentary stone tools.",
      "Brain size: 510-600 cm³.",
      "Marks the first step in using intelligence to influence the surrounding environment.",
    ],
    imgSrc: "/brain3.png",
    imgAlt: "brain3",
    key: "brain3",
    width: 488,
    height: 270,
    imgsize: [170, 191],
  },
  {
    title: "Homo erectus period (1.9 - 110,000 years ago)",
    description: [
      "Humans were 'upright,' with the ability to migrate and make tools.",
      "Brain size: 600-1,100 cm³.",
      "Early development of language and social organization.",
    ],
    imgSrc: "/brain4.png",
    imgAlt: "brain4",
    key: "brain4",
    width: 488,
    height: 270,
    imgsize: [167, 206],
  },
  {
    title: "Neanderthal (400,000 - 40,000 years ago)",
    description: [
      "The brain was the same size or larger than modern humans (~1,200-1,600 cm³).",
      "Skills for making tools, social communication and living in a community",
    ],
    imgSrc: "/brain5.png",
    imgAlt: "brain5",
    key: "brain5",
    width: 488,
    height: 254,
    imgsize: [204, 238],
  },
  {
    title: "Modern Homo sapiens period (300,000 years ago)",
    description: [
      "Average brain size: 1,300-1,500 cm³.",
      "The pinnacle of intellectual development, with language, art, culture, and technology.",
      "The complexity of the brain supports abstract thinking, creativity, and communication.",
    ],
    imgSrc: "/brain6.png",
    imgAlt: "brain6",
    key: "brain6",
    width: 488,
    height: 348,
    imgsize: [204, 272],
  },
  {
    title:
      "Are we nearing the end of the stage in the development of our nervous system ? Alongside technology ?",
    description: [
      "Elon Musk's Neuralink seeks to embed chips in the human brain to enhance its capabilities and connect biological with artificial intelligence.",
      "This cutting edge technology holds promise for detecting neurological disorders, restoring sensory and motor functions and enabling communication between humans and machines. Should it succeed, could Neuralink mark the onset of an era where the evolution of our nervous system is not constrained by biology but propelled by technology?",
    ],
    imgSrc: "/brain7.png",
    imgAlt: "brain7",
    key: "brain7",
    width: 728,
    height: 388,
    imgsize: [225, 232],
  },
];

export default function Brain() {
  const adjustSpecialBrainPosition = () => {
    const verticalHeight = document.getElementById("Vertical");
    const specialBrain = document.getElementById("specialBrain");
    if (verticalHeight && specialBrain) {
      specialBrain.style.top = `${verticalHeight.offsetHeight}px`;
    }
  };

  useEffect(() => {
    // Adjust position on initial render
    adjustSpecialBrainPosition();

    // Adjust position on window resize
    window.addEventListener("resize", adjustSpecialBrainPosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustSpecialBrainPosition);
    };
  }, []);
  return (
    <div className="my-20">
      <Backheader href="/byme" text="Brain evolution"></Backheader>
      <div className="py-4 custom-color-1 text-2xl">
        Combining my passions for both Science and Art, I meticulously
        illustrated the human brain across various stages of evolution. 
      </div>
      <div className="brain h-[800px] relative rounded-lg overflow-y-scroll mb-10">
        <div className="h-[1400px]">
          <div id="Vertical"></div>

          {data.map((stage, i) => {
            if (i == data.length - 1) {
              return (
                <div
                  key={data[i].key}
                  className="absolute mb-4 inset-1/2 -translate-x-1/2"
                  id="specialBrain"
                  style={{
                    // top: `${verticalHeight}px`,
                    top: `${i * 25 + 12}%`,
                    width: stage.width,
                    height: stage.height,
                  }}>
                  <CardBrain
                    title={data[i].title}
                    description={data[i].description}
                    imgAlt={data[i].imgAlt}
                    imgSrc={data[i].imgSrc}
                    imgsize={data[i].imgsize}
                  />
                </div>
              );
            }
            if (i % 2 == 0) {
              return (
                <div
                  className={`absolute left-[54%]`}
                  style={{
                    top: `${i * 25 + 3}%`,
                    width: stage.width,
                    height: stage.height,
                  }}
                  key={stage.key}>
                  <div
                    className={`absolute  top-[50%] -left-[16%] translate-x-2/3 -translate-y-1/2`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none">
                      <circle cx="14" cy="14" r="14" fill="#5B4015" />
                    </svg>
                  </div>
                  {
                    <CardBrain
                      title={data[i].title}
                      description={data[i].description}
                      imgAlt={data[i].imgAlt}
                      imgSrc={data[i].imgSrc}
                      imgsize={data[i].imgsize}
                    />
                  }
                </div>
              );
            } else {
              return (
                <div
                  className={`absolute  right-[54%]`}
                  style={{
                    top: `${i * 25 + 3}%`,
                    width: stage.width,
                    height: stage.height,
                  }}
                  key={stage.key}>
                  <div
                    className={`absolute  top-[50%] -right-[17%] -translate-x-1/2 -translate-y-1/2`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none">
                      <circle cx="14" cy="14" r="14" fill="#5B4015" />
                    </svg>
                  </div>
                  {
                    <CardBrain
                      title={data[i].title}
                      description={data[i].description}
                      imgAlt={data[i].imgAlt}
                      imgSrc={data[i].imgSrc}
                      imgsize={data[i].imgsize}
                    />
                  }
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
