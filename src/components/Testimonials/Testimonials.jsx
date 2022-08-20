import React from "react";
import { testimonials } from "../../utils/testimonials";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonios" className="container mx-auto text-center">
      <h2 className="text-2xl font-semibold text-center text-primary-main dark:text-background-bgColor">
        Opiniones
      </h2>
      <Swiper
        className="w-3/5 p-10 mt-10"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="p-10 text-center select-none bg-background-bgVariant rounded-2xl dark:bg-textPrimary-mainVariant dark:text-background-bgColor "
            >
              <div className="w-16 mx-auto mb-4 overflow-hidden border rounded-full aspect-square border-primary-mainVariant dark:border-background-bgColor">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="text-lg font-extrabold text-center text-white dark:text-background-bgColor">
                {name}
              </h5>
              <small className="block w-4/5 mx-auto mt-3 font-light text-textPrimary-colorLight dark:text-gray-700">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
