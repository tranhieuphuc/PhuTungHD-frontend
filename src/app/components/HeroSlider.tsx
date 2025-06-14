"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useAnimation } from "framer-motion";

const slides = [
  {
    bgImage: "/images/slider-1.jpg",
    subtitle: "Ứng dụng tra cứu phụ tùng số 1 Việt Nam",
    title: "KHÁM PHÁ KHO PHỤ TÙNG CHÍNH HÃNG HONDA CHỈ TRONG VÀI GIÂY",
  },
  {
    bgImage: "/images/slider-2.jpg",
    subtitle: "Tra cứu nhanh chóng - Chính xác tuyệt đối",
    title: "MỘT CÚ CHẠM, MỌI MÃ PHỤ TÙNG TRONG TẦM TAY BẠN",
  },
  {
    bgImage: "/images/slider-3.jpg",
    subtitle: "Tối ưu cho thợ sửa chữa & đại lý phụ tùng",
    title: "GIẢM THIỂU SAI SÓT - TĂNG TỐC DOANH SỐ",
  },
  {
    bgImage: "/images/slider-4.jpg",
    subtitle: "Ứng dụng hỗ trợ tìm kiếm phụ tùng Honda",
    title: "PHỤC VỤ KHÁCH HÀNG NHANH HƠN",
  },
];

const HeroSlider = () => {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay },
    }),
  };

  useEffect(() => {
    const runAnimation = async () => {
      await controls.start("hidden");
      await controls.start("visible");
    };
    runAnimation();
  }, [activeIndex, controls]);
  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.realIndex);
  };


  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
        onSlideChange={handleSlideChange}

      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center  bg-fixed  flex items-center justify-center"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            >
              <div className="text-center text-white px-4 sm:px-6 md:px-8">
                <motion.div
                  className="text-xs sm:text-sm uppercase mb-2 tracking-widest"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={controls}
                  custom={0}
                >
                  {slide.subtitle}
                </motion.div>

                <motion.h1
                  className="text-2xl xl:w-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-5"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={controls}
                  custom={0.3}
                >
                  {slide.title}
                </motion.h1>

                <motion.div
                  className="w-16 sm:w-20 md:w-24 h-1 bg-red-600 mx-auto mb-6"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={controls}
                  custom={0.6}
                ></motion.div>

                <motion.button
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition text-sm sm:text-base cursor-pointer"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={controls}
                  custom={0.9}
                >
                  BẮT ĐẦU TRA CỨU NGAY
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
  );
};

export default HeroSlider;
