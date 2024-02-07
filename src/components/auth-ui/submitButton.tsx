"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <div>
      <Button
        type="submit"
        aria-disabled={pending}
        disabled={pending}
        isLoading={pending}
        fullWidth
        className="font-bold"
        color="primary"
      >
        {text}
      </Button>
    </div>
  );
}
