import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
