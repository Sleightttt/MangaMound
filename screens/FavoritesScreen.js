import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import MangaCard from "../components/MangaCard";

const favorites = [
  { id: "101", title: "Manga Title 1" },
  { id: "102", title: "Manga Title 2" },
  // Add more favorites
];

const FavoritesScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MangaDetails", { mangaId: item.id })
            }
          >
            <MangaCard title={item.title} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FavoritesScreen;
