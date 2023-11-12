const CategoryBanner = ({ bannerImg, title }) => {
	const bgImage = {
		backgroundImage: `url(${bannerImg})`,
	};
	return (
		<div
			className="bg-fixed bg-cover bg-center w-full py-[120px]"
			style={bgImage}
		>
			<div className="p-[80px] w-4/6 mx-auto bg-black bg-opacity-50 text-white">
				<h1 className="text-5xl text-center font-semibold uppercase mb-3">
					{title}
				</h1>
				<p className="text-md text-center">
					Lorem Ipsum has been the industry’s standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it
					to make a type specimen book.
				</p>
			</div>
		</div>
	);
};

export default CategoryBanner;
