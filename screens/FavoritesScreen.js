import React from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import MangaCard from "../components/MangaCard";
import { images } from "../constants";

const favorites = [
  { id: "101", title: "Manga Title 1" },
  { id: "102", title: "Manga Title 2", cover: images.manga1 },
  { id: "103", title: "Manga Title 3", cover: images.romance },
  { id: "104", title: "Manga Title 4" },
  { id: "105", title: "Manga Title 5", cover: images.romance },
  { id: "106", title: "Manga Title 6" },
  { id: "107", title: "Manga Title 7" },
  { id: "108", title: "Manga Title 8" },
  { id: "109", title: "Manga Title 9" },
  { id: "110", title: "Manga Title 10" },
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
