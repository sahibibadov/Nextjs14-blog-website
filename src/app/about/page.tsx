import Countup from "@/components/count-up";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
	title: "About Page",
	description: "About description",
};

const About = () => {
	return (
		<section className="flex flex-col md:flex-row gap-4 ">
			{/* title */}
			<div className="flex-1 flex flex-col gap-6 md:mt-10">
				<h2 className="text-xl md:text-2xl text-primary font-semibold text-center md:text-start">
					ABout Blog Page
				</h2>
				<h1 className="text-3xl md:text-5xl font-bold text-center md:text-start">
					Web Technologies: Powerful Trends Shaping the Digital World
				</h1>
				<p className="text-gray-500 dark:text-gray-400 leading-7 text-center md:text-start">
					Discover and learn! This blog serves as a resource for developers
					eager to explore the beauties and intricacies of building web pages
					using React, Next.js, and JavaScript technologies. Stay ahead with the
					latest trends, optimize performance, and design impressive user
					experiences. Accelerate your projects using the powerful combination
					of React and Next.js.
				</p>
				{/* number  */}
				<div className="flex items-center justify-center md:justify-start gap-5">
					{/* count up */}
					<div className="flex flex-col items-center md:items-start">
						<div className="text-primary text-2xl font-semibold mb-1 ">
							<Countup
								enableScrollSpy
								start={1}
								end={10}
								duration={3}
								delay={0}
							/>{" "}
							K+
						</div>
						<p className="text-gray-500 dark:text-gray-400">
							Year of experience
						</p>
					</div>
					{/* count up */}
					<div className="flex flex-col items-center md:items-start">
						<div className="text-primary text-2xl font-semibold  mb-1">
							<Countup
								enableScrollSpy
								start={50}
								end={150}
								duration={5}
								delay={0}
							/>{" "}
							K+
						</div>
						<p className="text-gray-500 dark:text-gray-400">People reached</p>
					</div>
				</div>
			</div>
			{/* image */}
			<div className="flex-1 flex justify-center md:self-start md:justify-end ">
				<Image src="/about.svg" alt="about" width={500} height={500} />
			</div>
		</section>
	);
};

export default About;
