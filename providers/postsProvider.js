import { useEffect, useState, useCallback, useMemo } from "react";
import { useToast } from "native-base";
import PostsContext from "../contexts/postsContext";
import axiosInstance from "../axios";

const PostsProvider = ({ children }) => {
  const toast = useToast();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.get("/posts");
      setPosts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.show({
        description: "Something wrong happened",
        bg: "danger.500",
        duration: "2000",
      });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const contextState = useMemo(
    () => ({
      posts,
      setPosts,
      isLoading,
    }),
    [posts, setPosts, isLoading]
  );
  return (
    <PostsContext.Provider value={contextState}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
