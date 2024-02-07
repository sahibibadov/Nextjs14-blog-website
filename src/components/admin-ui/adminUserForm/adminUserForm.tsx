"use client";

import { addUser } from "@/lib/actions";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { AddButton } from "../addButton";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  const ref = useRef<HTMLFormElement>(null);
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
      <h3 className="text-xl font-bold text-primary">Add new User</h3>

      <Input
        variant="faded"
        color="primary"
        size="sm"
        type="text"
        name="username"
        placeholder="username"
        required
      />
      <Input
        variant="faded"
        color="primary"
        size="sm"
        type="email"
        name="email"
        placeholder="email"
        required
      />
      <Input
        variant="faded"
        color="primary"
        size="sm"
        type="password"
        name="password"
        placeholder="password"
        required
      />
      <Input
        variant="faded"
        color="primary"
        size="sm"
        type="text"
        name="img"
        placeholder="img"
        required
      />

      <Select name="isAdmin" variant="faded" size="sm" label="Is Admin?">
        <SelectItem key="true" value="true">
          Yes
        </SelectItem>
        <SelectItem key="false" value="false">
          No
        </SelectItem>
      </Select>

      {state?.error && <p className="text-red-500">{state?.error}</p>}
      <AddButton text="Add user" />
    </form>
  );
};

export default AdminUserForm;
