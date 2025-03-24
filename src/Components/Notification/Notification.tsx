import React from "react";
import { BullhornIcon } from "../../assets";

interface NotificationProps {
    icon: string;
    title: string;
    des: string;
    link: string[];
    bgButton: string[];
    titleButton: string[];
}

const ChildNotification: React.FC<NotificationProps> = ({ icon, title, des, link, bgButton, titleButton }) => {
    return (
        <div className="p-3 bg-[#3D3D3D] rounded-md flex justify-between">
            <div className="flex flex-col ">
                <div className="flex items-center gap-2">
                    <span className="text-xl">{icon}</span>
                    <h3 className="text-white font-bold text-lg">{title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{des}</p>
            </div>
            <div className="flex gap-2 items-center">
                {link.map((href, idx) => (
                    <a
                        key={idx}
                        href={href}
                        className="px-3 py-1 text-white rounded text-sm"
                        style={{ backgroundColor: bgButton[idx] }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {titleButton[idx]}
                    </a>
                ))}
            </div>
        </div>
    );
};

const Notification: React.FC = () => {
    const notifications: NotificationProps[] = [
        {
            icon: "📌",
            title: "LINK RÚT GỌN",
            des: "Lưu lại để truy cập khi nhà mạng chặn!",
            link: ["https://bit.ly/animevietsubtv"],
            bgButton: ["#FF4D4D"],
            titleButton: ["bit.ly/animevietsubtv"],
        },
        {
            icon: "🤝",
            title: "CỘNG ĐỒNG",
            des: "Tham gia để cập nhật và ủng hộ AnimeVietsub!",
            link: ["https://www.facebook.com/Huan.Nguyen.LD", "discord"],
            bgButton: ["#4267B2", "#7289DA"],
            titleButton: ["Facebook", "Discord"],
        },
        {
            icon: "🔖",
            title: "KHÔI PHỤC DỮ LIỆU",
            des: "Lấy lịch sử xem & đăng nhập từ tên miền cũ",
            link: ["https://bit.ly/animevietsubtv"],
            bgButton: ["#6ccd21"],
            titleButton: ["Tải Ngay"],
        },
    ];

    return (
        <div className="w-full h-auto bg-[#2D2D2D] p-[10px] relative flex flex-col gap-2 rounded-[4px]">
            <span className="w-7 h-7 rounded-full bg-[#FF0000] flex justify-center items-center" aria-label="Notifications">
                <BullhornIcon className="w-4 h-4 text-white" />
            </span>
            <div className="flex flex-col gap-2 p-5">
                {notifications.map((notification, index) => (
                    <ChildNotification key={index} {...notification} />
                ))}
            </div>
        </div>
    );
};

export default Notification;
