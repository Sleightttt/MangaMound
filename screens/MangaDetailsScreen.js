import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { images } from "../constants";
import { useNavigation } from "@react-navigation/native";

const MangaDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { mangaId } = route.params;
  const scrollY = useRef(new Animated.Value(0)).current;

  const mangaDetails = {
    1: {
      title: "One Piece",
      description:
        "An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.",
      cover: images.group,
      chapters: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",
        "Chapter 6",
        "Chapter 7",
        "Chapter 8",
        "Chapter 9",
        "Chapter 10",
        "Chapter 11",
        "Chapter 12",
        "Chapter 13",
        "Chapter 14",
        "Chapter 15",
        "Chapter 16",
        "Chapter 17",
        "Chapter 18",
        "Chapter 19",
        "Chapter 20",
        "Chapter 21",
        "Chapter 22",
        "Chapter 23",
        // Add more chapters as needed
      ],
    },
    2: {
      title: "One Piece",
      description:
        "An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.An epic journey of pirates.",
      cover: images.group,
      chapters: [
        "Chapter 1",
        "Chapter 2",
        "Chapter 3",
        "Chapter 4",
        "Chapter 5",

        // Add more chapters as needed
      ],
    },
    // Add other manga details here
  };

  const manga = mangaDetails[mangaId] || {
    title: "Unknown Manga",
    description: "No description available.",
  };

  const renderChapterItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ChapterScreen", { chapterTitle: item })
      }
      style={styles.chapterItem}
    >
      <Text style={styles.chapterTitle}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Image source={manga.cover} style={styles.mangaTitleBG} />
        <Text style={styles.title}>{manga.title}</Text>
      </View>
      <Text style={styles.description}>{manga.description}</Text>
      <View style={styles.chapterListContainer}>
        <Animated.FlatList
          data={manga.chapters}
          renderItem={renderChapterItem}
          keyExtractor={(item, index) => `${mangaId}-chapter-${index}`}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          contentContainerStyle={styles.chapterList}
        />
        {manga.chapters.length > 6 && (
          <ScrollIndicator
            scrollY={scrollY}
            itemCount={manga.chapters.length}
          />
        )}
      </View>
    </View>
  );
};

const ScrollIndicator = ({ scrollY, itemCount }) => {
  const indicatorHeight = 10; // Height of the white ball indicator
  const listHeight = 290; // Height of the FlatList container
  const contentHeight = itemCount * 43.5; // Assuming each item has a height of 40

  const translateY = scrollY.interpolate({
    inputRange: [0, contentHeight - listHeight],
    outputRange: [0, listHeight - indicatorHeight],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.scrollIndicatorContainer}>
      <View style={styles.scrollIndicatorLine} />
      <Animated.View
        style={[
          styles.scrollIndicatorBall,
          {
            transform: [{ translateY }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "black" },
  mangaTitleBG: {
    width: "100%",
    resizeMode: "stretch",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  chapterListContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  chapterList: {
    padding: 10,
    backgroundColor: "rgba(24, 24, 24, 0.7)",
    borderRadius: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  chapterItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  chapterTitle: {
    fontSize: 18,
    color: "red",
  },
  titleCard: {
    borderColor: "rgba(24, 24, 24, 0.7)",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
  },
  title: {
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: "white",
    marginBottom: 20,
    marginLeft: 12,
  },
  scrollIndicatorContainer: {
    width: 10,
    alignItems: "center",
    marginLeft: 5,
  },
  scrollIndicatorLine: {
    width: 2,
    flex: 1,
    backgroundColor: "red",
  },
  scrollIndicatorBall: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
    position: "absolute",
  },
});

export default MangaDetailsScreen;
