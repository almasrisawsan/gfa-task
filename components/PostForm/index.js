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
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import usePosts from "../../hooks/usePosts";

const PostForm = ({ title, body, userId, id }) => {
  const navigation = useNavigation();
  const { addPost, posts, isLoading, editPost, error } = usePosts();
  const [formData, setData] = useState({
    title,
    body,
    userId,
    id,
  });
  const { title: postTitle, body: postBody, id: postId } = formData;

  const heading = postId ? "Edit" : "Add";
  let isTitleValid = postTitle?.length !== 0;
  let isDescriptionValid = postBody?.length !== 0;

  const onSubmit = useCallback(async () => {
    postId
      ? await editPost(formData)
      : await addPost({
          ...formData,
          userId: posts.length + 1,
          id: posts.length + 1, //id should be created after submission but this is a fake api
        });
    !error && navigation.navigate("Home");
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
        <FormControl h="24" isRequired isInvalid={!isTitleValid}>
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
          />
          {!isTitleValid && (
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Title is required
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl h="32" isRequired isInvalid={!isDescriptionValid}>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Description
          </FormControl.Label>
          <TextArea
            isInvalid={!isDescriptionValid}
            maxW="300"
            size="md"
            placeholder="Enter description"
            value={postBody}
            onChangeText={(text) => setData({ ...formData, body: text })}
          />

          {!isDescriptionValid && (
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Description is required
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <Button
          isDisabled={!isTitleValid || !isDescriptionValid}
          isLoading={isLoading}
          onPress={onSubmit}
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
