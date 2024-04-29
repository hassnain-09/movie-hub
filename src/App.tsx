import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import CountrySelector from "./components/CountrySelector";
import { Country } from "./hooks/useCountires";
import OrderBySelector from "./components/OrderBySelector";

export interface MovieQuery {
  genre: Genre | null;
  country: Country | null;
  order_by_option: string | null;
}

function App() {
  // const [selectedGenre, setSelectGenre] = useState<Genre | null>(null);
  // const [selectedCountry, setSelectCountry] = useState<Country | null>(null);
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
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
              onSelectGenre={(genre) => setMovieQuery({ ...movieQuery, genre })}
              selectedGenre={movieQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack paddingX={3} marginBottom={2}>
            <CountrySelector
              onSelectedCountry={(country) =>
                setMovieQuery({ ...movieQuery, country })
              }
              selectedCountry={movieQuery.country}
            />
            <OrderBySelector
              selectedOrderByOption={movieQuery.order_by_option}
              onOrderOptionSelect={(order_by_option) =>
                setMovieQuery({ ...movieQuery, order_by_option })
              }
            />
          </HStack>
          <GameGrid movieQuery={movieQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
