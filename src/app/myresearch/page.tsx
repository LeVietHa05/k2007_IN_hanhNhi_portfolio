import Link from "next/link";
import Image from "next/image";
import Paragraph from "../ui/paragraph";

export default function myresearch() {
  return (
    <div className="mt-20 px-20">
      <Link
        href={"https://www.the-iyrc.org/summerprogram2024.html"}
        className="custom-color-1 underline font-semibold leading-8 text-2xl">
        The Medicine and Research Summer Program - Columbia University
      </Link>
      <p className="leading-9 mt-4 text-gray-200 text-xl">
        I am very honored to participate in Columbia Medicine & Summer Program
        for global students, where I had a chance to connect with like-minded
        peers and prestigious professors. I felt grateful that students and
        advisors from the program have helped me in founding Southeast Asia
        NeuroArts Foundation, an organization pioneers in Southeast Asia in the
        intersection of neuroscience and art, connecting enthusiasts, promoting
        international initiatives, and addressing challenges in neurological
        health for the community. During the program, I conducted an independent
        research{" "}
        <b className="custom-color-1">
          {" "}
          &apos;A study on Ebola virus persistence and recurrence of disease in
          the brains of nonhuman primate survivors treated with antibodies&apos;
        </b>{" "}
        under the supervision of Mr. Paul Lewis - Medical Student at Columbia
        University Vagelos College of Physicians and Surgeons.
      </p>
      <div className="flex justify-between gap-10 mt-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <Paragraph
            customClass="leading-9 text-2xl custom-color-1 font-semibold"
            text="Researcher & Co-Author, Ethyl acetate extract of Polyscias fruticosa accelerates neurite growth via upregulating nerve trophic factors "
          />
          <Paragraph
            customClass="leading-9 text-xl"
            text="From June 2023 to September 2024, I started working as a lab assistant for Dr. Nguyen Van Tru at Institute of Biotechnology of Vietnam Academy of Science and Technology.  Our research paper is currently under review of Annual Research & Review in Biology.  "
          />
        </div>
        <div className="w-[342px] shrink-0">
          <Image
            src={"/research1.png"}
            width={342}
            height={414}
            alt="research 1"
          />
        </div>
      </div>

      <div className="flex justify-between gap-10 mt-10 ">
        <Image
          src={"/research2.png"}
          width={540}
          height={380}
          alt="research 2"></Image>
        <Image
          src={"/research3.png"}
          width={540}
          height={380}
          alt="research 3"></Image>
      </div>
      <Paragraph
        customClass="leading-9 text-2xl custom-color-1 mt-10 font-semibold"
        text="Researcher & team leader, Evaluation of the Hepatoprotective Effects of Cleistocalyx Operculatus (Roxb.) Merr. et Perry Leaves Against the Impact of Ethanol on Albino Mice (Mus Musculus var. Albino)"
      />
      <p className="text-gray-200 text-xl leading-9 mt-3">
        Summer of 2024, I led a team of 4 members to design experiments, extract
        materials, and evaluate the liver enzymes, alcohol’s impacts, and the
        potential effects of materials.{" "}
        <Link
          className="custom-color-1 underline"
          href={
            "https://drive.google.com/file/d/19Ev7TuCFhl_n_ANwLrQA1oIvijlEvVSn/view"
          }>
          Find more about our team research.
        </Link>
      </p>
      <div className="mt-10">
        <p className="custom-color-1 text-2xl leading-9 font-semibold">
          Internship at
          <Link href={"https://klept.vn/"} className="underline">
            National Key Laboratory of Enzyme and Protein Technology
          </Link>
        </p>
        <p className="text-xl leading-9 text-gray-200 mt-2">
          I did an internship at National Key Laboratory of Enzyme and Protein
          Technology of VNU University of Science, Vietnam National University,
          Hanoi. I assisted Dr. Pham Thi Thu Huong in evaluating chemical
          compound effects on HeLa cervical cancer cells using toxicity assays,
          contributing to data collection, analysis, and efficacy determination.
          I also gained insights about real-time PCR with fluorescent dyes,
          analyzing threshold cycles (Ct) and drawing conclusions on DNA
          amplification in experimental samples. You can find my research report{" "}
          <Link
            className="underline custom-color-1"
            href={
              "https://docs.google.com/document/d/1V99PsmuheBI7UV3YJQhVI4cb6By_pqb3/edit"
            }>
            here.
          </Link>
        </p>
        <Paragraph
          customClass="text-2xl leading-9 font-semibold custom-color-1 mt-10"
          text="Researcher, Discover Mesoporous silica impregnated with polyamines as effectivesorbents for CO2 capture"></Paragraph>
        <p className="text-xl leading-9 text-gray-200 mt-3 mb-10">
          Summer 2023, I joined a team under the supervision of Associate
          Professor Dao Si Duc - Vice Dean of the Department of Chemistry, VNU
          University of Science, Vietnam National University, Hanoi to research
          optimized sorbents and develop an efficient method for mitigating
          global warming.{" "}
          <Link
            className="underline custom-color-1"
            href={
              "https://drive.google.com/file/d/1UT3JJMQzo34sXgQkij7-G1ZeMDnDyZWP/view"
            }>
            Find more about our team research.
          </Link>
        </p>
      </div>
    </div>
  );
}
