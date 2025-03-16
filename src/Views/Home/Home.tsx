import MovieList from "../../Components/MovieCard/MovieList";
import Slider from "../../Components/Slides/Slider";
import LayoutMain from "../../Layouts/LayoutMain/LayoutMain";
import ContentRight from "./Component/ContentRight/ContentRight";

const Home = () => {

    return (
        <LayoutMain>
            <div className="w-full flex justify-between">
                <div className="w-[786px] flex flex-col gap-5">
                    <Slider />
                    <MovieList />
                </div>
                <div className="w-[300px]">
                    <ContentRight />
                </div>
            </div>
        </LayoutMain>
    );
};

export default Home;
