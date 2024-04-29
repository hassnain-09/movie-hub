import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import APIClient from "../services/api-client";

interface Country
{
    iso_3166_1:string,
    english_name:string,

}

const useCountries = ()=>{
    const [error, setError] = useState("");
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading,setLoading] = useState(true)
  
    useEffect(() => {
      setLoading(true)
      const controller = new AbortController();
  
      APIClient.get("configuration/countries?api_key=0b15dd3d54bf72edddc232b20326bb9f&?language=en-US", { signal: controller.signal })
        .then((res) => {
          setCountries(res.data);
          setLoading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(`${err}`);
          setLoading(false)
        });
  
      return () => controller.abort();
    },[]);



    return {error,countries,isLoading}
}

export default useCountries