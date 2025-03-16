import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logoz.webp";
import { ChevronDown } from "../../assets";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { useState, useRef } from "react";
import "./Header.scss";

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const hideTimeout = useRef<NodeJS.Timeout | null>(null); // Dùng useRef để tránh reset giá trị

    const handleMouseEnter = (path: string) => {
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        setOpenDropdown(path);
    };

    const handleMouseLeave = () => {
        if (openDropdown) {
            hideTimeout.current = setTimeout(() => setOpenDropdown(null), 500);
        }
    };

    const menuItems = useMemo(() => [
        { label: "TRANG CHỦ", path: "/" },
        {
            label: "DẠNG ANIME",
            path: "/anime",
            hasDropdown: true,
            options: [
                { label: "TV Series", path: "/anime/tv" },
                { label: "Movie", path: "/anime/movie" },
                { label: "OVA", path: "/anime/ova" }
            ]
        },
        {
            label: "TOP ANIME",
            path: "/top",
            hasDropdown: true,
            options: [
                { label: "Top All Time", path: "/top/alltime" },
                { label: "Top Seasonal", path: "/top/seasonal" },
                { label: "Most Popular", path: "/top/popular" }
            ]
        },
        {
            label: "THỂ LOẠI",
            path: "/genre",
            hasDropdown: true,
            options: [
                { label: "Action", path: "/genre/action" },
                { label: "Romance", path: "/genre/romance" },
                { label: "Comedy", path: "/genre/comedy" },
                { label: "Fantasy", path: "/genre/fantasy" }
            ]
        },
        { label: "THƯ VIỆN", path: "/library" },
        { label: "LỊCH CHIẾU", path: "/schedule" }
    ], []);

    return (
        <div className="w-full h-[66px] bg-[#00000099] flex justify-center items-center">
            <div className="w-[1142px] flex items-center justify-between h-[60px]">
                <div className="w-auto">
                    <img src={Logo} className="w-[105px] object-cover" />
                </div>
                <div className="text-[#FFFFFF] text-[13px] font-medium h-full flex">
                    {menuItems.map((item) => (
                        <div
                            key={item.path}
                            className="relative px-2 h-full item-nav"
                            onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.path)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                to={item.path}
                                className={`flex items-center h-full border-b-2 gap-2 ${currentPath === item.path ? "border-b-[#b5e745]" : "border-b-transparent"}`}
                            >
                                {item.label}
                                {item.hasDropdown && <ChevronDown className="w-3 fill-[#b5e745]" />}
                            </Link>
                            {item.hasDropdown && item.options && openDropdown === item.path && (
                                <div className="dropdown-container w-full" onMouseEnter={() => hideTimeout.current && clearTimeout(hideTimeout.current)} onMouseLeave={handleMouseLeave}>
                                    <Dropdown options={item.options} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex gap-3">
                    <Search />
                    <Button title="Đăng nhập" />
                </div>
            </div>
        </div>
    );
};

export default Header;
