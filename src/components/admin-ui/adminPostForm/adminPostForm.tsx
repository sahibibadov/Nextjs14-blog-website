"use client";

import { addPost } from "@/lib/actions";
import { Input, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { AddButton } from "../addButton";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const AdminPostForm = ({ userId }: { userId: string | undefined }) => {
  const ref = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(addPost, undefined);

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
    if (state?.success) {
      toast.success(state?.success);
      ref.current?.reset();
    }
  }, [state]);
  return (
    <form ref={ref} action={formAction} className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-primary">Add new post</h3>
      <input type="hidden" name="userId" value={userId} />
      <Input
        variant="faded"
        color="primary"
        size="sm"
        type="text"
        name="title"
        placeholder="Title"
      />
      <Input
        variant="faded"
        color="primary"
        size="sm"
        type="text"
        name="slug"
        placeholder="Slug"
      />
      <Input
        variant="faded"
        color="primary"
        size="sm"
        type="text"
        name="img"
        placeholder="Img"
      />
      <Textarea
        variant="faded"
        color="primary"
        size="sm"
        name="desc"
        minRows={5}
        maxRows={5}
        placeholder="Desc"
      />
      {state?.error && <p className="text-red-500">{state.error}</p>}
      <AddButton text="Add post" />
    </form>
  );
};

export default AdminPostForm;
