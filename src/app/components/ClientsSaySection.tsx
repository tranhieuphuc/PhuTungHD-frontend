import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const clientTestimonials = [
    {
        id: 1,
        name: "LongMonkey192",
        feedback: "Quá ok luôn, nay đã có trên ios, quá tuyệt vời, hỗ trợ rất nhiều cho ae thợ.",
        title: "Thanks AD",
    },
    {
        id: 2,
        name: "@123tien",
        feedback: "Sử dụng rất ok, nó hỗ trợ tôi rất nhiều, coi nhanh, bản giá chuẩn xác, không sai lệch. Rất tốt.",
        title: "Rất tốt",
    },
    {
        id: 3,
        name: "TranPhuc13",
        feedback: "Tuyệt vời, app luôn cập nhật những dòng xe mới, ứng dụng rất hữu ích cho thợ sửa xe. Tks AD.",
        title: "Tuyệt vời",
    },
    {
        id: 4,
        name: "Quang Luu Thai",
        feedback: "Giờ chỉ cần tra trên đt, quá tiện, cảm ơn AD. Rất tiện lợi. Quá tuyệt vời.",
        title: "Rất tiện lợi",
    },
    {
        id: 5,
        name: "Quin Quin",
        feedback: "Ứng dụng rất hữu ích, giúp tôi tra cứu phụ tùng nhanh chóng. Mình rất hài lòng. Cảm ơn AD.",
        title: "Hữu ích",
    },
];

const ClientsSaySection = () => {
    return (
        <div className="bg-cover bg-center bg-fixed py-16 sm:py-20 text-center text-white px-4"
            style={{ backgroundImage: `url('/images/clients-bg.png')` }}>
            <p className="uppercase text-xs sm:text-sm tracking-widest mb-4">Người dùng đánh giá</p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                Khách hàng nói gì về chúng tôi?
            </h2>
            <div className="w-16 h-1 bg-rose-700 mx-auto mb-6"></div>
            <p className="text-xs sm:text-sm md:text-lg mb-12 sm:mb-16">
                Hàng ngàn thợ sửa xe và đại lý phụ tùng đã tin dùng ứng dụng
            </p>

            <div className="max-w-screen-xl mx-auto">
                <Swiper
                    modules={[Autoplay]}

                    autoplay={{ delay: 5000 }}
                    loop
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="px-2 sm:px-4"
                >
                    {clientTestimonials.map((client) => (
                        <SwiperSlide key={client.id}>
                            <div className="bg-white text-black pt-8 mt-4 sm:pt-10 rounded-lg shadow-md transition-transform transform duration-500 hover:-translate-y-3 hover:shadow-lg flex flex-col justify-between h-full cursor-pointer hover:bg-gray-100 hover:text-white">
                                <h3 className="font-bold italic text-lg sm:text-xl text-red-600 mb-4">&quot;{client.title}&quot;</h3>
                                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base italic">
                                    &quot;{client.feedback}&quot;
                                </p>
                                <div className="flex flex-col items-center  p-3 bg-red-700 rounded-b-lg">
                                    <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold text-xl">
                                        {client.name.charAt(0).toUpperCase()}
                                    </div>
                                    <p className="text-white text-sm">{client.name}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ClientsSaySection;