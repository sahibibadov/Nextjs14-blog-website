"use client";
import { useFormState } from "react-dom";
import { login } from "@/lib/actions";
import Link from "next/link";
import { SubmitButton } from "../submitButton";
import { Input } from "@nextui-org/react";
const LoginForm = () => {
  const [state, formActions] = useFormState(login, undefined);

  return (
    <form action={formActions} className="flex flex-col gap-6 my-3">
      <Input
        variant="faded"
        color="primary"
        size="sm"
        type="text"
        name="username"
        placeholder="username"
        required
        isRequired
      />

      <Input
        variant="faded"
        color="primary"
        size="sm"
        type="password"
        name="password"
        placeholder="password"
        required
        isRequired
      />

      <SubmitButton text="Login" />
      {state?.error && <p className="text-red-500">{state?.error}</p>}
      <Link href="/register" className="text-default-500  ">
        Dont have an account? <b className="text-primary ">Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
