import LoginForm from "@/components/auth-ui/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/actions";
import { Button } from "@nextui-org/react";
import { RxGithubLogo } from "react-icons/rx";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login Page",
  description: "Login description",
};
const Login = async () => {
  return (
    <div className="max-w-md flex flex-col gap-4 rounded-2xl bg-white/5 backdrop-blur-md py-2 px-3 border dark:border-default-200 shadow-md dark:shadow-default-100 w-full">
      <h2 className="text-3xl mt-3 font-bold text-primary">Login</h2>
      <form action={handleGithubLogin}>
        <Button fullWidth type="submit" className="font-semibold">
          <RxGithubLogo className="mr-1" size={24} /> Github
        </Button>
      </form>
      <LoginForm />
    </div>
  );
};

export default Login;
