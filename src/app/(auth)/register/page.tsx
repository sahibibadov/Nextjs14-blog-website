import RegisterForm from "@/components/auth-ui/registerForm/registerForm";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Register Page",
	description: "Register description",
};
const Register = () => {
	return (
		<div className="flex-1 flex items-center justify-center">
			<div className="max-w-md flex flex-col gap-4 rounded-2xl bg-white/5 backdrop-blur-sm py-2 px-3 border dark:border-default-200 shadow-md dark:shadow-default-100 w-full">
				<h2 className="text-3xl mt-3 font-bold text-primary">Register</h2>
				<RegisterForm />
			</div>
		</div>
	);
};

export default Register;
