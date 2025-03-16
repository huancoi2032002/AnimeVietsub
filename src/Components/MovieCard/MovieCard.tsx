
import React from "react"
import { Link } from "react-router-dom"
import { Movie } from "../../Store/Movie/Movie"
import { StarIcon } from "../../assets";

type MovieCardProps = {
    width?: string;
    height?: string;
    isTitleLayer?: boolean;
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ width, height, isTitleLayer, movie }) => {
    return (
        <div
            className="w-auto h-auto"
        >
            <Link to="">
                <div className="w-[140px]"
                    style={{
                        ...(width ? { width: `${width}px` } : {}),
                        ...(height ? { height: `${height}px` } : {})
                    }}
                >
                    <div className="w-full relative">
                        <img src={movie.img} className="w-full" />
                        <div className="px-4 py-[0.5rem] z-50 bg-black/65 absolute flex items-center text-[11px] top-1 left-2 rounded-full">
                            <StarIcon className="w-3 h-3 fill-[#F5EC42]" />
                            {movie.rating}
                        </div>
                        <span className="bg-[#B71C1CE6] text-[10px] text-wrap w-10 h-10 rounded-full absolute top-1 right-2 flex justify-center items-center">Tập {movie.episode}</span>
                        {isTitleLayer && (
                            <span className="w-full h-auto block text-[12px] z-40 absolute bottom-2 text-center bg-black/65">{movie.name}</span>
                        )}
                    </div>
                    <div className="w-full">
                        <span className="text-sm w-full block truncate text-center">
                            {movie.name}
                        </span>
                        <span className="w-full text-xs text-white/20 font-extralight text-center block">Lượt xem: {movie.followers?.toLocaleString()}</span>
                    </div>

                </div>
            </Link>
        </div>
    )
}

export default MovieCard