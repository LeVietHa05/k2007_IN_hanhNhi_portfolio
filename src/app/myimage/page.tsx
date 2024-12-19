import Card from "../ui/card";

const thumbs = [
  {
    src: "/thumb3.png",
    alt: "thumbnail 3",
    overlayText: "My childhood",
    width: 580,
    height: 500,
    link: "/myimage/mychildhood",
  },
  {
    src: "/thumb4.png",
    alt: "thumbnail 4",
    overlayText: "Youth in a photograph",
    width: 580,
    height: 500,
    link: "/myimage/youth",
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
