import { SimpleGrid } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";

const GameGrid = () => {
  const { error, movies, genres, isLoading } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((item) => (
            <MovieCardContainer>
              <MovieCardSkeleton key={item} />
            </MovieCardContainer>
          ))}
        {movies &&
          movies.map((movie) => (
            <MovieCardContainer>
              <MovieCard key={movie.id} movie={movie} genres={genres} />
            </MovieCardContainer>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
