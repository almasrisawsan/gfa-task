import React, { useState, useCallback } from "react";
import {
  VStack,
  FormControl,
  Button,
  Center,
  Input,
  WarningOutlineIcon,
  TextArea,
  Fab,
  Icon,
  Heading,
  useToast,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import usePosts from "../../hooks/usePosts";
import axiosInstance from "../../axios";

const PostForm = ({ title, body, userId, id }) => {
  const navigation = useNavigation();
  const toast = useToast();
  const { posts, setPosts } = usePosts();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setData] = useState({
    title,
    body,
    userId,
    id,
  });
  const { title: postTitle, body: postBody, id: postId } = formData;
  const heading = postId ? "Edit" : "Add";

  const validate = () => {
    const formErrors = {};

    if (!postTitle) {
      formErrors.title = "Title is required";
    }
    if (!postBody) {
      formErrors.body = "Description is required";
    }

    setErrors(formErrors);
  };

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axiosInstance.post("/posts", {
        ...formData,
        userId: posts.length + 1,
        id: posts.length + 1, //id should be created after submission but this is a fake api
      });
      setPosts([formData, ...posts]);
      toast.show({
        description: "Post added successfully",
        bg: "success.500",
        duration: "2000",
      });
      setIsLoading(false);
      navigation.navigate("Home");
    } catch (error) {
      setIsLoading(false);
      toast.show({
        description: "Something wrong happened",
        bg: "danger.500",
        duration: "2000",
      });
    }
  }, [formData]);

  const onEdit = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.put(`/posts/${postId}`, formData);
      const clonedPosts = [...posts];
      const index = posts.findIndex((x) => x.id == data.id);
      clonedPosts[index] = data;
      setPosts([...clonedPosts]);
      toast.show({
        description: "Post edited successfully",
        bg: "success.500",
        duration: "2000",
      });
      setIsLoading(false);
      navigation.navigate("Home");
    } catch (error) {
      setIsLoading(false);
      toast.show({
        description: "Something wrong happened",
        bg: "danger.500",
        duration: "2000",
      });
    }
  }, [formData]);

  const openNewForm = useCallback(() => {
    setData({});
  }, []);

  return (
    <Center w="100%" h="100%">
      <Heading size="lg" pb="8" color={"cyan.600"}>
        {heading} new post
      </Heading>

      <VStack width="90%" mx="3" maxW="300px">
        <FormControl h="24" isRequired isInvalid={errors?.title}>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Title
          </FormControl.Label>
          <Input
            placeholder="Enter post title"
            size="md"
            value={postTitle}
            onChangeText={(value) => setData({ ...formData, title: value })}
            onBlur={validate}
          />
          {errors?.title && (
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              {errors?.title}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl h="32" isRequired isInvalid={errors?.body}>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Description
          </FormControl.Label>
          <TextArea
            isInvalid={errors?.body}
            maxW="300"
            size="md"
            placeholder="Enter description"
            value={postBody}
            onChangeText={(text) => setData({ ...formData, body: text })}
            onBlur={validate}
          />

          {errors?.body && (
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              {errors?.body}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <Button
          isDisabled={!postTitle || !postBody}
          isLoading={isLoading}
          onPress={postId ? onEdit : onSubmit}
          mt="5"
          colorScheme="cyan"
        >
          Submit
        </Button>
      </VStack>
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        onPress={openNewForm}
        icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
      />
    </Center>
  );
};

export default PostForm;
