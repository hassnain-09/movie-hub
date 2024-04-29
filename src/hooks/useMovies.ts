import { useEffect, useState } from "react";
import APIClient from "../services/api-client";
import { CanceledError } from "axios";
import { Country } from "./useCountires";

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

  export interface Genre
  {
    id:number;
    name:string;
  }
  

const useMovies = (genre:Genre | null,country:Country | null)=>{
    const [error, setError] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading,setLoading] = useState(true)
  
    useEffect(() => {
      setLoading(true)
      const controller = new AbortController();
  
      APIClient.get<FetchMovieResponse>("discover/movie?api_key=0b15dd3d54bf72edddc232b20326bb9f&?language=en-US", { signal: controller.signal,params:{
        with_genres:genre? genre.id:'',
        with_origin_country: country?.iso_3166_1,
      } })
        .then((res) => {
          setMovies(res.data.results);
          setLoading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(`${err}`);
          setLoading(false)
        });
  
      return () => controller.abort();
    }, [genre,country]);



    return {error,movies,isLoading}
}

export default useMovies