import React from "react";
import { FaFacebookMessenger, FaInfo, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { SiZalo } from "react-icons/si";

const ContactUsSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed relative py-16 sm:py-20 text-center text-white px-4 mt-20"
      style={{ backgroundImage: `url('/images/contact-us-bg.png')` }}
    >
      {/* Info Box */}
      <div className="absolute left-1/2 -top-px transform -translate-x-1/2 -translate-y-1/2 bg-red-700 text-white py-4 px-6 sm:px-8 rounded-lg text-center w-4/5 max-w-4xl shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center gap-2 text-sm md:font-semibold">
            <FaInfo size={40}/>
            <span className="sm:mt-0  text-sm md:font-semibold md:text-base lg:text-2xl">
              Bạn gặp phải sự cố khi tra cứu phụ tùng Honda? Hãy để chúng tôi hỗ trợ bạn ngay!
            </span>
          </div>
          <button className="bg-white text-black py-3 sm:px-6 px-4 rounded-lg text-sm md:font-semibold hover:bg-gray-400 transition cursor-pointer md:my-5">
            LIÊN HỆ NGAY
          </button>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="text-center mb-16 mt-10">
        <h2 className="text-3xl font-bold mb-6 sm:mb-10">Đăng ký nhận tin tức về phụ tùng Honda</h2>
        <div className="max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-center mb-6 gap-2">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full sm:w-1/3 p-4 rounded-lg mb-2 sm:mb-0 bg-white text-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-1/3 p-4 rounded-lg mb-2 sm:mb-0 bg-white text-gray-400"
          />
          <button className="bg-red-700 text-white p-4 rounded-lg font-semibold hover:bg-rose-700 transition w-full sm:w-auto cursor-pointer">
            ĐĂNG KÝ NGAY
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-8 sm:gap-16 flex-wrap">
        <div className="text-center hover:text-red-700 hover:scale-110 transition-transform duration-300 cursor-pointer mb-6 sm:mb-0">
          <IoMail size={60} className="text-white hover:text-red-700 mb-5 mx-auto" />
          <p className="font-semibold text-xl">Email</p>
        </div>
        <div className="text-center hover:text-red-700 hover:scale-110 transition-transform duration-300 cursor-pointer mb-6 sm:mb-0">
          <FaFacebookMessenger size={60} className="text-white hover:text-red-700 mb-5 mx-auto" />
          <p className="font-semibold text-xl">Messenger</p>
        </div>
        <div className="text-center hover:text-red-700 hover:scale-110 transition-transform duration-300 cursor-pointer mb-6 sm:mb-0">
          <SiZalo size={60} className="text-white hover:text-red-700 mb-5 mx-auto" />
          <p className="font-semibold text-xl">Zalo</p>
        </div>
        <div className="text-center hover:text-red-700 hover:scale-110 transition-transform duration-300 cursor-pointer mb-6 sm:mb-0">
          <FaPhoneAlt size={60} className="text-white hover:text-red-700 mb-5 mx-auto" />
          <p className="font-semibold text-xl">Gọi ngay</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
