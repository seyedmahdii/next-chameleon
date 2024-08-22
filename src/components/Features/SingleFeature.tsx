import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
	const { icon, title } = feature;
	return (
		<div className="w-full">
			<div className="wow fadeInUp flex flex-col items-center" data-wow-delay=".15s">
				<div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
					{icon}
				</div>
				<h3 className="mb-5 text-xl font-bold text-[--title-color] sm:text-2xl lg:text-xl xl:text-2xl">
					{title}
				</h3>
			</div>
		</div>
	);
};

export default SingleFeature;
