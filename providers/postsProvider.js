import { useEffect, useState, useCallback } from "react";
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
      });
    }
  }, []);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <PostsContext.Provider value={{ posts, isLoading, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
