import { useEffect, useState } from "react";
import SectionHeader from "../shared/SectionHeader";
import MenuItem from "../shared/MenuItem";

const PopularMenu = () => {
	const [menu, setMenu] = useState([]);
	useEffect(() => {
		fetch("menu.json")
			.then((res) => res.json())
			.then((data) => {
				const popularItems = data.filter((item) => item.category === "popular");
				setMenu(popularItems);
			});
	}, []);

	return (
		<section>
			<SectionHeader heading={"FROM OUR MENU"} subHeading={"Check it out"} />
			<div className="grid grid-cols-2 gap-10 mb-10">
				{menu.map((item) => (
					<MenuItem key={item._id} item={item} />
				))}
			</div>
		</section>
	);
};

export default PopularMenu;
