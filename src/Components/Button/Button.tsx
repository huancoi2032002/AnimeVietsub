import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
    width?: string; // Có thể là số hoặc string tùy theo nhu cầu
    title?: string;
    link?: string;
    icon?: React.ReactNode
};

const Button: React.FC<ButtonProps> = ({ width, title, link, icon }) => {
    return (
        <Link
            to={link ?? "/"}
            className="inline-block bg-[#b71c1c] text-white py-2 rounded-md px-4 text-[13px] h-10 hover:bg-white/20"
            style={width ? { width: `${width}px` } : {}}
        >
            <div className="h-full flex items-center gap-2">
                {icon}
                <span className="w-full h-full flex items-center">{title}</span>
            </div>
        </Link>
    );
};

export default Button;
