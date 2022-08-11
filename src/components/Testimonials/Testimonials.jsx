import React from "react";
import { testimonials } from "../../utils/testimonials";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section>
      <h5>Opiniones</h5>
      <h2>Testimonios</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <img src={avatar} alt={name} />
              </div>
              <h5>{name}</h5>
              <small>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
