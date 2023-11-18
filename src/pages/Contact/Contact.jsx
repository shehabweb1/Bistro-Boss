import { Helmet } from "react-helmet-async";
import Hero from "../shared/Hero";
import bannerImg from "../../assets/contact/banner.jpg";

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Bistro Boss | Contact</title>
			</Helmet>
			<main>
				<Hero heroImg={bannerImg} title="OUR CONTACT US" />
			</main>
		</>
	);
};

export default Contact;
