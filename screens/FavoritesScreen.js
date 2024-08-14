import React from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import MangaCard from "../components/MangaCard";
import { images } from "../constants";

const favorites = [
  { id: "101", title: "Manga Title 1" },
  {
    id: "102",
    title: "Manga Title 2",
    cover: images.manga1,
    chapters: [
      "chapter1",
      "chapter2",
      "chapter3",
      "chapter4",
      "chapter5",
      "chapter6",
    ],
  },
  {
    id: "103",
    title: "Manga Title 3",
    cover: images.romance,
    chapters: [
      "chapter1",
      "chapter2",
      "chapter3",
      "chapter4",
      "chapter5",
      "chapter6",
    ],
  },
  {
    id: "104",
    title: "Manga Title 4",
    chapters: [
      "chapter1",
      "chapter2",
      "chapter3",
      "chapter4",
      "chapter5",
      "chapter6",
    ],
  },
  {
    id: "105",
    title: "Manga Title 5",
    cover: images.romance,
    chapters: [
      "chapter1",
      "chapter2",
      "chapter3",
      "chapter4",
      "chapter5",
      "chapter6",
    ],
  },
  {
    id: "106",
    title: "Manga Title 6",
    chapters: [
      "chapter1",
      "chapter2",
      "chapter3",
      "chapter4",
      "chapter5",
      "chapter6",
    ],
  },
  {
    id: "107",
    title: "Manga Title 7",
    chapters: [
      "chapter1",
      "chapter2",
      "chapter3",
      "chapter4",
      "chapter5",
      "chapter6",
    ],
  },
  {
    id: "108",
    title: "Manga Title 8",
    chapters: [
      "chapter1",
      "chapter2",
      "chapter3",
      "chapter4",
      "chapter5",
      "chapter6",
    ],
  },
  {
    id: "109",
    title: "Manga Title 9",
    chapters: [
      "chapter1",
      "chapter2",
      "chapter3",
      "chapter4",
      "chapter5",
      "chapter6",
    ],
  },
  {
    id: "110",
    title: "Manga Title 10",
    chapters: [
      "chapter1",
      "chapter2",
      "chapter3",
      "chapter4",
      "chapter5",
      "chapter6",
    ],
  },
];

const FavoritesScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,

        padding: 10,
        backgroundColor: "#242424",
      }}
    >
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ height: 100 }}
            onPress={() =>
              navigation.navigate("MangaDetails", { mangaId: item.id })
            }
          >
            <MangaCard title={item} />
          </TouchableOpacity>
        )}
        numColumns={3}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FavoritesScreen;
