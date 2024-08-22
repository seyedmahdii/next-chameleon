"use client";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";

export default function Home() {
	return (
		<div className="h-[1500px]">
			<Header />
			<Hero />
			<Features />
		</div>
	);
}
