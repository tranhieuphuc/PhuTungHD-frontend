"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send email, etc.)
    alert("Gửi thông tin thành công!");
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 mt-30">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Liên hệ với chúng tôi</h2>
          <p className="text-lg text-gray-600 mb-6">
            Bạn gặp khó khăn trong việc tìm kiếm phụ tùng xe Honda chính hãng? Hãy liên hệ với chúng tôi để được hỗ trợ ngay lập tức.
            <br /> Chúng tôi luôn sẵn sàng giúp bạn tra cứu phụ tùng nhanh chóng và chính xác, giúp bạn tiết kiệm thời gian và công sức.
          </p>
          <div className="flex items-center mb-6">
            <FaLocationDot className="w-5 h-5 text-gray-600 mr-2" />
            <p className="text-gray-600">545 Mavis Island, Chicago, IL 99191</p>
          </div>
          <div className="flex items-center mb-6">
            <FaPhoneAlt className="w-5 h-5 text-gray-600 mr-2" />
            <p className="text-gray-600">+84 036 382 2263</p>
          </div>
          <div className="flex items-center">
            <IoMdMail className="w-5 h-5 text-gray-600 mr-2" />
            <p className="text-gray-600">support@phutunghd.vn</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Gửi thông điệp cho chúng tôi</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-2">
                  Họ
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-2">
                  Tên
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Số điện thoại
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Lời nhắn
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-800 transition"
            >
              Gửi thông điệp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;