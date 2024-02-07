"use client";
import { useFormState } from "react-dom";
import { register } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { SubmitButton } from "../submitButton";
import { Input } from "@nextui-org/react";
import toast from "react-hot-toast";
const RegisterForm = () => {
  const [state, formActions] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
    if (state?.success) {
      toast.success("Register Successful");
      router.push("/login");
    }
  }, [state?.success, router, state, state?.error]);

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
        type="email"
        name="email"
        placeholder="email"
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
      <Input
        variant="faded"
        color="primary"
        size="sm"
        type="password"
        name="passwordRepeat"
        placeholder="passwordRepeat"
        required
        isRequired
      />
      <SubmitButton text="Register" />
      {state?.error && <p className="text-red-500">{state.error}</p>}
      <Link href="/login" className="text-default-500  ">
        Already have an account? <b className="text-primary ">Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
