"use client";

import { motion } from "framer-motion";

const Template = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.main
			className="px-3 md:px-6 max-w-7xl flex flex-1 mx-auto w-full py-4 md:py-10"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.main>
	);
};

export default Template;
