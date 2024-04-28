import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function MovieCardSkeleton() {
  return (
    <Card borderRadius={10} overflow={"hidden"} width="300px">
      <Skeleton width="300px" height="300px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
}

export default MovieCardSkeleton;
