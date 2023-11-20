import ShopCart from "./ShopCart";

const ShopCategory = ({ items }) => {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
				{items.map((item) => (
					<ShopCart key={item._id} data={item} />
				))}
			</div>
		</div>
	);
};

export default ShopCategory;
