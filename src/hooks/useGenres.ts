
import useData from "./useData";
  export interface Genre
  {
    id:number;
    name:string;
  }
  

const useGenres = ()=> useData<Genre>('genre/movie/list?api_key=0b15dd3d54bf72edddc232b20326bb9f')

export default useGenres