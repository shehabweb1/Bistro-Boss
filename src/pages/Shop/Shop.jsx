import { useState } from "react";
import Hero from "../shared/Hero";
import useMenu from "../../hooks/useMenu";
import ShopCategory from "./ShopCategory";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import shopHero from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Shop = () => {
	const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
	const { category } = useParams();
	const initialIndex = categories.indexOf(category);
	const [tabIndex, setTabIndex] = useState(initialIndex);
	const [menu] = useMenu();

	const dessert = menu.filter((item) => item.category === "dessert");
	const pizza = menu.filter((item) => item.category === "pizza");
	const salad = menu.filter((item) => item.category === "salad");
	const soup = menu.filter((item) => item.category === "soup");
	const drinks = menu.filter((item) => item.category === "drinks");

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Shop</title>
			</Helmet>

			<main>
				<Hero heroImg={shopHero} title="Our Shop" />
				<section className="py-10">
					<Tabs
						defaultIndex={tabIndex}
						onSelect={(index) => setTabIndex(index)}
					>
						<TabList className="w-2/6 mx-auto uppercase font-medium">
							<Tab>Salad</Tab>
							<Tab>pizza</Tab>
							<Tab>soups</Tab>
							<Tab>desserts</Tab>
							<Tab>drinks</Tab>
						</TabList>

						<TabPanel>
							<ShopCategory items={salad} />
						</TabPanel>
						<TabPanel>
							<ShopCategory items={pizza} />
						</TabPanel>
						<TabPanel>
							<ShopCategory items={soup} />
						</TabPanel>
						<TabPanel>
							<ShopCategory items={dessert} />
						</TabPanel>
						<TabPanel>
							<ShopCategory items={drinks} />
						</TabPanel>
					</Tabs>
				</section>
			</main>
		</>
	);
};

export default Shop;
