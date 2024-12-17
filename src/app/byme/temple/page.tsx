import Paragraph from "@/app/ui/paragraph";
import Backheader from "@/app/ui/backHeader";
import Image from "next/image";

export default function temple() {
  return (
    <div className="temple flex flex-col min-h-screen my-20 items-start text-gray-200">
      <Backheader text="the Temple of Literature" href="/byme" />
      <div className="px-20 flex flex-col gap-6">
        <div>
          <Paragraph
            text="Passionately mesmerized by the History of Humans; especially Vietnamese history, my best friend Nhat Quang and I visited the Temple of Literature – Quoc Tu Giam to take photos and learn more about the civilization of our country. With a satisfying trip, I wrote a blog to share about the Temple of Literature – Quoc Tu Giam, where the pride in the Vietnamese tradition of valuing education."
            customClass="custom-color-1"></Paragraph>
          <Paragraph text="This sacred place is a complex consisting of the Temple of Literature and Quoc Tu Giam. This site is dedicated to Confucius, the great philosophers of Confucianism, Chu Van An, the principal of Quoc Tu Giam and a model teacher with high virtue and moral integrity in Vietnam's education system, as well as the kings who contributed to the establishment and development of this place. Quoc Tu Giam was established right after the Temple of Literature, initially serving as a school for the princes. Later, the children of the court officials were also chosen to study here, and eventually, it expanded to accept outstanding students from all over the country. This was the first university in Vietnam."></Paragraph>
        </div>
        <div>
          <div className="custom-color-1 leading-10 text-xl p-4">
            <ul>
              <li className="custom-dot">Nhap Dao</li>
            </ul>
          </div>
          <div className="flex p-4  gap-4 justify-between">
            <Image
              src={"/temple1.png"}
              alt="temple 1"
              width={500}
              height={500}
            />
            <Image
              src={"/temple2.png"}
              alt="temple 2"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Paragraph text="Nhap Dao is the first area of the inner temple complex. The first lesson that students (Nho sinh) must learn is the way of being a good person, and only after that do they study knowledge, with the goal of becoming someone who is both virtuous and talented. This architectural feature was added in the 19th century during the Nguyen Dynasty. The garden is designed symmetrically along a central vertical axis, similar to the four other areas of the inner temple. In the center of the Nhập Đạo area is the Hoàng đạo road, a road once reserved for the king and officials, while on either side are two Linh đạo roads, designated for common people and students. The area also features two ponds and many trees, giving the garden a dignified and refreshing appearance."></Paragraph>
          </div>
        </div>

        <div>
          <div className="custom-color-1 leading-10 text-xl p-4">
            <ul>
              <li className="custom-dot">Khue Van Cac</li>
            </ul>
          </div>
          <div className="flex gap-4 p-4">
            <div className=" w-full">
              <Image
                src={"/temple3.png"}
                alt="temple 3"
                width={714}
                height={540}
              />
            </div>
            <Paragraph
              customClass="w-1/2 p-0"
              text='From the Dai Trung Gate, follow the brick-paved path to reach Khue Van Cac. The name "Khue Van Cac" means "Pavilion of the Beauty of the Khue Star" and was built in 1805 during the reign of Emperor Gia Long. Khue Van Cac is also the most iconic image, deeply etched in the minds of the Vietnamese people whenever they think of the Temple of Literature - Quoc Tu Giam. Choosing Khue Van Cac as the symbol of Hanoi is a way to honor and promote the tradition of cultural heritage and the spirit of learning among the Vietnamese people, reflecting the vision of education in the present day.'></Paragraph>
          </div>
          <Paragraph
            customClass="p-0 px-4"
            text="Khue Van Cac is an architectural structure that, though not grand, is proportionally harmonious and beautiful."></Paragraph>
          <Paragraph text='The Khue Van Pavilion represents modesty, with symmetrical, simple, and graceful architecture featuring two stories and eight roofs. The upper floor is constructed with wood, and each corner is adorned with wooden balustrades. The roof tiles are supported by simple, elegant, and sturdy wooden beams. Khue Van Cac has four sides, each with a round window framed by small wooden slats that radiate outward. The round windows and wooden balustrades symbolize the Khue Star shining brightly. On the main facade, just beneath the roof, a sign is displayed with the three words "Khue Van Cac" painted in red and gilded.'></Paragraph>
          <Paragraph text="On each of the four sides, there is an engraved pair of gold-embossed Chinese couplets. These couplets are full of meaning, roughly translated as follows:"></Paragraph>
          <ul className="text-base list-disc pl-8">
            <li>
              &quot;The Khuê Star illuminates the sky, civilization spreads wide
              - The Bich River deepens in spring, the vein of virtue runs
              long.&quot;
            </li>
            <li>
              &quot;Our dynasty adorns the state with governance - The pavilion
              welcomes visitors to enjoy the literary beauty.&quot;
            </li>
            <li>
              &quot;The Big Dipper shines on the city with good fortune – The
              autumn pond reflects the moonlight, evoking ancient
              thoughts.&quot;
            </li>
            <li>
              &quot;The waters of rituals and propriety flow for a thousand
              years of culture – The library preserves the wisdom of the
              sages.&quot;
            </li>
          </ul>
          <Paragraph text="Khue Van Cac features an ancient pavilion architecture, small and simple, which is very typical of Vietnamese culture. On both sides of the pavilion are the Bi Van Mon and Suc Van Mon gates, leading to two houses containing the Doctoral Steles. The Khue Van Pavilion was originally used for reviewing and judging the best essays from the scholars who passed the royal exams. Though small and simply constructed, the pavilion is elegant, especially as it is set among tall, lush trees next to the clear, reflective Thien Quang well, which mirrors the pavilion's image."></Paragraph>
        </div>

        <div>
          <div className="custom-color-1 leading-10 text-xl p-4">
            <ul>
              <li className="custom-dot">Thien Quan Tinh</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <Image
              src={"/temple4.png"}
              alt="temple 4"
              width={714}
              height={510}
              className="aspect-[714/510]"></Image>
            <Paragraph
              customClass="text-base p-0"
              text='The "Thien Quang" Well, also known as "Thien Quang Tinh," means "the well that reflects the light of the sky." By naming the well this way, the builders intended to symbolize that humans can absorb the essence of the universe, illuminate knowledge, enhance their character, and beautify humanistic values. The well is square in shape, with a railing built around the edge up to waist height. The ancient people believed that a square well represented the earth, while the round door of the Khue Van Pavilion symbolized the sky. The essence of both heaven and earth is concentrated here, at the heart of a cultural and educational center, in the midst of the imperial capital.'></Paragraph>
          </div>
        </div>
        <div>
          <div className="custom-color-1 leading-10 text-xl p-4">
            <ul>
              <li className="custom-dot">The 82 doctoral stelae</li>
            </ul>
          </div>
          <Image
            src={"/temple5.png"}
            alt="temple 5"
            width={1120}
            height={680}></Image>
          <Paragraph
            customClass="p-0 py-4"
            text="The idea of erecting stelae to record the names of successful doctoral candidates originated with Emperor Le Thanh Tong, a ruler who was deeply learned, widely knowledgeable, and highly concerned about the prosperity of the country and the nation's culture. He placed great importance on the imperial examinations and valued talented individuals. Recognizing the need to honor talent in order to encourage learning among the people, especially among students who played a crucial role in the country’s development, the emperor issued an edict in 1484 to create stelae starting from the 1442 examination, and this practice began from that year."></Paragraph>
          <Paragraph
            customClass="p-0 py-4"
            text="To have their names inscribed on the stelae placed here with great respect, scholars had to study diligently, devote themselves to Confucian texts, spend at least 10 years in study, and pass four rounds of examinations. The first was a local examination, and those who passed would proceed to the Huong examination."></Paragraph>
          <Paragraph
            customClass="p-0 py-4"
            text="Under the Le Dynasty, the Huong examination was held by the court every three years, with candidates from different regions participating at a location designated by the court. The examination sites were sometimes open fields or recently harvested rice paddies, so candidates had to bring tents and benches for the examination. Scholars had to clearly state their hometown, their name, the Confucian texts they had studied, and their ancestors' positions. Actors from traditional performance troupes and those with a bad reputation, including traitors and corrupt officials, along with their descendants, were not allowed to take the exams. If someone brought books or hired someone to assist them, they would be punished according to the law."></Paragraph>

          <Paragraph
            customClass="p-0 py-4"
            text='The oldest stela here was erected in 1484 for the 1442 examination. The inscription includes a passage that reads: "Talented people are the vital force of the nation. When the vital force is strong, the country is strong and prosperous; when the vital force is weak, the country declines and weakens. Therefore, all great emperors and wise kings have always worked to cultivate talent and strengthen the vital force." This is regarded as a declaration on education that was relevant not only in ancient times but remains true in all eras, especially today, when the development and protection of the nation rely on intellect, science, and technology.'></Paragraph>

          <Paragraph
            customClass="p-0 py-4"
            text="The 82 doctoral stelae at the Temple of Literature – Quoc Tu Giam have been recognized by UNESCO as Documentary Heritage and included in the Memory of the World Register. This recognition shows that the Temple of Literature – Quoc Tu Giam is not only a valuable asset to Hanoi and Vietnam but has also become a cultural heritage of humanity."></Paragraph>
        </div>
        <div>
          <div className="custom-color-1 leading-10 text-xl p-4">
            <ul>
              <li className="custom-dot">
                The statue of the teacher Chu Van An
              </li>
            </ul>
          </div>
          <Image
            src={"/temple6.png"}
            alt="temple 6"
            width={1120}
            height={680}></Image>
          <Paragraph
            customClass="p-0 py-4"
            text="The statue of the teacher Chu Van An is made of bronze and is seated in a posture with both legs resting evenly in front, the right hand holding a fan, and the left hand naturally resting on the knee. Chu Văn An wears a flat hat that fits closely to his head, with a jewel attached to the front. His face is well-proportioned, with a high forehead and bright eyes that radiate a sense of integrity. The statue sits on a chair with dragon-shaped armrests, and behind it is a backrest with a design resembling a fan spreading out like a halo. The statue is placed on a square pedestal, standing 2.3 meters tall and weighing 3 tons, including the base. Above the statue is a large horizontal plaque with three Chinese characters: 傳 經 正 學 (Truyen kinh chinh hoc), which highlights Chu Văn An’s significant contribution to Vietnamese education: he was the one who imparted the true teachings to the nation. On both sides of the statue are two couplets that further describe Chu Van An's character and career."></Paragraph>
          <Paragraph
            customClass="p-0 py-4"
            text="博 於 史 窮 於 經 聖 道 淵 源 開 後 學"></Paragraph>
          <Paragraph
            customClass="p-0 py-4"
            text="行 以 禮 藏 以 義 賢 人 風 節 绍 先 儒"></Paragraph>
          <Paragraph
            customClass="p-0 py-4"
            text="The translation is:"></Paragraph>
          <Paragraph
            customClass="p-0 py-4"
            text='"Well-versed in history, deeply knowledgeable in the classics, he
          opened the profound source of the holy path for future scholars. He
          practiced with礼 (propriety), concealed with义 (righteousness), a sage
          with noble character, following the footsteps of the ancient Confucian
          scholars."'></Paragraph>
          <Paragraph
            customClass="p-0 py-4"
            text="This translation reflects his broad understanding of history and his dedication to spreading the sacred teachings for future generations. As a public official, he adhered to the principles of 礼 (ritual propriety), and in retirement, he lived according to义 (righteousness), maintaining the noble moral integrity of a sage, following the exemplary scholars of the past."></Paragraph>
          <Paragraph
            customClass="p-0 py-4"
            text="The statue of Chu Van An at the Temple of Literature – Quoc Tu Giam is now placed in the center of the Hau Duong (Rear Hall), which showcases the history of education and imperial examinations. It is a place where thousands of people come every day to offer incense in remembrance and learn about the educational legacy of their ancestors. This is an act of respect and reverence from the current generation, and it serves to inspire others to admire and follow the example set by this great teacher. It is believed that all generations of Vietnamese people, as well as visitors from around the world, will always respect and honor the teacher with high virtue and moral integrity. From this, they will find the strength to strive for success and personal growth by following in the footsteps of the great predecessors. Chu Văn An, a quintessential teacher of Vietnamese education, is closely connected with the establishment and development of the Temple of Literature – Quoc Tu Giam, which honors and venerates him as a symbol of Vietnam's educational tradition."></Paragraph>
        </div>

        <div>
          <div className="custom-color-1 leading-10 text-xl p-4">
            <ul>
              <li className="custom-dot">The Dong Son drum</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <Image
              src={"/temple7.png"}
              alt="trong dong dong son"
              width={714}
              height={410}></Image>
            <Paragraph text="The Dong Son drum originates from Vietnam and is a typical drum of the Dong Son culture (from the 7th century BCE to the 1st-2nd century CE) and the Red River civilization of the ancient Vietnamese during the period of the Hung Kings establishing the Van Lang nation. The Dong Son drum has become a sacred symbol of the Vietnamese people."></Paragraph>
          </div>
        </div>

        <div>
          <div className="custom-color-1 leading-10 text-xl p-4">
            <ul>
              <li className="custom-dot">Other image materials</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              "/temple8.png",
              "/temple9.png",
              "/temple10.png",
              "/temple11.png",
              "/temple12.png",
              "/temple13.png",
              "/temple14.png",
              "/temple15.png",
              "/temple16.png",
            ].map((image) => {
              return (
                <Image
                  key={image}
                  src={image}
                  alt="image list"
                  width={300}
                  height={300}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
