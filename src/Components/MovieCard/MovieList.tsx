import { Movies } from "../../Data/Movie";
import MovieCard from "./MovieCard";



interface MovieListProps {

}

const MovieList = (props: MovieListProps) => {

    return (
        <div className="w-[786px] grid grid-cols-5 box-border gap-[22px]">
            {Movies.map(movie => (
                <MovieCard key={movie.movieId} movie={movie} cardSize="Normal" />
            ))}
        </div>
    );
};

export default MovieList;