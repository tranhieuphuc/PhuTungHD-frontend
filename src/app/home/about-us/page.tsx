import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="relative py-20 text-white px-4">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/about-us-bg.jpg"
                    alt="Honda Road Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50"
                />
            </div>

            {/* Content Section */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e02523]/80 via-[#e02523]/60 to-[#7f1d1d]/80 "></div>

            <div className="relative z-10 max-w-4xl mx-auto text-start pt-50">
                <div className="flex flex-row items-center mb-12">
                    <div>
                        <h1 className="text-3xl sm:text-5xl font-bold mb-6">Về Chúng Tôi</h1>
                        <p className="text-lg sm:text-xl mb-8">
                            PhuTungHD là nền tảng tra cứu phụ tùng xe Honda chính hãng, nhanh chóng và chính xác dành cho người dùng Việt Nam. Dễ dàng tìm kiếm, tiếp cận phụ tùng trên toàn quốc, hỗ trợ thợ sửa chữa và đại lý mọi lúc, mọi nơi.
                        </p>
                        <div className="flex justify-start gap-4">
                            <a
                                href="https://apps.apple.com/vn/app/tra-c%E1%BB%A9u-ph%E1%BB%A5-t%C3%B9ng-xe-m%C3%A1y-hd/id6737428196"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center border border-white px-6 py-3 text-white text-sm font-semibold rounded-md hover:bg-white hover:text-red-700 transition"
                            >
                                Tải trên App Store <FaApple className="ml-2" size={20} />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.daitrandev.phutunghd&hl=vi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start justify-center border border-white px-6 py-3 text-white text-sm font-semibold rounded-md hover:bg-white hover:text-red-700 transition"
                            >
                                Tải trên Google Play <FaGooglePlay className="ml-2" size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:block ml-12 ">
                        <Image
                            src="/images/app-logo.jpeg"
                            alt="About Us Image"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;
