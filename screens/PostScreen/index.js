import React, { useState, useEffect, useCallback } from "react";
import {
  VStack,
  FormControl,
  Button,
  Center,
  Input,
  WarningOutlineIcon,
  TextArea,
} from "native-base";

const PostForm = () => {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (field) => {
    if (formData[field] === undefined) {
      setErrors({ ...errors, [field]: `${field} is required` });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate("title") && validate("description")
      ? console.log("Submitted")
      : console.log("Validation Failed");
  };

  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl h="24" isRequired isInvalid={"title" in errors}>
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
          onChangeText={(value) => setData({ ...formData, title: value })}
        />
        {"title" in errors && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Error
          </FormControl.ErrorMessage>
        )}
      </FormControl>
      <FormControl h="32" isRequired isInvalid={"description" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Description
        </FormControl.Label>
        <TextArea
          isInvalid={"description" in errors}
          placeholder="Enter description"
          onChangeText={(value) => setData({ ...formData, description: value })}
          maxW="300"
          size="md"
        />

        {"description" in errors && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Error
          </FormControl.ErrorMessage>
        )}
      </FormControl>
      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
    </VStack>
  );
};

const PostItem = () => {
  return (
    <Center flex={1}>
      <PostForm />
    </Center>
  );
};

export default PostItem;
