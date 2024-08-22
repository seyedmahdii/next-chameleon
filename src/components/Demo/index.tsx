import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { changeLiveTheme } from "@/utils/changeTheme";

const Demo = () => {
	const [primaryColor, setPrimaryColor] = useState("#39FE46");
	const [secondaryColor, setSecondaryColor] = useState("#9EFFA5");

	return (
		<>
			<section id="demo" className="py-16 md:py-20">
				<div className="container">
					<SectionTitle
						title="همه چیز تحت کنترل شماست"
						paragraph="به جزئی‌ترین عناصر رنگی خود کنترل داشته باشید."
						center
						mb="60px"
					/>

					<div>
						<div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
							<div className="flex flex-col">
								<label htmlFor="primaryColor" className="text-[--title-color] text-xl">
									رنگ اصلی:
								</label>
								<input
									type="color"
									id="primaryColor"
									name="primaryColor"
									value={primaryColor}
									className="h-20 w-full rounded-md"
									onChange={(e) => setPrimaryColor(e.target.value)}
								/>
							</div>
							<div className="flex flex-col">
								<label htmlFor="secondaryColor" className="text-[--title-color] text-xl">
									رنگ فرعی:
								</label>
								<input
									type="color"
									id="secondaryColor"
									name="secondaryColor"
									value={secondaryColor}
									className="h-20 w-full rounded-md"
									onChange={(e) => setSecondaryColor(e.target.value)}
								/>
							</div>
						</div>
						<div className="flex justify-center mt-12">
							<button onClick={() => changeLiveTheme(primaryColor, secondaryColor)}>
								اعمال تغییرات
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Demo;
