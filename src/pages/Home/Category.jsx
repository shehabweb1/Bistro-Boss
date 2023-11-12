import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionHeader from "../shared/SectionHeader";

const Category = () => {
	return (
		<section>
			<SectionHeader
				heading="ORDER ONLINE"
				subHeading="From 11:00am to 10:00pm"
			/>

			<Swiper
				spaceBetween={20}
				slidesPerView={4}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper my-10"
			>
				<SwiperSlide>
					<img src={slide1} alt="slide1" />
					<h3 className="text-3xl uppercase font-semibold -mt-14 text-center text-white">
						Salads
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide2} alt="slide2" />
					<h3 className="text-3xl uppercase font-semibold -mt-14 text-center text-white">
						Soups
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide3} alt="slide3" />
					<h3 className="text-3xl uppercase font-semibold -mt-14 text-center text-white">
						pizzas
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide4} alt="slide4" />
					<h3 className="text-3xl uppercase font-semibold -mt-14 text-center text-white">
						desserts
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide5} alt="slide5" />
					<h3 className="text-3xl uppercase font-semibold -mt-14 text-center text-white">
						Salads
					</h3>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Category;
