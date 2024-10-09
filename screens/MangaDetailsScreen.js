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
  const [contentHeight, setContentHeight] = React.useState(0);
  const [containerHeight, setContainerHeight] = React.useState(0);
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
      ],
    },
  };

  const manga = mangaDetails[mangaId] || {
    title: "Unknown Manga",
    description: "No description available.",
    chapters: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
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
      <View
        style={styles.chapterListContainer}
        onLayout={(e) => setContainerHeight(e.nativeEvent.layout.height)}
      >
        <Animated.FlatList
          data={manga.chapters}
          renderItem={renderChapterItem}
          keyExtractor={(item, index) => `${mangaId}-chapter-${index}`}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          contentContainerStyle={styles.chapterList}
          onContentSizeChange={(w, h) => setContentHeight(h)}
        />
        {manga.chapters.length > 6 && (
          <ScrollIndicator
            scrollY={scrollY}
            containerHeight={containerHeight}
            contentHeight={contentHeight}
            itemCount={manga.chapters.length}
          />
        )}
      </View>
    </View>
  );
};

const ScrollIndicator = ({ scrollY, containerHeight, contentHeight }) => {
  const indicatorHeight = 10; // Height of the scroll indicator "ball"

  const translateY = scrollY.interpolate({
    inputRange: [0, Math.max(0, contentHeight - containerHeight)],
    outputRange: [0, containerHeight - indicatorHeight],
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
    width: 14, // Adjusted for larger ball
    alignItems: "center",
    marginLeft: 5,
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Slightly translucent background
    borderRadius: 7, // Rounded container
    padding: 2,
  },
  scrollIndicatorLine: {
    width: 3, // Slightly thicker line
    flex: 1,
    backgroundColor: "#262626", // Gradient color
    borderRadius: 1.5,
  },
  scrollIndicatorBall: {
    width: 12, // Slightly larger ball
    height: 12,
    borderRadius: 6,
    backgroundColor: "#fff", // Solid color or gradient
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
    position: "absolute",
    borderColor: "rgba(255, 255, 255, 0.3)", // Subtle border
    borderWidth: 1,
  },
});

export default MangaDetailsScreen;
