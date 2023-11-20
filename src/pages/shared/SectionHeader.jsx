const SectionHeader = ({ heading, subHeading }) => {
	return (
		<div className="mx-auto md:w-4/12 text-center my-8">
			<p className="text-yellow-500 italic mb-3">---{subHeading}---</p>
			<h3 className="text-3xl border-y-4 py-4">{heading}</h3>
		</div>
	);
};

export default SectionHeader;
