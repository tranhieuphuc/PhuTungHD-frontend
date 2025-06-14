import { Phone, Copyright } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

const HeaderInfoSection = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-stone-800 shadow-md z-50 font-semibold text-sm p-2 sm:p-4">
            <div className="flex flex-col sm:flex-row items-center justify-center  max-w-screen-xl mx-auto px-0 sm:px-8 space-y-2 sm:space-y-0">

                {/* Phone section */}
                <div className="flex items-center text-white space-x-2">
                    <Phone color="white" size={14} className="sm:size-[15px]" />
                    <a href="tel:0363822263" className="text-white ms-1 hover:underline text-xs sm:text-sm">+ 0363 822 263</a>
                    <div className="hidden sm:flex text-gray-50 mx-5">|</div>
                </div>

                {/* Copyright + social */}
                <div className="flex items-center space-x-3 text-white ">
                    <Copyright size={12} className="mr-0.5 sm:mr-1" />
                    <span className="text-xs sm:text-sm">2025 Phu Tung HD</span>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={18} className="sm:size-[20px]" />
                    </a>
                    <a href="mailto:your-email@example.com">
                        <IoIosMail size={20} className="sm:size-[25px]" />
                    </a>
                    <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
                        <SiZalo size={20} className="sm:size-[25px]" />
                    </a>
                </div>

            </div>
        </div>
    );
}

export default HeaderInfoSection;