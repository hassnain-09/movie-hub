import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import CountrySelector from "./components/CountrySelector";

function App() {
  const [selectedGenre, setSelectGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={4}>
            <GenreList
              onSelectGenre={(genre) => setSelectGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <CountrySelector />
          <GameGrid genre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
