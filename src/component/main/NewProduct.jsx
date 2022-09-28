import "./NewProduct.scss";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가

export default function NewProduct() {
  return (
    <div className="new_product">

      <Swiper
        className="swiper"
        spaceBetween={1}
        slidesPerView={1}
        navigation
        loop="ture"
      >
        <SwiperSlide className="swiper-slide">
          <img src="./images/image_1655425409153_2500.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/image_1655425901475_2500.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>

  );
}
