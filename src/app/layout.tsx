import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "./ui/nav";
import { montserrat } from "./ui/fonts";
import ScrollToTop from "./ui/scrollToTop";

export const metadata: Metadata = {
  title: "Hanh Nhi Portolio",
  description: "You can know more about me using this website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-cover bg-center`}>
        <div className="mx-auto w-[1280px]  min-h-screen">
          <Nav />
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
