import { useEffect, useState, useCallback, useMemo } from "react";
import { useToast } from "native-base";
import PostsContext from "../contexts/postsContext";
import axiosInstance from "../axios";

const PostsProvider = ({ children }) => {
  const toast = useToast();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
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

  const addPost = async (post) => {
    try {
      setIsLoading(true);
      await axiosInstance.post("/posts", post);
      setPosts([post, ...posts]);
      toast.show({
        description: "Post added successfully",
        bg: "success.500",
        duration: "2000",
      });
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      toast.show({
        description: "Something wrong happened",
        bg: "danger.500",
        duration: "2000",
      });
    }
  };

  const editPost = async (post) => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.put(`/posts/${post.id}`, post);
      const clonedPosts = [...posts];
      const index = posts.findIndex((x) => x.id == data.id);
      clonedPosts[index] = data;
      setPosts([...clonedPosts]);
      toast.show({
        description: "Post added successfully",
        bg: "success.500",
        duration: "2000",
      });
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      toast.show({
        description: "Something wrong happened",
        bg: "danger.500",
        duration: "2000",
      });
    }
  };

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const contextState = useMemo(
    () => ({
      posts,
      error,
      isLoading,
      addPost,
      editPost,
    }),
    [posts, isLoading, addPost, editPost]
  );
  return (
    <PostsContext.Provider value={contextState}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
