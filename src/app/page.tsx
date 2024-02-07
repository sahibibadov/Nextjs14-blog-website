import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row  gap-4">
      {/* title */}
      <div className="flex-1 flex flex-col justify-center  items-center gap-4 md:gap-10">
        <h1 className="text-4xl md:text-7xl font-bold text-center md:text-start">
          Create Thougts Agency
        </h1>
        <p className="text-gray-500 dark:text-gray-400 leading-7 text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolor,
          quo provident laborum doloremque blanditiis tenetur, similique
          exercitationem delectus excepturi sapiente quod voluptates neque earum
          repellendus maiores repudiandae ad veritatis!
        </p>
        {/* buttons */}
        <div className="flex gap-4 md:self-baseline">
          <Button variant="bordered">Learn more</Button>
          <Button variant="flat" as={Link} href="/contact">
            Contact
          </Button>
        </div>
      </div>

      {/* image */}
      <div className="flex-1 flex justify-center md:justify-end ">
        <Image src="/home.svg" alt="homegif" width={500} height={500} />
      </div>
    </section>
  );
}
