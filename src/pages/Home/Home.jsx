import Banner from "./Banner";
import Category from "./Category";
import FeaturedMenu from "./FeaturedMenu";
import PopularMenu from "./PopularMenu";
import Recommends from "./Recommends";
import ServicesSection from "./ServicesSection";
import Testimonials from "./Testimonials";

const Home = () => {
	return (
		<main>
			<Banner />
			<Category />
			<ServicesSection />
			<PopularMenu />
			<section className="py-10">
				<div className="w-full py-20 bg-black">
					<h2 className="text-5xl font-bold text-center">
						Call Us: +88 01608451204
					</h2>
				</div>
			</section>
			<Recommends />
			<FeaturedMenu />
			<Testimonials />
		</main>
	);
};

export default Home;
