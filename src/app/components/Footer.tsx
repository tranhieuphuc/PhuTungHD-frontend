import React from "react";
import Image from "next/image";
import { FaFacebookMessenger, FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <div className=" text-white py-10 px-4 sm:px-10" style={{ backgroundColor: "#232323" }}
        >
            {/* Logo and Description */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex flex-col items-center sm:items-start">
                    <Image 
                        src="/images/logo.png" 
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
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Trang Chủ</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Dịch Vụ</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Giới Thiệu</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition">Liên Hệ</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center sm:items-start">
                    <h3 className="font-bold text-lg mb-4">Liên Hệ Với Chúng Tôi</h3>
                    <p className="text-gray-400 mb-2"><IoMdCall className="inline mr-2" /> +84 036 382 2263</p>
                    <p className="text-gray-400 mb-4"><IoMdMail className="inline mr-2" /> support@phutunghd.vn</p>
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