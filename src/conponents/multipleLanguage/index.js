import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      home: "home",
      contact: "contact",
      about: "about",
      support: "support",
      "sing in": "sing in",
      Search: "Search",
      "VIRTUAL REALITY": "VIRTUAL REALITY",
      "Virtual Reality Meeting": "Virtual Reality Meeting",
      " Elevate your organization's virtual presence with MeetinVR. Our platform provides all the tools you need to meet with your team or customers, host events, workshops, and training sessions in the metaverse.":
        "Elevate your organization's virtual presence with MeetinVR. Our platform provides all the tools you need to meet with your team or customers, host events, workshops, and training sessions in the metaverse.",
      "get started": "get started",
      "LEARN MORE": "LEARN MORE",
      "NEEDED FEATURES": "NEEDED FEATURES",
      "OUR MEETING ROOM": "OUR MEETING ROOM",
      "Access to multiple Meeting VR teams":
        "Access to multiple Meeting VR teams",
      "Choose from preset avatars or Avatar generated from selfie":
        "Choose from preset avatars or Avatar generated from selfie",
      "Meeting moderator panel": "Meeting moderator panel",
      "Persistent content in rooms": "Persistent content in rooms",
      "Save and export notes, screenshots & whiteboards":
        "Save and export notes, screenshots & whiteboards",
      "Use whiteboards and sticky notes": "Use whiteboards and sticky notes",
      "Hand Tracking technique (simulating virtual hand activity)":
        "Hand Tracking technique (simulating virtual hand activity)",
      "Display remote desktop activity (Remote desktop streaming) to VR space":
        "Display remote desktop activity (Remote desktop streaming) to VR space",
      "Using Voice zones": "Using Voice zones",
      "Upload and use your own files (images, videos, documents, 360 and 3D files)":
        "Upload and use your own files (images, videos, documents, 360 and 3D files)",
      "Schedule meetings": "Schedule meetings",
      "USE CASES": "USE CASES",
      "Organize memorable events to stand out to your customers & partners. We help create experiences that embody your brand and meet your needs. Ideal for small groups “VIP” style events, product launches, celebrations, team-building & more":
        "Organize memorable events to stand out to your customers & partners. We help create experiences that embody your brand and meet your needs. Ideal for small groups “VIP” style events, product launches, celebrations, team-building & more",
      "Platform for renting meeting rooms, virtual offices with integrated shop/advertising/ other virtualization services":
        "Platform for renting meeting rooms, virtual offices with integrated shop/advertising/ other virtualization services",
      "Organize memorable events to stand out to your customers & partners. We help create experiences that embody your brand and meet your needs.":
        "Organize memorable events to stand out to your customers & partners. We help create experiences that embody your brand and meet your needs.",
      "R&D and setup team": "R&D and setup team",
      "SAVA Meeting Solution": "SAVA Meeting Solution",
      "SAVA Education": "SAVA Education",
      "SAVA Healthcare services": "SAVA Healthcare services",
      "SAVA Media & Entertainment": "SAVA Media & Entertainment",
      "SAVA Retails & Real estate": "SAVA Retails & Real estate",
      "SAVA Metaverse": "SAVA Metaverse",
      "SAVA Social": "SAVA Social",
      "Virtual reality support & enhance outdoor":
        "Virtual reality support & enhance outdoor",
      "Alternative VR device management options":
        "Alternative VR device management options",
      "Increasing Innovation Among Your Remote Workers":
        "Increasing Innovation Among Your Remote Workers",
      SUBSCRIBE: "SUBSCRIBE",
      "Subscribe to our newsletter for latest updates":
        "Subscribe to our newsletter for latest updates",
      "SAVA Metaverse Meeting": "SAVA Metaverse Meeting",
      "Century Tower Building, Times City, Minh Khai Street, Vinh Tuy Ward, Hai Ba Trung District, Hanoi":
        "Century Tower Building, Times City, Minh Khai Street, Vinh Tuy Ward, Hai Ba Trung District, Hanoi",
      Address: "Address",
      Email: "Email",
      Phone: "Phone",
      "contact@savameta.com": "contact@savameta.com",
      "+84969877888": "+84969877888",
      "Web-based persistent multiuser 3D environment":
        "Web-based persistent multiuser 3D environment",
      "Custom corporate avatar design and animations":
        "Custom corporate avatar design and animations",
      "Manage content anytime with our CMS system":
        "Manage content anytime with our CMS system",
      "Custom designed 3D environment (design & size)":
        "Custom designed 3D environment (design & size)",
      "3D product presentation": "3D product presentation",
      "A fully custom corporate metaverse world":
        "A fully custom corporate metaverse world",
      "OUR SERVICES": "OUR SERVICES",
      "Experience the World Like Never Before":
        "Experience the World Like Never Before",
      "Commercial vr": "Commercial vr",
      "The e-commerce industry has seen great transformations since its inception":
        "The e-commerce industry has seen great transformations since its inception",
      "Games VR": "Games VR",
      "Movies VR": "Movies VR",
      "Community VR": "Community VR",
      "From our studio in Ha Noi, we explore the intersection of creativity and technology":
        "From our studio in Ha Noi, we explore the intersection of creativity and technology",
      "We're here to help": "We're here to help",
      "Contact one of our experts to have a chat about how Virtual, Augmented and Mixed Reality can help you achieve your goals":
        "Contact one of our experts to have a chat about how Virtual, Augmented and Mixed Reality can help you achieve your goals",
      Name: "Name",
      "Phone number": "Phone number",
      Content: "Content",
      "Frequently asked questions": "Frequently asked questions",
      "Why should we meet in VR, when we can use Zoom / Team, Miro / Mural?":
        "Why should we meet in VR, when we can use Zoom / Team, Miro / Mural?",
      "Can we do an event using SAVA Meeting?":
        "Can we do an event using SAVA Meeting?",
      "Which headsets do you support?": "Which headsets do you support?",
      "Can people join from a tablet or phone?":
        "Can people join from a tablet or phone?",
      "Can invite guests, if so will they be licensed?":
        "Can invite guests, if so will they be licensed?",
      "Enter phone number/email": "Enter phone number/email",

      "Contact info": "Contact info",
    },
  },
  vn: {
    translation: {
      home: "trang chủ",
      contact: "liên hệ",
      about: "về",
      support: "hỗ trợ",
      "sing in": "đăng nhập",
      Search: "Tìm kiếm",
      "VIRTUAL REALITY": "THỰC TẾ ẢO",
      "Virtual Reality Meeting": "Cuộc họp thực tế ảo",
      " Elevate your organization's virtual presence with MeetinVR. Our platform provides all the tools you need to meet with your team or customers, host events, workshops, and training sessions in the metaverse.":
        "Nâng cao sự hiện diện ảo của tổ chức bạn với MeetinVR. Nền tảng của chúng tôi cung cấp tất cả các công cụ bạn cần để gặp gỡ nhóm hoặc khách hàng của mình, tổ chức các sự kiện, hội thảo và các buổi đào tạo trong metaverse.",
      "get started": "bắt đầu",
      "LEARN MORE": "TÌM HIỂU THÊM",
      "NEEDED FEATURES": "TÍNH NĂNG CẦN THIẾT",
      "OUR MEETING ROOM": "PHÒNG HỌP CỦA CHÚNG TÔI",
      "Access to multiple Meeting VR teams":
        "Quyền truy cập vào nhiều nhóm VR cuộc họp",
      "Choose from preset avatars or Avatar generated from selfie":
        "Chọn từ các hình đại diện đặt trước hoặc Hình đại diện được tạo từ ảnh tự chụp",
      "Meeting moderator panel": "Bảng điều hành cuộc họp",
      "Persistent content in rooms": "Nội dung liên tục trong phòng",
      "Save and export notes, screenshots & whiteboards":
        "Lưu và xuất ghi chú, ảnh chụp màn hình & bảng trắng",
      "Use whiteboards and sticky notes": "Sử dụng bảng trắng và ghi chú dán",
      "Hand Tracking technique (simulating virtual hand activity)":
        "Kỹ thuật Hand Tracking (mô phỏng hoạt động tay ảo)",
      "Display remote desktop activity (Remote desktop streaming) to VR space":
        "Hiển thị hoạt động máy tính từ xa (Truyền phát máy tính từ xa) lên không gian VR",
      "Using Voice zones": "Sử dụng vùng giọng nói",
      "Upload and use your own files (images, videos, documents, 360 and 3D files)":
        "Tải lên và sử dụng các tệp của riêng bạn (hình ảnh, video, tài liệu, tệp 360 và 3D)",
      "Schedule meetings": "Lên lịch họp",
      "USE CASES": "TRƯỜNG HỢP SỬ DỤNG",
      "Organize memorable events to stand out to your customers & partners. We help create experiences that embody your brand and meet your needs. Ideal for small groups “VIP” style events, product launches, celebrations, team-building & more":
        "Tổ chức các sự kiện đáng nhớ để nổi bật với khách hàng và đối tác của bạn. Chúng tôi giúp tạo ra những trải nghiệm thể hiện thương hiệu của bạn và đáp ứng nhu cầu của bạn. Lý tưởng cho các sự kiện theo phong cách “VIP” theo nhóm nhỏ, ra mắt sản phẩm, lễ kỷ niệm, xây dựng đội ngũ, v.v.",
      "Platform for renting meeting rooms, virtual offices with integrated shop/advertising/ other virtualization services":
        "Nền tảng cho thuê phòng họp, văn phòng ảo tích hợp shop/quảng cáo/các dịch vụ ảo hóa khác",
      "Organize memorable events to stand out to your customers & partners. We help create experiences that embody your brand and meet your needs.":
        "Tổ chức các sự kiện đáng nhớ để nổi bật với khách hàng và đối tác của bạn. Chúng tôi giúp tạo ra những trải nghiệm thể hiện thương hiệu của bạn và đáp ứng nhu cầu của bạn.",
      "R&D and setup team": "Nhóm R&D và thiết lập",
      "SAVA Meeting Solution": "Giải pháp cuộc họp SAVA",
      "SAVA Education": "Giáo dục SAVA",
      "SAVA Healthcare services": "Dịch vụ chăm sóc sức khỏe của SAVA",
      "SAVA Media & Entertainment": "SAVA Truyền thông & Giải trí",
      "SAVA Retails & Real estate": "SAVA Bán lẻ & Bất động sản",
      "SAVA Metaverse": "SAVA Metaverse",
      "SAVA Social": "SAVA xã hội",
      "Virtual reality support & enhance outdoor":
        "Hỗ trợ thực tế ảo & nâng cao ngoài trời",
      "Alternative VR device management options":
        "Tùy chọn quản lý thiết bị VR thay thế",
      "Increasing Innovation Among Your Remote Workers":
        "Tăng cường đổi mới giữa những người làm việc từ xa của bạn",
      SUBSCRIBE: "ĐẶT MUA",
      "Subscribe to our newsletter for latest updates":
        "Đăng ký nhận bản tin của chúng tôi để cập nhật thông tin mới nhất",
      "SAVA Metaverse Meeting": "Cuộc họp Metaverse SAVA",
      "Century Tower Building, Times City, Minh Khai Street, Vinh Tuy Ward, Hai Ba Trung District, Hanoi":
        "Tòa nhà Century Tower, Times City, Phố Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, ​​Hà Nội",
      Address: "Địa Chỉ",
      Email: "Email",
      Phone: "Điện thoại",
      "contact@savameta.com": "contact@savameta.com",
      "+84969877888": "+84969877888",
      "Web-based persistent multiuser 3D environment":
        "Môi trường 3D nhiều người dùng liên tục dựa trên web",
      "Custom corporate avatar design and animations":
        "Thiết kế hình đại diện và hình ảnh động của công ty tùy chỉnh",
      "Manage content anytime with our CMS system":
        "Quản lý nội dung mọi lúc với hệ thống CMS của chúng tôi",
      "Custom designed 3D environment (design & size)":
        "Môi trường 3D được thiết kế tùy chỉnh (thiết kế & kích thước)",
      "3D product presentation": "Trình, bày sản phẩm 3D",
      "A fully custom corporate metaverse world":
        "MỘT THẾ GIỚI METAVERSE CÔNG TY HOÀN TOÀN TÙY CHỈNH",
      "OUR SERVICES": "DỊCH VỤ CỦA CHÚNG TÔI",
      "Experience the World Like Never Before":
        "Trải nghiệm thế giới chưa từng có",
      "Commercial vr": "Thương mại thực tế ảo",
      "The e-commerce industry has seen great transformations since its inception":
        "Ngành thương mại điện tử đã chứng kiến ​​những biến đổi lớn kể từ khi thành lập",
      "Games VR": "Trò chơi thực tế ảo",
      "Movies VR": "Phim thực tế ảo",
      "Community VR": "Cộng đồng thực tế ảo",
      "From our studio in Ha Noi, we explore the intersection of creativity and technology":
        "Từ studio của chúng tôi ở Hà Nội, chúng tôi khám phá sự giao thoa giữa sáng tạo và công nghệ",
      "We're here to help": "Chúng tôi ở đây để giúp đỡ",
      "Contact one of our experts to have a chat about how Virtual, Augmented and Mixed Reality can help you achieve your goals":
        "Liên hệ với một trong những chuyên gia của chúng tôi để trò chuyện về cách Thực tế ảo, Tăng cường và Hỗn hợp có thể giúp bạn đạt được mục tiêu của mình",
      Name: "Tên",
      "Phone number": "Số điện thoại",
      Content: "Nội dung",
      "Frequently asked questions": "Các câu hỏi thường gặp",
      "Why should we meet in VR, when we can use Zoom / Team, Miro / Mural?":
        "Tại sao chúng ta nên gặp nhau trong VR, khi chúng ta có thể sử dụng Zoom / Team, Miro / Mural?",
      "Can we do an event using SAVA Meeting?":
        "Chúng tôi có thể tổ chức một sự kiện bằng Cuộc họp SAVA không?",
      "Which headsets do you support?": "Bạn hỗ trợ tai nghe nào?",
      "Can people join from a tablet or phone?":
        "Mọi người có thể tham gia từ máy tính bảng hoặc điện thoại không?",
      "Can invite guests, if so will they be licensed?":
        "Mời khách được không, có được cấp phép không?",
      "Enter phone number/email": "Nhập số điện thoại/email",
      "Contact info": "THÔNG TIN LIÊN LẠC",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
