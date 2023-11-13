import { useEffect, useState } from "react";
import SectionHeader from "../shared/SectionHeader";

const Recommends = () => {
	const [menu, setMenu] = useState([]);
	useEffect(() => {
		fetch("menu.json")
			.then((res) => res.json())
			.then((data) => {
				setMenu(data.slice(0, 3));
			});
	}, []);

	return (
		<section className="py-10">
			<SectionHeader heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
				{menu.map((item) => (
					<div
						key={item._id}
						className="flex flex-col justify-between items-center"
					>
						<img src={item.image} alt={item.name} className="w-full h-auto" />
						<div className="p-5">
							<h4 className="text-2xl font-bold text-center mb-3">
								{item.name}
							</h4>
							<p>{item.recipe}</p>
						</div>
						<button className="btn btn-outline border-0 bg-gray-600 border-b-4 border-b-yellow-600  text-yellow-600  hover:bg-black hover:border-black  hover:text-yellow-600">
							add to cart
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Recommends;
