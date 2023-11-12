import { Parallax } from "react-parallax";

const Hero = ({ heroImg, title }) => {
	return (
		<Parallax
			blur={{ min: -30, max: 30 }}
			bgImage={heroImg}
			bgImageAlt="Menu Hero Section"
		>
			<div className="w-full pt-[200px] pb-[120px]">
				<div className="py-[100px] w-4/6 mx-auto bg-black bg-opacity-50 text-white">
					<h1 className="text-7xl text-center font-semibold uppercase mb-3">
						{title}
					</h1>
					<p className="text-lg text-center uppercase">
						Would you like to try a dish?
					</p>
				</div>
			</div>
		</Parallax>
	);
};

export default Hero;
