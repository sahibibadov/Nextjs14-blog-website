"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, Dispatch, SetStateAction } from "react";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

type LinksProps = {
  isAdmin: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};
const Links: FC<LinksProps> = ({ isAdmin, setOpen }) => {
  const path = usePathname();
  return (
    <>
      {links.map((link, i) => {
        const isActive = path === link.path;
        return (
          <Link
            className={cn(
              "hover:text-primary transition-all",
              isActive && "text-primary"
            )}
            key={i}
            href={link.path}
            onClick={() => setOpen && setOpen(false)}
          >
            {link.title}
          </Link>
        );
      })}
      {isAdmin && (
        <Link
          href="/admin"
          className={cn(
            "hover:text-primary transition-all",
            path === "/admin" && "text-primary"
          )}
          onClick={() => setOpen && setOpen(false)}
        >
          Admin
        </Link>
      )}
    </>
  );
};

export default Links;
