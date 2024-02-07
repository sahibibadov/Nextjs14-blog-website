import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center flex flex-col gap-5">
      <h2 className="text-7xl text-primary font-bold">Not Found</h2>
      <p className="text-default-500">Could not find requested resource</p>
      <Button
        className="text-primary font-semibold max-w-36 mx-auto"
        variant="faded"
        as={Link}
        href="/"
      >
        Return Home
      </Button>
    </div>
  );
}
