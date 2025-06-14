"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Truck, ThumbsUp, RefreshCw,SearchCheck } from "lucide-react";

const features = [
    {
        icon: <Truck size={40} />,
        title: "Tra cứu phụ tùng siêu tốc",
        description: "Chỉ cần vài giây bạn có thể tìm đúng mã phụ tùng Honda chính hãng, chuẩn xác 100% theo từng dòng xe.",
    },
    {
        icon: <ThumbsUp size={40} />,
        title: "Tối ưu cho thợ & đại lý",
        description: "Tăng tốc độ tra cứu, giảm sai sót, hỗ trợ thợ sửa chữa và đại lý phụ tùng hoạt động chuyên nghiệp hơn.",
    },
    {
        icon: <SearchCheck size={40} />,
        title: "Tra cứu thông tin kỹ thuật chi tiết",
        description: "Cung cấp đầy đủ thông số kỹ thuật, sơ đồ lắp ráp, giúp xác định đúng mã phụ tùng cho từng model xe Honda.",
    },
    {
        icon: <RefreshCw size={40} />,
        title: "Cập nhật liên tục từ Honda",
        description: "Dữ liệu phụ tùng luôn được cập nhật theo phiên bản mới nhất từ hệ thống chính hãng Honda Việt Nam.",
    },
];

const SubSlider = () => {
    return (
        <div className="relative py-16 bg-white">
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{ clickable: true }}
                loop
                autoplay={{ delay: 4000 }}
                spaceBetween={24}                
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {features.map((feature, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white border-r-3 border-l-3 border-rose-600 p-6  sm:p-8 text-center shadow hover:shadow-xl/30 transition cursor-pointer transform hover:scale-105 duration-300">
                            <div className="text-black mb-4 flex justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <div className="h-1 w-12 bg-red-600 mx-auto mb-4"></div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SubSlider;