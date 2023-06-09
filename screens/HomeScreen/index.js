import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { StyleSheet } from "react-native";
import PostItem from "../../components/PostItem";
import {
  Box,
  Heading,
  Text,
  FlatList,
  ScrollView,
  HStack,
  Pressable,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const renderItem = ({ item, index }) => <PostItem {...item} key={index} />;

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Box pt="1">
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  paginationDot: {
    width: 40,
    height: 5,
    borderRadius: 8,
    marginHorizontal: -5,
  },
});
