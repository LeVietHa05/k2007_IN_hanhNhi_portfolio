import { montserrat } from "./fonts";
import Link from "next/link";

export default function Backheader({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <div className="backheader border-b-2 w-full border-[#F5E2C4]">
      <div className="backheader__container flex justify-start items-center">
        <div className="backheader__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none">
            <path
              d="M20.0746 35.7868C20.3373 36.0347 20.6851 36.1725 21.0463 36.1718C21.4062 36.1749 21.7513 36.0289 21.9996 35.7684C22.2617 35.5131 22.4095 35.1627 22.4095 34.7968C22.4095 34.4309 22.2617 34.0805 21.9996 33.8251L11.5495 23.375H35.7867C36.5461 23.375 37.1617 22.7594 37.1617 22C37.1617 21.2406 36.5461 20.625 35.7867 20.625H11.5455L22.018 10.1201C22.28 9.86475 22.4278 9.51436 22.4278 9.14845C22.4278 8.78254 22.28 8.43214 22.018 8.17678C21.4811 7.64062 20.6115 7.64062 20.0746 8.17678L7.2413 21.0101C6.70513 21.5469 6.70513 22.4166 7.2413 22.9534L20.0746 35.7868Z"
              fill="#F5E2C4"
            />
          </svg>
        </div>
        <Link href={href}>
          <div
            className={`${montserrat.className} p-4 text-3xl custom-color-1`}>
            {text}
          </div>
        </Link>
      </div>
    </div>
  );
}
