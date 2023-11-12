import MenuItem from "../shared/MenuItem";
import CategoryBanner from "./CategoryBanner";

const MenuCategory = ({ items, bannerImg, title }) => {
	return (
		<section className="py-10">
			<CategoryBanner bannerImg={bannerImg} title={title} />
			<div className="grid grid-cols-2 gap-10 mt-12">
				{items.map((item) => (
					<MenuItem key={item._id} item={item} />
				))}
			</div>
			<button className="btn btn-outline border-b-4 block mx-auto">
				ORDER YOUR FAVOURITE FOOD
			</button>
		</section>
	);
};

export default MenuCategory;
