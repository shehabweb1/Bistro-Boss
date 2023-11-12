import chefService from "../../assets/home/chef-service.jpg";

const ServicesSection = () => {
	const serviceBg = {
		backgroundImage: `url(${chefService})`,
	};
	return (
		<div className="py-10 w-full bg-cover bg-center bg-fixed" style={serviceBg}>
			<div className="max-w-4xl bg-slate-100 text-slate-500 mx-auto p-20 text-center">
				<h2 className="text-5xl font-semibold mb-3">Bistro Boss</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, libero accusamus laborum deserunt ratione dolor
					officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
					nihil iusto ducimus incidunt quibusdam nemo.
				</p>
			</div>
		</div>
	);
};

export default ServicesSection;
