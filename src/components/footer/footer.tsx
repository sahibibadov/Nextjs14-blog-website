import Link from "next/link";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black px-6 py-6 shadow-[0px_0px_19px_3px_#00000024] dark:shadow-[0px_0px_19px_3px_#64646458]">
      <div className="max-w-7xl  mx-auto flex justify-center items-center gap-10">
        <div className="flex gap-6">
          <Link target="_blank" href="https://github.com/sahibibadov">
            <RxGithubLogo
              size={24}
              className="cursor-pointer hover:text-primary transition-all"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/sahibibadov/
"
          >
            <RxLinkedinLogo
              size={24}
              className="cursor-pointer hover:text-primary transition-all"
            />
          </Link>
        </div>
        <p className=" text-gray-700 dark:text-gray-400">
          Sahib Ibadov © All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
