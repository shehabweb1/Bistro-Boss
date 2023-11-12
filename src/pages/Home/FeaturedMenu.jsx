import featuredImg from "../../assets/home/featured.jpg";
import SectionHeader from "../shared/SectionHeader";

const FeaturedMenu = () => {
	const featuredBg = {
		backgroundImage: `url(${featuredImg})`,
	};
	return (
		<section className="py-10">
			<div className="w-full bg-cover bg-center bg-fixed" style={featuredBg}>
				<div className="py-10 w-full h-full bg-black bg-opacity-70">
					<SectionHeader
						heading={"FROM OUR MENU"}
						subHeading={"Check it out"}
					/>
					<div className="w-4/6 mx-auto grid grid-cols-2 z-10 items-center gap-10">
						<img src={featuredImg} alt="featuredImg" />
						<div className="text-white">
							<h4 className="text-lg">March 20, 2023</h4>
							<h3 className="text-xl uppercase font-semibold">
								WHERE CAN I GET SOME?
							</h3>
							<p className="my-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
								voluptate facere, deserunt dolores maiores quod nobis quas
								quasi. Eaque repellat recusandae ad laudantium tempore
								consequatur consequuntur omnis ullam maxime tenetur.
							</p>
							<button className="btn btn-outline border-b-4 text-white block mx-auto">
								Read More
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedMenu;
