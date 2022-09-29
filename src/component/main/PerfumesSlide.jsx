import "./PerfumesSlide.scss";
import PerfumesItem from "./PerfumesItem";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PerfumesSlide({ fbr_list }) {
  console.log(fbr_list);
  return (
    <div className="perfumes">
      <div className="title">
        <h4>Perfumes</h4>
      </div>

      <Swiper
        className="swiper"
        spaceBetween={10}
        // slidesPerView={5}
        autoplay={{ delay: 3000 }}
        navigation
        loop="ture"
        breakpoints={{
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 5
          }
        }}
      >
        {fbr_list.map((item) =>
          <SwiperSlide className="swiper-slide">
            <PerfumesItem
              img={item.img}
              name={item.name}
              price={item.current_price}
            />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}