import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

function GenreListSkeleton() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 43];
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item} marginBottom={2}>
          <HStack>
            <Skeleton width="32px" height="32px" />
            <Skeleton height="20px" width="170px" variant="text"></Skeleton>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreListSkeleton;
