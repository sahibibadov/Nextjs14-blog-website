import { Button, Input, Textarea } from "@nextui-org/react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact description",
};
const Contact = () => {
  return (
    <section className="flex flex-col  md:flex-row gap-4 w-full mb-10 md:mb-0">
      {/* image */}
      <div className="flex-1 flex justify-center md:justify-start ">
        <Image src="/contactgif.svg" alt="contact" width={500} height={500} />
      </div>
      {/* form */}
      <div className="flex-1 flex items-center w-full">
        <form action="" className="flex flex-col gap-4 w-full">
          <Input
            type="text"
            label="Name"
            variant="faded"
            color="primary"
            isRequired
            size="sm"
          />
          <Input
            type="email"
            label="Email"
            variant="faded"
            color="primary"
            isRequired
            size="sm"
          />
          <Input type="text" label="Phone" variant="faded" color="primary" />
          <Textarea
            label="Message"
            variant="faded"
            color="primary"
            minRows={5}
            maxRows={5}
            size="sm"
          />
          <Button
            color="primary"
            variant="flat"
            className="mt-2 font-semibold text-lg"
            fullWidth
            type="submit"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
