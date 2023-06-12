import { Box, FlatList, Heading, VStack, Skeleton, Divider } from "native-base";
import PostItem from "../../components/PostItem";
import usePosts from "../../hooks/usePosts";
import { useCallback } from "react";

const HomeScreen = () => {
  const { posts, isLoading } = usePosts();
  const dummyNums = Array.from({ length: 10 }, (value, index) => index);

  const renderItem = useCallback(
    ({ item, index }) => <PostItem {...item} key={index} link="Post" />,
    []
  );

  return (
    <Box pt="1">
      {isLoading ? (
        <VStack flex="3" space="4" p="5">
          {dummyNums.map((num) => (
            <Skeleton key={num} px="4" my="4" rounded="lg" />
          ))}
        </VStack>
      ) : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item, index) => `item-${item.id}-${index}`}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          removeClippedSubviews
          ItemSeparatorComponent={<Divider bg="gray.300" my="1" />}
          ListHeaderComponent={
            <Box px="12" pt="4">
              <Heading size="lg" color={"cyan.600"}>
                Posts List
              </Heading>
            </Box>
          }
        />
      )}
    </Box>
  );
};
export default HomeScreen;
