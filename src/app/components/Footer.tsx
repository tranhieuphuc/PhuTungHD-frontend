import React from "react";
import Image from "next/image";
import { FaFacebookMessenger, FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER 
    const email = process.env.NEXT_PUBLIC_EMAIL;

    return (
        <div className=" text-white py-10 px-4 sm:px-10" style={{ backgroundColor: "#232323" }}
        >
            {/* Logo and Description */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex flex-col items-center sm:items-start">
                    <Image 
                        src="/images/app-logo.jpeg" 
                        alt="PhuTungHD Logo"
                        width={150}
                        height={150}
                        className="mb-4"
                    />
                    <p className="text-center sm:text-left text-sm text-gray-400">
                        PhuTungHD là nền tảng tra cứu phụ tùng xe Honda chính hãng, nhanh chóng và chính xác dành cho người dùng Việt Nam. Dễ dàng tìm kiếm, tiếp cận phụ tùng trên toàn quốc, hỗ trợ thợ sửa chữa và đại lý mọi lúc, mọi nơi.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center sm:items-start">
                    <h3 className="font-bold text-lg mb-4">Liên Kết Nhanh</h3>
                    <ul className="space-y-2">
                        <li><a href="/home" className="text-gray-400 hover:text-white transition">Trang Chủ</a></li>
                        <li><a href="/home/about-us" className="text-gray-400 hover:text-white transition">Về Chúng Tôi</a></li>
                        <li><a href="/home" className="text-gray-400 hover:text-white transition">Gói Plus</a></li>
                        <li><a href="/home/contact" className="text-gray-400 hover:text-white transition">Liên Hệ</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center sm:items-start">
                    <h3 className="font-bold text-lg mb-4">Liên Hệ Với Chúng Tôi</h3>
                    <a href={`tel:${phoneNumber}`} className="text-gray-400 mb-2 cursor-pointer hover:underline"><IoMdCall className="inline mr-2" />033 886 7216</a>
                    <a href={`mailto:${email}`}className="text-gray-400 mb-4 cursor-pointer hover:underline"><IoMdMail className="inline mr-2" />{email}</a>
                    <div className="flex space-x-4">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaFacebookMessenger size={30} className="text-gray-400 hover:text-white transition" />
                        </a>                        
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} className="text-gray-400 hover:text-white transition" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <SiZalo size={30} className="text-gray-400 hover:text-white transition" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="text-center mt-10">
                <p className="text-sm text-gray-400">&copy; 2025 PhuTungHD. All rights reversed</p>
            </div>
        </div>
    );
};

export default Footer;