import { useEffect, useState } from "react";
import APIClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Movie {
    id: number;
    original_title: string;
    overview: string;
    poster_path:string
  }
  
  interface FetchMovieResponse {
    page: number;
    results: Movie[];
  }
  

const useGames = ()=>{
    const [error, setError] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);
  
    useEffect(() => {
      const controller = new AbortController();
  
      APIClient.get<FetchMovieResponse>("", { signal: controller.signal })
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(`${err}`);
        });
  
      return () => controller.abort();
    }, []);

    return {error,movies}
}

export default useGames