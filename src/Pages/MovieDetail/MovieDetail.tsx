import LayoutMain from "../../Layouts/LayoutMain/LayoutMain";
import Solo from '../../assets/solo.jpg';
import Solo1 from '../../assets/solo1.jpg';
import { useState, useCallback } from "react";
import MoviePoster from "./Component/MoviePoster";
import { Movie } from "../../Store/Movie/Movie";

const MovieDetail = () => {

    const [isSavedMovie, setIsSavedMovie] = useState(false);

    const handleSaveMovie = useCallback(() => {
        setIsSavedMovie(prev => !prev);
        console.log("Đã lưu phim");
    }, []);

    const movieData: Movie = {
        movieId: "1",
        img: `${Solo1}`,
        imgPoster: `${Solo}`,
        name: "Solo Leveling 2nd Season - Tôi Thăng Cấp Một Mình Mùa 2",
        subName: "Solo Leveling SS2, Ore dake Level Up na Ken Season 2: Arise from the Shadow, Solo Leveling Season 2: Arise from the Shadow, Solo Leveling Second Season",
        des: "Solo Leveling (Season 2): Arise From The Shadow tiếp tục câu chuyện của Sung Jinwoo, người từng được biết đến là 'Thợ săn yếu nhất của toàn nhân loại'. Sau khi sở hữu sức mạnh chưa từng có để được thăng cấp trong một hầm ngục, Jinwoo đã trở thành Vua Bóng Tối và có khả năng điều khiển một đội quân hùng hậu. Từ đây, anh chàng bắt đầu hành trình mới với hy vọng chữa khỏi bệnh cho mẹ mình.",
        views: 1200000,
        rating: 9.5,
        episode: 24,
        studio: "A-1 Pictures",
        showtimes: "2024-07-10",
        status: "Ongoing",
        category: ["Action", "Fantasy"],
        director: "Shunsuke Nakashige",
        country: "Japan",
        followers: 500000,
        duration: "24 min/ep",
        quality: "FHD",
        language: "Japanese",
        season: "2",
        actor: ["Taito Ban", "Genta Nakamura"],
    };

    return (
        <LayoutMain>
            <div>
                <MoviePoster movie={movieData} isSavedMovie={isSavedMovie} handleSaveMovie={handleSaveMovie} />
            </div>
        </LayoutMain >
    );
};

export default MovieDetail;