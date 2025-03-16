import MovieCard from "../../Components/MovieCard/MovieCard";
import LayoutMain from "../../Layouts/LayoutMain/LayoutMain";
import { Movie } from "../../Store/Movie/Movie";
import Image from "../../assets/anime.jpg";

const Home = () => {
    // Tạo một object Movie giả lập
    const movie: Movie = {
        movieId: "1",
        img: Image, // Hoặc dùng link ảnh online
        name: "Nhà Có 3 Vu Nữ",
        originalName: "Amagami-san Chi no Enmusubi, Tying the Knot with an Amagami Sister",
        views: 1000000,
        rating: 9.5,
        episode: 240,
        des: "Uryuu Kamihate chuyển đến Kyoto và tình cờ sống chung với 3 chị em Miko trong một ngôi đền. Tuy vậy cậu lại là một người không tin vào thần linh mà chỉ tin tưởng bản thân mình, chuyện gì sẽ xảy đến với Uryuu khi xung quanh cậu là 3 chị em vu nữ xinh đẹp đây?",
        studio: "Drive",
        showtimes: "2024-04-10",
        status: "Ongoing",
        category: ["Action", "Fantasy"],
        director: "Haruo Sotozaki",
        country: "Japan",
        followers: 500000,
        duration: "24 min",
        quality: "HD",
        language: "Japanese",
        season: "Spring 2024",
    };

    return (
        <LayoutMain>
            <div>
                {/* Truyền object movie vào MovieCard */}
                <MovieCard movie={movie} />
            </div>
        </LayoutMain>
    );
};

export default Home;
