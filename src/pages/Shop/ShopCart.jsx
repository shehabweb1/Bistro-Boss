const ShopCart = ({ item }) => {
	const { image, name, recipe, price } = item;
	return (
		<div className="relative flex flex-col items-center">
			<img src={image} alt={name} className="w-full h-auto" />
			<p className="py-2 px-5 bg-gray-900 text-white absolute right-3 top-3 z-10">
				${price}
			</p>
			<div className="p-5">
				<h4 className="text-2xl font-bold text-center mb-3">{name}</h4>
				<p>{recipe}</p>
			</div>
			<button className="btn btn-outline border-0 bg-gray-600 border-b-4 border-b-yellow-600  text-yellow-600  hover:bg-black hover:border-black  hover:text-yellow-600">
				add to cart
			</button>
		</div>
	);
};

export default ShopCart;
