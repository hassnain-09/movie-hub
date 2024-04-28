import { SimpleGrid } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const GameGrid = () => {
  const { error, movies, genres, isLoading } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="10px"
      >
        {isLoading && skeletons.map((item) => <MovieCardSkeleton key={item} />)}
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} genres={genres} />
          ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
