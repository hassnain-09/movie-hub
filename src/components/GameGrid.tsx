import { SimpleGrid } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, movies, genres } = useMovies();
  return (
    <div>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="10px"
      >
        {movies &&
          movies.map((movie) => (
            <GameCard key={movie.id} movie={movie} genres={genres} />
          ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
