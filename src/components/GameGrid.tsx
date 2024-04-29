import { SimpleGrid } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import useGenres from "../hooks/useGenres";

import { MovieQuery } from "../App";

interface props {
  movieQuery: MovieQuery;
}

const GameGrid = ({ movieQuery }: props) => {
  const { error, movies, isLoading } = useMovies(movieQuery);
  const { data: genres } = useGenres();
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
            <MovieCardContainer key={item}>
              <MovieCardSkeleton />
            </MovieCardContainer>
          ))}
        {movies &&
          movies.map((movie) => (
            <MovieCardContainer key={movie.id}>
              <MovieCard movie={movie} genres={genres} />
            </MovieCardContainer>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
