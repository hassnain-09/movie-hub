import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { error, movies } = useGames();
  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {movies &&
          movies.map((movie) => <li key={movie.id}>{movie.original_title}</li>)}
      </ul>
    </div>
  );
};

export default GameGrid;
