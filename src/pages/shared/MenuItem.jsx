const MenuItem = ({ item }) => {
	const { name, recipe, image, price } = item;
	return (
		<div className="flex gap-3">
			<img src={image} alt={name} className="w-[100px] h-[80px] rounded-b-full rounded-tr-full" />
			<div>
				<h3 className="text-xl uppercase">{name}------------------</h3>
				<p>{recipe}</p>
			</div>
			<p className="text-yellow-500">{price}</p>
		</div>
	);
};

export default MenuItem;
