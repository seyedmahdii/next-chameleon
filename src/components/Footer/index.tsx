"use client";

import HeartIcon from "./HeartIcon";

const Footer = () => {
	return (
		<>
			<footer
				className="wow fadeInUp relative z-10 bg-[--footer-background-color]"
				data-wow-delay=".1s"
			>
				<div className="container">
					<div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
					<p className="text-center text-base text-[--title-color] py-8 flex items-center justify-center gap-1">
						توسعه داده شده با
						<HeartIcon /> توسط آقا مهدی
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
