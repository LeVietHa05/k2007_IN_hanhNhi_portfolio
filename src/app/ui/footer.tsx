import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
      <footer className="w-[610px] h-[48px] px-4 py-2 flex items-center justify-between rounded-lg bg-white/30 backdrop-blur-sm text-gray-50
        fixed bottom-4 left-1/2 -translate-x-1/2
    ">
      <div className="flex justify-between items-center shirnk-0 gap-2">
        <Image
          src={"/_Instagram.png"}
          width={24}
          height={24}
          alt="insta"></Image>
        <Link
          href={
            "https://www.instagram.com/_nhn.hnn_/profilecard/?igsh=MWgyZTJ1bzNxZWk4OA=="
          }
          className="underline">
          _nhn.hnn_
        </Link>
      </div>
      <div className="w-[2px] h-[32px] bg-gray-500 rounded"></div>
      <div className="flex justify-between items-center shirnk-0 gap-2">
        <Image
          src={"/_Facebook.png"}
          width={24}
          height={24}
          alt="facebook"></Image>
        <Link
          href={"https://www.facebook.com/hanhnhi.ngo.503?mibextid=ZbWKwL"}
          className="underline">
          hanhnhi.ngo
        </Link>
      </div>
      <div className="w-[2px] h-[32px] bg-gray-500 rounded"></div>
      <div className="flex justify-between items-center shirnk-0 gap-2">
        <Image
          src={"/_Google.png"}
          width={24}
          height={24}
          alt="facebook"></Image>
        <div>hanhnhingo07@gmail.com</div>
      </div>
    </footer>
  );
}
