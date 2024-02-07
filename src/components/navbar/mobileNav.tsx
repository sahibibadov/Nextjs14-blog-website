"use client";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import CustomDrawer from "../ui/drawwer";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import Links from "./links";
import Link from "next/link";

const MobileNav = ({ session }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* hamburger icon */}
      <Button
        isIconOnly
        variant="light"
        className="flex md:hidden rounded-full"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
      </Button>
      {/* drawwer */}
      <CustomDrawer isOpen={open} onOpenChange={() => setOpen((prev) => !prev)}>
        <div className="py-6 px-2 h-full flex flex-col justify-center items-center gap-8 text-2xl">
          {/* linkler */}
          <Links setOpen={setOpen} isAdmin={session?.user?.isAdmin} />

          {/* login | user */}
          {session?.user ? (
            <Button variant="flat" href="">
              Log out
            </Button>
          ) : (
            <div className="flex gap-3">
              <Button as={Link} href="/login" variant="ghost">
                Login
              </Button>
              <Button as={Link} href="/register" variant="flat">
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </CustomDrawer>
    </>
  );
};

export default MobileNav;
