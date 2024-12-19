import Paragraph from "../ui/paragraph";
import Header from "../ui/header";
import Image from "next/image";

export default function myschool() {
  const imgaeSets = [
    [
      {
        src: "/myschool3.png",
        alt: "myschool3",
        size: [552, 900],
      },
      {
        src: "/myschool4.png",
        alt: "myschool4",
        size: [552, 1015],
      },
      {
        src: "/myschool5.png",
        alt: "myschool5",
        size: [552, 1042],
      },
    ],
    [
      {
        src: "/myschool6.png",
        alt: "myschool6",
        size: [508, 603],
      },
      {
        src: "/myschool7.png",
        alt: "myschool7",
        size: [508, 1512],
      },
      {
        src: "/myschool8.png",
        alt: "myschool8",
        size: [508, 809],
      },
    ],
  ];
  return (
    <div className="mt-20 px-20">
      <Header
        customClass={`py-4`}
        text="Marie Curie Hanoi School: Where love begins"
      />
      <Paragraph
        customClass="custom-color-1 text-lg font-semibold py-4 "
        text=" “Sometimes it takes seconds for a moment to occur, but it lasts forever in our memory”"
      />
      <div className="flex flex-col gap-10 pt-6">
        <Image
          src={`/myschool1.png`}
          width={1120}
          height={670}
          alt="myschool 1"></Image>
        <Paragraph
          customClass=""
          text="Nearly 1000 days at Marie Curie Hanoi School, everyday is a page in my diary. Being the class monitor and class president of E3, I gained invaluable experiences from leadership, friendship, love and spirit of unity. I sporadically felt sorrowful when facing the undisciplined attitude of my classmates. But their naughty jokes have become a part of my youth. It began with the first time we met, the first time we argued, and the first time we laughed together. Each of those moments became a precious memory in my life."
        />
        <Image
          src={`/myschool2.png`}
          width={1120}
          height={371}
          alt="myschool 2"
        />
        <Paragraph
          customClass=""
          text="As class president, I was often at the center of those moments, trying to guide and support my classmates. But I also learned from them as they learned from me. The ups and downs, the disagreements and reconciliations, all shaped our journey together."
        />
        <div className="flex justify-between h-[3004px]">
          <div className="gap-[20px] flex flex-col">
            {imgaeSets[0].map((image) => {
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
          <div className="gap-[40px] flex flex-col">
            {imgaeSets[1].map((image) => {
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
        <Paragraph
          text="Looking back, I realize that those experiences were not just about learning knowledge, leading a class or overcoming obstacles, but about building lasting relationships and growing alongside each other. The spirit of unity and the lessons in leadership that I learned will remain with me for the rest of my life."
          customClass=""
        />
        <Image
          src={"/myschool9.png"}
          alt={"myschool9"}
          width={1120}
          height={700}
        />
        <Image
          src={"/myschool10.png"}
          alt={"myschool10"}
          width={1120}
          height={680}
          className="pb-10"
        />
      </div>
    </div>
  );
}
