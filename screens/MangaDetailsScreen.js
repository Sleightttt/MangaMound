// screens/MangaDetailsScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { images } from "../constants";

const MangaDetailsScreen = ({ route }) => {
  const { mangaId } = route.params;
  const mangaDetails = {
    1: {
      title: "One Piece",
      description: "An epic journey of pirates.",
      cover: images.group,
      chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
    },
    2: {
      title: "Jujutsu Kaisen",
      description: "A story of sorcerers and curses.",
      cover: images.manga1,
      chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
    },
    3: {
      title: "My Hero Academia",
      description: "A world of heroes and villains.",
      cover: images.romance,
      chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
    },
    4: {
      title: "Demon Slayer",
      description: "A quest to save family from demons.",
      cover: images.group,
      chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
    },
    5: {
      title: "Black Clover",
      description: "A tale of magic and adventure.",
      cover: images.romance,
      chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
    },
    6: {
      title: "Attack on Titan",
      description: "Humanity's fight against titans.",
      cover: images.group,
      chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
    },
    7: {
      title: "Naruto",
      description: "A ninja's journey to become Hokage.",
      cover: images.romance,
      chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
    },
    8: {
      title: "Bleach",
      description: "A soul reaper's battle against darkness.",
      cover: images.group,
      chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
    },
    9: {
      title: "One Punch Man",
      description: "A hero who can defeat anyone with one punch.",
      cover: images.romance,
      chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
    },
    10: {
      title: "Tokyo Revengers",
      description: "A time-traveling gang story.",
      cover: images.manga1,
      chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
    },
    11: {
      title: "Fairy Tail",
      description: "Magical adventures with wizards.",
      cover: images.romance,
      chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
    },
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
        <Image source={images.onepiece} style={styles.mangaTitleBG} />
        <Text style={styles.title}>{manga.title}</Text>
      </View>
      <Text style={styles.description}>{manga.description}</Text>
      <View style={styles.chapterList}>
        <FlatList
          data={manga.chapters}
          renderItem={renderChapterItem}
          keyExtractor={(item, index) => `${mangaId}-chapter-${index}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "black" },
  mangaTitleBG: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  chapterList: {
    flex: 1,
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
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: "white",
    marginBottom: 10,
  },
});

export default MangaDetailsScreen;
