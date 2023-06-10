import React from "react";
import {
  Text,
  Image,
  Badge,
  VStack,
  Box,
  Container,
  HStack,
  Button,
  Heading,
  Pressable,
  Divider,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PostItem = ({ title, body, id, key, link }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(link, { postId: id })}
      key={key}
    >
      <Box px="10">
        <HStack p="3" alignItems={"center"} justifyContent={"space-between"}>
          <VStack w="full">
            <Heading size="sm" isTruncated>
              {title}
            </Heading>
            <Text fontSize="md" isTruncated>
              {body}
            </Text>
          </VStack>

          <MaterialIcons color={"gray"} size="30" name="chevron-right" />
        </HStack>
      </Box>
      <Divider bg="gray.300" my="1" />
    </Pressable>
  );
};
export default PostItem;
