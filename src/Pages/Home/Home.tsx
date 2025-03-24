
import MovieList from "../../Components/MovieCard/MovieList";
import Slider from "../../Components/Slides/Slider";
import LayoutMain from "../../Layouts/LayoutMain/LayoutMain";

const Home = () => {

    

    return (
        <LayoutMain>
            <div className="w-[786px] flex flex-col gap-5">
                <Slider />
                <MovieList />
            </div>
        </LayoutMain>
    );
};

export default Home;
