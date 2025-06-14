const PricingSection = () => {
  const plans = [
    {
      name: "Gói Cơ Bản (3 tháng)",
      description: "Dành cho cá nhân, thợ sửa chữa muốn tra cứu nhanh chóng, chính xác mà không bị làm phiền bởi quảng cáo.",
      price: "19.000đ",
      features: [
        { text: "Tra cứu phụ tùng tất cả dòng xe Honda", included: true },
        { text: "Hiển thị sơ đồ lắp ráp chi tiết", included: true },
        { text: "Cập nhật dữ liệu chính hãng liên tục", included: true },
        { text: "Hạn chế truy cập một số tính năng nâng cao", included: false },
        { text: "Không hỗ trợ tư vấn kỹ thuật", included: false },
        
      ],
    },
    {
      name: "Gói Chuyên Nghiệp (6 tháng)",
      description: "Phù hợp cho garage, cửa hàng phụ tùng và hệ thống đại lý chính hãng, giúp tra cứu nhanh hơn và không còn quảng cáo.",
      price: "49.000đ",
      features: [
        { text: "Tra cứu phụ tùng tất cả dòng xe Honda", included: true },
        { text: "Hiển thị sơ đồ lắp ráp chi tiết", included: true },
        { text: "Cập nhật dữ liệu chính hãng liên tục", included: true },
        { text: "Tư vấn kỹ thuật 24/7", included: true },
        { text: "Quản lý lịch sử tra cứu", included: true },
        
      ],
    },
    {
      name: "Gói Doanh Nghiệp (12 tháng)",
      description: "Giải pháp toàn diện cho hệ thống phân phối và chuỗi garage chuyên nghiệp. Sử dụng không giới hạn và không có quảng cáo.",
      price: "99.000đ",
      features: [
        { text: "Tra cứu phụ tùng tất cả dòng xe Honda", included: true },
        { text: "Hiển thị sơ đồ lắp ráp chi tiết", included: true },
        { text: "Cập nhật dữ liệu chính hãng liên tục", included: true },
        { text: "Tư vấn kỹ thuật ưu tiên 24/7", included: true },
        { text: "Quản lý lịch sử & phân quyền người dùng", included: true },
        
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-red-700 via-rose-800 to-rose-700 py-24 px-4">
      <div className="text-center text-white mb-16">
        <h2 className="text-4xl font-bold mb-4">Gói Dịch Vụ Phụ Tùng</h2>
        <p className="text-lg">Chọn gói phù hợp để trải nghiệm tra cứu phụ tùng nhanh chóng, không quảng cáo</p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative bg-white rounded-2xl shadow-lg p-8 border border-gray-200 transition transform duration-500 hover:scale-105 hover:shadow-2xl
              ${idx === 0 || idx === plans.length - 1 ? "scale-95" : "scale-100 z-10"}`}
          >
            {idx === 1 && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  Gói Phổ Biến
                </span>
              </div>
            )}
            <h3 className="text-red-600 font-bold text-xl mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="text-5xl font-bold mb-2">{plan.price}</div>
            <div className="text-gray-400 text-sm mb-6">Áp dụng theo tháng</div>
            <button className="bg-red-600 text-white py-3 px-6 rounded-lg font-semibold mb-6 hover:bg-red-700 transition">
              Dùng thử miễn phí
            </button>
            <div className="text-left">
              <p className="font-semibold mb-3">Đặc quyền:</p>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center ${feature.included ? "text-gray-700" : "text-gray-400 line-through"}`}>
                    <span className="mr-2 text-lg">+</span> {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;