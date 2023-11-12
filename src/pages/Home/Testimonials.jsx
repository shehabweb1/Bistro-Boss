import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import SectionHeader from "../shared/SectionHeader";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("reviews.json")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<section className="py-10">
			<SectionHeader
				heading={"TESTIMONIALS"}
				subHeading={"What Our Clients Say"}
			/>
			<div className="py-10">
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					{reviews.map((review) => (
						<SwiperSlide key={review._id}>
							<Rating
								style={{ maxWidth: 180 }}
								value={review.rating}
								readOnly
								className="mx-auto"
							/>
							<FaQuoteLeft className="mx-auto text-7xl my-5" />
							<p className="w-4/6 mx-auto text-center my-3">{review.details}</p>
							<h3 className="text-5xl text-center text-yellow-500">
								{review.name}
							</h3>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
