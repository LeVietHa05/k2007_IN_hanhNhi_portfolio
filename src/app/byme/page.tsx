import Card from "../ui/card";

const thumbs = [
  {
    src: "/thumb1.png",
    alt: "thumbnail 1",
    overlayText: "the Temple of Literature",
    width: 580,
    height: 500,
    link: "/byme/temple",
  },
  {
    src: "/thumb2.png",
    alt: "thumbnail 2",
    overlayText: "Brain evolution",
    width: 580,
    height: 500,
    link: "/byme/brain",
  },
];

export default function byme() {
  return (
    <div className="p-10 gap-10 flex justify-between min-h-screen my-6 items-center">
      {thumbs.map((card) => {
        return (
          <Card
            key={card.link}
            link={card.link}
            src={card.src}
            alt={card.alt}
            overlayText={card.overlayText}
            width={card.width}
            height={card.height}
          />
        );
      })}
    </div>
  );
}
