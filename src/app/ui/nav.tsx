"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavProps {
  children?: React.ReactNode;
}

const links = [
  { name: "About me", href: "/" },
  { name: "By Hanh Nhi Ngo", href: "/byme" },
  { name: "Marie Curie Hanoi School", href: "/myschool" },
  { name: "My gallery", href: "/myimage" },
  { name: "Research", href: "/myresearch" },
];

export function Nav({ children }: NavProps) {
  const pathname = usePathname();
  return (
    <nav className="p-4 font-medium font-semibold fixed top-0 rounded-b-3xl custom-nav">
      <ul className="flex space-x-4">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("text-gray-400 hover:text-gray-100 p-3", {
                "custom-nav-active": pathname === link.href,
              })}>
              <p>{link.name}</p>
            </Link>
          );
        })}
        {/* Add more links as needed */}
      </ul>
      {children}
    </nav>
  );
}
