import { montserrat, alice } from "./ui/fonts";

import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-10 ">
      <div className="flex relative justify-between">
        <div className="custom-color-1 flex gap-4 flex-col justify-center">
          <div className=" flex gap-4 flex-col ">
            <h1 className={`${alice.className} antialiased text-5xl`}>
              Personal Portfolio
            </h1>
            <p className="font-semibold text-2xl">Hanh Nhi Ngo</p>
            <p className="font-medium text-xl">
              Class President at Marie Curie Hanoi School
            </p>
          </div>
          <div className="flex gap-4">
            <div className="border p-4 rounded-lg">More about me</div>
            <div className="border p-4 rounded-lg">My resume</div>
          </div>
        </div>
        <div className="relative -top-10 right-5">
          <Image
            src={"/about1.png"}
            width={500} // Desired width of the image
            height={300} // Desired height of the image
            alt="me 1"
          />
        </div>
      </div>
      <div className="flex ">
        <div>
          <Image
            src={"/about2.png"}
            width={500} // Desired width of the image
            height={300} // Desired height of the image
            alt="me 2"
          />
        </div>
        <div className="flex flex-col justify-center max-w-sm md:max-w-lg lg:max-w-xl mx-auto p-6 gap-4">
          <h2 className={`${alice.className} text-3xl custom-color-1`}>
            Hi! Welcome to my personal portfolio.
          </h2>
          <p className={`${montserrat.className} text-gray-200 text-xl leading-relaxed`}>
            I am currently a senior at Marie Curie Hanoi School. My passions lie
            in both science and art, and I also write a blog where I share my
            enthusiasm for the History of Human Civilization, demonology, and
            mythology. While these aspects may seem opposing, I have found a
            correlation between them that has fueled my determination to explore
            these mysteries. That’s why I founded Southeast Asia NeuroArts
            Foundation, where you can find a community dedicated to the
            intersection of art, science and the mind, creating new pathways for
            innovation and helping other disadvantaged people.
          </p>
        </div>
      </div>
    </div>
  );
}
