import { useEffect, useState } from "react";
import APIClient from "../services/api-client";
import { CanceledError } from "axios";
import { MovieQuery } from "../App";

export interface Movie {
    id: number;
    original_title: string;
    overview: string;
    poster_path:string;
    genre_ids:number[];
    vote_average:number;
    title:string
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
  

const useMovies = (movieQuery:MovieQuery)=>{
    const [error, setError] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading,setLoading] = useState(true)
  
    useEffect(() => {
      setLoading(true)
      const controller = new AbortController();
  
      if(movieQuery.search_input == null)
        {
          APIClient.get<FetchMovieResponse>("discover/movie?api_key=0b15dd3d54bf72edddc232b20326bb9f&?language=en-US", { signal: controller.signal,params:{
            with_genres:movieQuery.genre?.id,
            with_origin_country: movieQuery.country?.iso_3166_1,
            sort_by:movieQuery.order_by_option? (movieQuery.order_by_option=="title"?movieQuery.order_by_option+'.asc':movieQuery.order_by_option+'.desc'):''
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
        }else{
          APIClient.get<FetchMovieResponse>("search/movie?api_key=0b15dd3d54bf72edddc232b20326bb9f", { signal: controller.signal,params:{
           query:movieQuery.search_input
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
        }
  
      return () => controller.abort();
    }, [movieQuery]);



    return {error,movies,isLoading}
}

export default useMovies