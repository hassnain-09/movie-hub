import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
