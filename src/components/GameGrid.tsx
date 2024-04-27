import { useEffect, useState } from "react";
import APIClient from "../assets/services/api-client";

interface Movie {
  id: number;
  original_title: string;
  overview: string;
}

interface FetchMovieResponse {
  page: number;
  results: Movie[];
}

const GameGrid = () => {
  const [error, setError] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    APIClient.get<FetchMovieResponse>("")
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        setError(`${err} this is error`);
      });

    return () => controller.abort();
  }, []);
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
