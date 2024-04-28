import { useEffect, useState } from "react";
import APIClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Movie {
    id: number;
    original_title: string;
    overview: string;
    poster_path:string;
    genre_ids:number[];
    vote_average:number;
  }
  
  interface FetchMovieResponse {
    page: number;
    results: Movie[];
  }
  interface FetchGenreRespone
  {
    genres:Genre[]
  }

  export interface Genre
  {
    id:number;
    name:string;
  }
  

const useMovies = ()=>{
    const [error, setError] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres,setGenres] = useState<Genre[]>([])
    const [isLoading,setLoading] = useState(true)
  
    useEffect(() => {
      setLoading(true)
      const controller = new AbortController();
  
      APIClient.get<FetchMovieResponse>("discover/movie?api_key=0b15dd3d54bf72edddc232b20326bb9f&?language=en-US", { signal: controller.signal })
        .then((res) => {
          setMovies(res.data.results);
          return APIClient.get<FetchGenreRespone>('genre/movie/list?api_key=0b15dd3d54bf72edddc232b20326bb9f')
        }).then((res)=>{
             setGenres(res.data.genres)
             setLoading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(`${err}`);
          setLoading(false)
        });
  
      return () => controller.abort();
    }, []);



    return {error,movies,genres,isLoading}
}

export default useMovies