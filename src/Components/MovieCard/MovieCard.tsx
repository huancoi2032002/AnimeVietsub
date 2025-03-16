import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../Store/Movie/Movie";
import { StarIcon } from "../../assets";
import { PlayIcon } from "../../assets"; // Giả sử bạn có một icon Play

type MovieCardProps = {
    width?: string;
    height?: string;
    isTitleLayer?: boolean;
    movie: Movie;
    cardSize: "Small" | "Normal";
};

const MovieCard: React.FC<MovieCardProps> = ({ width, height, isTitleLayer, movie, cardSize }) => {
    // Kích thước mặc định theo cardSize
    const defaultSize = cardSize === "Small" ? { width: 120, height: 180 } : { width: 140, height: 260 };

    return (
        <div
            className="w-auto h-auto group"
            style={{
                width: width ? `${width}px` : `${defaultSize.width}px`,
                height: height ? `${height}px` : `${defaultSize.height}px`,
            }}
        >
            <Link to="">
                <div className="w-full relative ">
                    {/* Ảnh phim */}
                    <img src={movie.img} className="w-full h-full object-cover rounded-[4px]" />

                    {/* Lớp overlay hiển thị khi hover */}
                    <div className="absolute inset-0 bg-black/30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[4px]">
                        <PlayIcon className="w-10 h-10 text-white" />
                    </div>

                    {/* Thông tin đánh giá */}
                    <div className="px-4 py-[0.5rem] z-50 bg-black/65 absolute flex items-center text-[11px] top-1 left-2 rounded-full">
                        <StarIcon className="w-3 h-3 fill-[#F5EC42]" />
                        {movie.rating}
                    </div>

                    {/* Thông tin tập phim */}
                    <span className="bg-[#B71C1CE6] text-[10px] w-10 h-10 rounded-full absolute top-1 right-2 flex justify-center items-center">
                        Tập {movie.episode}
                    </span>

                    {/* Tên phim */}
                    {isTitleLayer && (
                        <span className="w-full h-auto block text-[12px] z-40 absolute bottom-2 text-center bg-black/65 ">
                            {movie.name}
                        </span>
                    )}
                </div>

                {/* Thông tin phim */}
                {!isTitleLayer && (
                    <div className="w-full">
                        <span className="text-sm w-full block truncate text-center group-hover:text-white/20">{movie.name}</span>
                        <span className="w-full text-xs text-white/20 font-extralight text-center block">
                            Lượt xem: {movie.followers?.toLocaleString()}
                        </span>
                    </div>
                )}
            </Link>
        </div>
    );
};

export default MovieCard;
