import { Box, FlatList, VStack, Skeleton } from "native-base";
import PostItem from "../../components/PostItem";
import usePosts from "../../hooks/usePosts";

const renderItem = ({ item, index }) => (
  <PostItem {...item} key={index} link="Post" />
);

const HomeScreen = () => {
  const { posts, isLoading } = usePosts();

  return (
    <Box pt="1">
      {isLoading ? (
        <VStack flex="3" space="4">
          <Skeleton.Text />
        </VStack>
      ) : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </Box>
  );
};
export default HomeScreen;
