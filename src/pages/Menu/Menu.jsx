import { Helmet } from "react-helmet-async";
import Hero from "../shared/Hero";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../shared/MenuItem";
import MenuCategory from "./MenuCategory";

import bannerImg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import SectionHeader from "../shared/SectionHeader";

const Menu = () => {
	const [menu] = useMenu();
	const offered = menu.filter((item) => item.category === "offered");
	const dessert = menu.filter((item) => item.category === "dessert");
	const pizza = menu.filter((item) => item.category === "pizza");
	const salad = menu.filter((item) => item.category === "salad");
	const soup = menu.filter((item) => item.category === "soup");

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Menu</title>
			</Helmet>
			<main>
				<Hero heroImg={bannerImg} title="OUR MENU" />
				<section className="py-10">
					<SectionHeader heading="TODAY'S OFFER" subHeading="Don't miss" />
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
						{offered.map((item) => (
							<MenuItem key={item._id} item={item} />
						))}
					</div>
					<button className="btn btn-outline border-0 border-b-4 block mx-auto">
						ORDER YOUR FAVOURITE FOOD
					</button>
				</section>
				<MenuCategory items={dessert} bannerImg={dessertBg} title="dessert" />
				<MenuCategory items={pizza} bannerImg={pizzaBg} title="pizza" />
				<MenuCategory items={salad} bannerImg={saladBg} title="salad" />
				<MenuCategory items={soup} bannerImg={soupBg} title="soup" />
			</main>
		</>
	);
};

export default Menu;
