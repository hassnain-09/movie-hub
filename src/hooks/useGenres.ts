import { useEffect, useState } from "react";
import APIClient from "../services/api-client";
import { CanceledError } from "axios";


  
 
  interface FetchGenreRespone
  {
    genres:Genre[]
  }

  export interface Genre
  {
    id:number;
    name:string;
  }
  

const useGenres = ()=>{
    const [error, setError] = useState("");
    const [genres,setGenres] = useState<Genre[]>([])
    const [isLoading,setLoading] = useState(true)
  
    useEffect(() => {
      setLoading(true)
      const controller = new AbortController();
  
       APIClient.get<FetchGenreRespone>('genre/movie/list?api_key=0b15dd3d54bf72edddc232b20326bb9f').then(res=>{
        setGenres(res.data.genres)
        setLoading(false)
       }).catch(err=>{
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
       })
        
  
      return () => controller.abort();
    }, []);



    return {error,genres,isLoading}
}

export default useGenres