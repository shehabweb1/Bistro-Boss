import SectionHeader from "../shared/SectionHeader";
import MenuItem from "../shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
	const [menu] = useMenu();

	const popular = menu.filter((item) => item.category === "popular");

	return (
		<section className="py-10">
			<SectionHeader heading={"FROM OUR MENU"} subHeading={"Check it out"} />
			<div className="grid grid-cols-2 gap-10 mb-10">
				{popular.map((item) => (
					<MenuItem key={item._id} item={item} />
				))}
			</div>
			<button className="btn btn-outline border-b-4 block mx-auto">
				View Full Menu
			</button>
		</section>
	);
};

export default PopularMenu;
