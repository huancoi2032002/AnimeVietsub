import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logoz.webp";
import { ArrowUpIcon, ElonMustIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "../../assets";
import './Footer.scss';

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const menuItems = useMemo(() => [
        { label: "Xem phim", path: "/play" },
        { label: "Donate♥️", path: "/donate" },
        { label: "Chat Anime/Discord", path: "/chat" },
        { label: "Thuật ngữ", path: "/terminology" },
        { label: "Group thảo luận", path: "/group" },
    ], []);

    return (
        <div className="w-full flex justify-center">
            <div className="w-[1142px] bg-[#00000099] px-5 rounded-[4px]">
                <div className="h-[65px] w-full flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="mr-8"><img src={Logo} className="w-[105px] " /></div>
                        <div className="text-[#FFFFFF] text-[13px] font-medium h-full flex gap-2">
                            {menuItems.map((item) => (
                                <div
                                    key={item.path}
                                    className="relative px-2 h-full item-nav"
                                >
                                    <Link
                                        to={item.path}
                                        className={`flex items-center h-full border-b-2 gap-2 ${currentPath === item.path ? "border-b-[#b5e745]" : "border-b-transparent"}`}
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#263238] flex items-center justify-center rounded-[4px] item-footer"><Link to="https://www.facebook.com/Huan.Nguyen.LD" className=""><FacebookIcon className="w-3 fill-[#78909c]/50" /></Link></div>
                        <div className="w-10 h-10 bg-[#263238] flex items-center justify-center rounded-[4px] item-footer"><Link to="" className=""><InstagramIcon className="w-5 fill-[#78909c]/50"/></Link></div>
                        <div className="w-10 h-10 bg-[#263238] flex items-center justify-center rounded-[4px] item-footer"><Link to="" className=""><ElonMustIcon className="w-5 fill-[#78909c]/50"/></Link></div>
                        <div className="w-10 h-10 bg-[#263238] flex items-center justify-center rounded-[4px] item-footer"><Link to="" className=""><YoutubeIcon className="w-5 fill-[#78909c]/50"/></Link></div>
                        <div className="w-10 h-10 flex items-center justify-center rounded-[4px] item-footer bg-[#b5e745]"><ArrowUpIcon className="w-4 fill-[#FFF]"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer