import { useEffect, useState } from "react";
import APIClient from "../services/api-client";
import { CanceledError } from "axios";
 
  interface FetchRespone<T>
  {
    genres:T[]
  }


const useData = <T>(endpoint:string)=>{
    const [error, setError] = useState("");
    const [data,setData] = useState<T[]>([])
    const [isLoading,setLoading] = useState(true)
  
    useEffect(() => {
      setLoading(true)
      const controller = new AbortController();
  
       APIClient.get<FetchRespone<T>>(endpoint,{signal:controller.signal}).then(res=>{
        setData(res.data.genres)
        setLoading(false)
       }).catch(err=>{
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
       })
        
  
      return () => controller.abort();
    }, []);



    return {error,data,isLoading}
}


export default useData