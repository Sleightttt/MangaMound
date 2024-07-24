// screens/MangaDetailsScreen.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { images } from "../constants";

const MangaDetailsScreen = ({ route }) => {
  const { mangaId } = route.params;
  const mangaDetails = {
    1: {
      title: "One Piece",
      description: "An epic journey of pirates.",
      cover: images.group,
    },
    2: {
      title: "Jujutsu Kaisen",
      description: "A story of sorcerers and curses.",
      cover: images.manga1,
    },
    3: {
      title: "My Hero Academia",
      description: "A world of heroes and villains.",
      cover: images.romance,
    },
    4: {
      title: "Demon Slayer",
      description: "A quest to save family from demons.",
      cover: images.group,
    },
    5: {
      title: "Black Clover",
      description: "A tale of magic and adventure.",
      cover: images.romance,
    },
    6: {
      title: "Attack on Titan",
      description: "Humanity's fight against titans.",
      cover: images.group,
    },
    7: {
      title: "Naruto",
      description: "A ninja's journey to become Hokage.",
      cover: images.romance,
    },
    8: {
      title: "Bleach",
      description: "A soul reaper's battle against darkness.",
      cover: images.group,
    },
    9: {
      title: "One Punch Man",
      description: "A hero who can defeat anyone with one punch.",
      cover: images.romance,
    },
    10: {
      title: "Tokyo Revengers",
      description: "A time-traveling gang story.",
      cover: images.manga1,
    },
    11: {
      title: "Fairy Tail",
      description: "Magical adventures with wizards.",
      cover: images.romance,
    },
  };

  const manga = mangaDetails[mangaId] || {
    title: "Unknown Manga",
    description: "No description available.",
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Image source={images.onepiece} style={styles.mangaTitleBG} />
        <Text style={styles.title}>{manga.title}</Text>
      </View>

      <Text style={styles.description}>{manga.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  mangaTitleBG: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  description: { fontSize: 16, marginTop: 10 },
});

export default MangaDetailsScreen;
