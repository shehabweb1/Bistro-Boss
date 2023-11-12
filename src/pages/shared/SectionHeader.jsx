const SectionHeader = ({ heading, subHeading }) => {
	return (
		<div className="mx-auto md:w-3/12 text-center my-8">
			<p className="text-yellow-500 italic mb-2">---{subHeading}---</p>
			<h3 className="text-3xl border-y-4 py-2">{heading}</h3>
		</div>
	);
};

export default SectionHeader;