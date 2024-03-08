import Link from "next/link";
import {
	Navbar as NextNavbar,
	NavbarBrand,
	NavbarContent,
	Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../themeButton";
import Links from "./links";
import MobileNav from "./mobileNav";
import { auth } from "@/lib/auth";
import { handleLogout } from "@/lib/actions";
import Image from "next/image";

export default async function Navbar() {
	const session: any = await auth();

	// console.log("session", session);

	return (
		<NextNavbar
			maxWidth="xl"
			className="shadow-md dark:shadow-white/10 [&>header]:max-md:px-3 [&>header]:max-md:gap-2"
		>
			{/* logo */}
			<NavbarBrand>
				<Image
					src="/logo.svg"
					alt="logo"
					width={80}
					height={60}
					className="w-[80px] h-[60px]"
					priority={true}
				/>
			</NavbarBrand>
			{/* links */}
			<NavbarContent className="hidden md:flex gap-4" justify="center">
				<Links isAdmin={session?.user?.isAdmin} />
			</NavbarContent>
			{/* login | user */}
			<NavbarContent justify="end">
				{session?.user ? (
					<form action={handleLogout}>
						<Button type="submit" variant="flat">
							Log out
						</Button>
					</form>
				) : (
					<Button as={Link} href="/login" variant="flat">
						Login
					</Button>
				)}
			</NavbarContent>
			{/* them button */}
			<ThemeSwitcher />

			{/* mobile nav */}
			<MobileNav session={session} />
		</NextNavbar>
	);
}
