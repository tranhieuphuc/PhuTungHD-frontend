"use client";
import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
const SpiritVideo = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video with fade and zoom */}
      <video
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? "opacity-100 scale-110" : "opacity-0 scale-100"
        } transition-transform duration-[15000ms]`}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src="/videos/spirit.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e02523]/80 via-[#e02523]/60 to-[#7f1d1d]/80"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <p className="text-white text-sm sm:text-xl mb-4">
          Ứng dụng hỗ trợ tìm kiếm và tra cứu phụ tùng chính hãng Honda
        </p>

        <h1 className="text-white font-bold italic text-2xl sm:text-4xl md:text-6xl leading-snug sm:leading-tight mb-6">
          TÌM PHỤ TÙNG CHUẨN XÁC <br className="hidden sm:block" /> NHANH CHÓNG &amp; TIỆN LỢI
        </h1>

        <p className="text-white text-sm sm:text-xl mb-8 max-w-3xl">
          Dễ dàng tra cứu mã phụ tùng, kiểm tra tồn kho và đặt hàng chính xác cho xe máy Honda tại Việt Nam.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://apps.apple.com/vn/app/your-app-idhttps://apps.apple.com/vn/app/tra-c%E1%BB%A9u-ph%E1%BB%A5-t%C3%B9ng-xe-m%C3%A1y-hd/id6737428196"
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
            className="flex items-center justify-center border border-white px-6 py-3 text-white text-sm font-semibold rounded-md hover:bg-white hover:text-red-700 transition"
          >
            Tải trên Google Play <FaGooglePlay className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpiritVideo;