"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export function AddButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <div>
      <Button
        type="submit"
        aria-disabled={pending}
        disabled={pending}
        isLoading={pending}
        variant="flat"
        fullWidth
        className="font-bold"
        color="primary"
      >
        {text}
      </Button>
    </div>
  );
}
