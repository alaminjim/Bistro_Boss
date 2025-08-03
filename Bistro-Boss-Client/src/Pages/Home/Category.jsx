import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/Shared/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        title={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-16"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <p className="uppercase text-2xl -mt-24 text-center text-white font-semibold">
            salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <p className="uppercase text-2xl -mt-24 text-center text-white font-semibold">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <p className="uppercase text-2xl -mt-24 text-center text-white font-semibold">
            soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <p className="uppercase text-2xl -mt-24 text-center text-white font-semibold">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <p className="uppercase text-2xl -mt-24 text-center text-white font-semibold">
            salads
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
