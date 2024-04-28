import { HStack, Icon, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { iconMap } from "./GenreIconList";

function GenreList() {
  const { data } = useGenres();
  return (
    <List>
      {data.map((item) => (
        <ListItem paddingY={1}>
          <HStack>
            <Icon as={iconMap[item.name]} color="gray.500" boxSize={5} />
            <Text fontSize="lg">{item.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
