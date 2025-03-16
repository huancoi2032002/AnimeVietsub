

import { Link } from 'react-router-dom';
import { CameraIcon, ClapperBoardIcon, ClockIcon, PlayIcon, StarIcon, UserIcon } from '../../assets';
import Solo from '../../assets/solo.jpg';
import { Movie } from '../../Store/Movie/Movie';
import Button from '../Button/Button';



interface SliderProps {
    movie: Movie
}

const Slider = (props: SliderProps) => {

    const movie: Movie = {
        movieId: "1",
        img: Solo, // Hoặc dùng link ảnh online
        name: "Solo Leveling 2nd Season - Tôi Thăng Cấp Một Mình Mùa 2",
        views: 1000000,
        rating: 9.5,
        episode: 24,
        des: "Solo Leveling (Season 2): Arise From The Shadow tiếp tục câu chuyện của Sung Jinwoo, người từng được biết đến là 'Thợ săn yếu nhất của toàn nhân loại'. Sau khi sở hữu sức mạnh chưa từng có để được thăng cấp trong một hầm ngục, Jinwoo đã trở thành Vua Bóng Tối và có khả năng điều khiển một đội quân hùng hậu. Từ đây, anh chàng bắt đầu hành trình mới với hy vọng chữa khỏi bệnh cho mẹ mình.",
        studio: "Ufotable",
        showtimes: "2024-04-10",
        status: "Ongoing",
        category: ["Action", "Fantasy"],
        director: "Haruo Sotozaki",
        country: "Japan",
        followers: 500000,
        duration: "24 min",
        quality: "FHD",
        language: "Japanese",
        season: "Spring 2024",
        actor: ["Tokuda", "Emi Fukada"]
    };


    return (
        <div className="w-[786px] rounded-[4px] overflow-hidden relative ">
            <Link to="">
                <img src={Solo} className="w-full h-[350px] object-cover" />
            </Link>
            <div className="z-30 w-[450px] h-full bg-black/40 absolute top-0 p-[16px] flex flex-col gap-3">
                <div className="w-full text-[20px]">
                    {movie.name}
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-1 items-center">
                        <StarIcon className="w-3 h-3 fill-[#F5EC42]" />
                        <span className="text-sm text-[#F5EC42]">{movie.rating}</span>
                    </div>
                    <div className="flex gap-1">
                        <ClockIcon className="w-4 fill-white/30"/>
                        <span className="text-sm text-white-main">{String(movie.showtimes)}</span>
                    </div>
                    <div className="text-xs bg-[#B71C1CE6] p-1 rounded-full">
                        {movie.quality}
                    </div>
                </div>
                <span className="text-sm line-clamp-2 text-white-main">{movie.des}</span>
                <div className="">
                    <div className="flex items-center gap-2">
                        <CameraIcon className="w-4 h-4 fill-[#F5EC42]" />
                        <span className="text-white-main text-sm">Studio: {movie.studio}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ClapperBoardIcon className="w-4 h-4 fill-[#F5EC42]" />
                        <span className="text-white-main text-sm block truncate">Thể loại: {movie.category?.join(", ")}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center">
                        <UserIcon className="w-4 h-4 fill-white-main" />
                    </div>
                    <span className="text-sm text-white-main">Diễn viên: {movie.actor?.join(", ")}</span>
                </div>
                <Button icon={<PlayIcon className="w-4 h-4 fill-white"/>} title="Xem phim" width="120"/>
            </div>
        </div>
    );
};

export default Slider;