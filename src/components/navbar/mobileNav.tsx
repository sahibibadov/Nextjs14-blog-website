"use client";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import CustomDrawer from "../ui/drawwer";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import Links from "./links";
import { cn } from "@/lib/utils";

const MobileNav = ({ session }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* hamburger icon */}
      <Button
        variant="light"
        className={cn("w-6 h-6 min-w-0 p-0 md:hidden rounded-full")}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
      </Button>
      {/* drawwer */}
      <CustomDrawer isOpen={open} onOpenChange={() => setOpen((prev) => !prev)}>
        <div className="py-6 px-2 h-full flex flex-col justify-center items-center gap-8 text-2xl">
          {/* linkler */}
          <Links setOpen={setOpen} isAdmin={session?.user?.isAdmin} />
        </div>
      </CustomDrawer>
    </>
  );
};

export default MobileNav;
