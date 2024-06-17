import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import CategoryContainer from "../components/CategoryContainer";
import { images } from "../constants";

const mangas = [
  { id: 1, title: "One Piece", mangaId: "101", description: "Description" },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    mangaId: "102",
    description: "Description",
  },
  {
    id: 3,
    title: "My Hero Academia",
    mangaId: "103",
    description: "Description",
  },
  {
    id: 4,
    title: "Demon Slayer",
    mangaId: "104",
    description: "Description",
  },
  {
    id: 5,
    title: "Black Clover",
    mangaId: "105",
    description: "Description",
  },
  {
    id: 6,
    title: "Attack on Titan",
    mangaId: "106",
    description: "Description",
  },
  { id: 7, title: "Naruto", mangaId: "107", description: "Description" },
  { id: 8, title: "Bleach", mangaId: "108", description: "Description" },
  {
    id: 9,
    title: "One Punch Man",
    mangaId: "109",
    description: "Description",
  },
  {
    id: 11,
    title: "Tokyo Revengers",
    mangaId: "110",
    description: "Description",
  },
  { id: 12, title: "Fairy Tail", mangaId: "111", description: "Description" },
];

const LandingScreen = ({ navigation }) => {
  const handlePress = (id) => {
    navigation.navigate("MangaDetails", { mangaId: id });
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground source={images.lp_bg} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.banner}>
            <ImageBackground source={images.promo} style={styles.bannerImage} />
            <View style={styles.promoH}>
              <Text style={styles.promoText}>Final Chapter Tomorrow</Text>
            </View>
          </View>
          <CategoryContainer
            title="Continue Reading"
            data={mangas}
            onPress={handlePress}
          />
          <CategoryContainer
            title="Popular Mangas"
            data={mangas}
            onPress={handlePress}
          />
          <CategoryContainer
            title="New Releases"
            data={mangas}
            onPress={handlePress}
          />
          <CategoryContainer
            title="Top Rated"
            data={mangas}
            onPress={handlePress}
          />
          <CategoryContainer
            title="Fantasy"
            data={mangas}
            onPress={handlePress}
          />
          <CategoryContainer
            title="Slice of Life"
            data={mangas}
            onPress={handlePress}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  banner: {
    height: 200,
    width: "98%",
    borderRadius: 20,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Changed from 'center' to 'cover'
    justifyContent: "center",
  },
  promoText: {
    color: "red",
    padding: 5,
    borderRadius: 20,
  },
  promoH: {
    position: "absolute",
    top: 10,
    left: 10,
    borderRadius: 20,
    backgroundColor: "white",
  },
});

export default LandingScreen;
