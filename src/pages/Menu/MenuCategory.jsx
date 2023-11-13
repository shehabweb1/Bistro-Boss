import { Link } from "react-router-dom";
import MenuItem from "../shared/MenuItem";
import CategoryBanner from "./CategoryBanner";

const MenuCategory = ({ items, bannerImg, title }) => {
	return (
		<section className="py-10">
			<CategoryBanner bannerImg={bannerImg} title={title} />
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-12">
				{items.map((item) => (
					<MenuItem key={item._id} item={item} />
				))}
			</div>
			<Link to={`/shop/${title}`}>
				<button className="btn btn-outline border-0 border-b-4 block mx-auto">
					ORDER YOUR FAVOURITE FOOD
				</button>
			</Link>
		</section>
	);
};

export default MenuCategory;
