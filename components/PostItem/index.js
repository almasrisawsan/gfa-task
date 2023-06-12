import { memo } from "react";
import { Text, VStack, Box, HStack, Heading, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PostItem = ({ title, body, link, ...rest }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(link, { title, body, ...rest })}
    >
      <Box px="10">
        <HStack p="3" alignItems={"center"} justifyContent={"space-between"}>
          <VStack w="full">
            <Heading size="sm" isTruncated>
              {title}
            </Heading>
            <Text isTruncated>{body}</Text>
          </VStack>

          <MaterialIcons color={"gray"} size="30" name="chevron-right" />
        </HStack>
      </Box>
    </Pressable>
  );
};
export default memo(PostItem);
