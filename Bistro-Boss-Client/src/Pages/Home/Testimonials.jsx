import SectionTitle from "../../Components/Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-three-sandy.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        title={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((reviews) => (
          <SwiperSlide key={reviews.id}>
            <div className="flex flex-col items-center space-y-1.5 mt-10">
              <Rating
                style={{ maxWidth: 180 }}
                value={reviews.rating}
                readOnly
              />
              <p className="pl-12 pr-12">{reviews.details}</p>
              <h3 className="text-2xl text-orange-500">{reviews.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
