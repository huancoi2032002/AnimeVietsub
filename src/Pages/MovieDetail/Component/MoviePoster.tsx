import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookmarkIcon, CirClePlayIcon } from "../../../assets";
import Button from "../../../Components/Button/Button";
import { Movie } from "../../../Store/Movie/Movie";

interface MoviePosterProps {
    movie: Movie;
    isSavedMovie: boolean;
    handleSaveMovie: () => void;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ movie, isSavedMovie, handleSaveMovie }) => {

    const [bgImageLoaded, setBgImageLoaded] = useState(false);

    // Tránh flicker
    useEffect(() => {
        const img = new Image();
        img.src = movie.imgPoster || "";
        img.onload = () => setBgImageLoaded(true);
    }, [movie.imgPoster]);

    return (
        <div
            className="w-[786px] h-[422px] rounded-[4px] relative"
            style={{
                backgroundImage: bgImageLoaded ? `url(${movie.imgPoster})` : "none",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% auto",
            }}
        >

            <div className="relative bg-black/50 z-30 top-0 w-full h-full p-5 flex flex-col gap-5 justify-center">
                <div className="flex gap-5 w-full max-w-full h-auto max-h-full">
                    <div className="relative w-[180px] flex-shrink-0">
                        <Link to="" className="cursor-pointer block w-[180px] h-[260px] relative">
                            {/* Ảnh nền */}
                            <img src={movie.img} className="w-full h-full object-cover" loading="lazy" />

                            {/* Nút Play căn giữa */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 border border-white flex items-center justify-center rounded-full bg-black/40">
                                    <CirClePlayIcon className="w-3 fill-white" />
                                </div>
                            </div>

                            {/* Nút XEM PHIM */}
                            <div className="w-full absolute bg-[#FF000099] h-10 text-xl flex items-center justify-center bottom-6">
                                XEM PHIM
                            </div>
                        </Link>

                        {/* Nút lưu phim */}
                        <div
                            className={`absolute top-1 left-1 flex items-center py-1 px-2 gap-1 rounded-[4px] cursor-pointer ${isSavedMovie ? "bg-[#FF4D4D]/80 hover:bg-[#FF4D4D]" : "bg-black/40 hover:bg-black/90"
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleSaveMovie();
                            }}
                        >
                            <div className="flex items-center justify-center">
                                <BookmarkIcon className="w-4 fill-[#FFF]" />
                            </div>
                            <span className="text-[11px]">{isSavedMovie ? "Đã lưu" : "Theo dõi"}</span>
                        </div>
                    </div>

                    <div className="w-full max-w-full overflow-hidden">
                        <div className="w-full flex flex-col gap-[10px] border-b border-white/20">
                            <h1 className="text-[24px] text-[#b5e745] w-full truncate overflow-hidden whitespace-nowrap">
                                {movie.name}
                            </h1>
                            <h2 className="text-[16px] text-white/90 w-full truncate overflow-hidden whitespace-nowrap">
                                {movie.subName}
                            </h2>
                            <div className="max-h-[150px] text-[13px] text-white/60 overflow-hidden line-clamp-5 mb-[20px]">
                                {movie.des}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button title="Phần 1" />
                    <Button title="Phần 2" />
                </div>
            </div>
        </div>
    );
};

export default MoviePoster;
