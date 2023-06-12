import { Center } from "native-base";
import PostForm from "../../components/PostForm";

const PostItem = ({ route }) => {
  return (
    <Center flex={1}>
      <PostForm {...route.params} />
    </Center>
  );
};

export default PostItem;
