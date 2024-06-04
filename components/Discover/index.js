import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import style from "./discover.style";
import onepiece from "../../assets/images/onepiece.jpg";
import { images } from "../../constants";

const dummyMangaData = [
  {
    title: "One Piece",
    chapters: 1000000,
  },
  {
    title: "Naruto",
    chapters: 900,
  },
  {
    title: "Bleach",
    chapters: 11,
  },
  {
    title: "Attack on Titan",
    chapters: 123,
  },
  {
    title: "Dragon Ball",
    chapters: 12,
  },
];

const Discover = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={images.mmbackground} style={style.backgroundImage} />
      <FlatList
        keyExtractor={(item) => item.title}
        contentContainerStyle={style.mangaList}
        data={dummyMangaData}
        renderItem={({ item }) => (
          <TouchableOpacity style={style.mangaCard}>
            <Image source={onepiece} style={style.mangaCardImage} />
            <Text style={style.mangaTitle}>{item.title}</Text>
            <Text style={style.mangaChapter}>{item.chapters} Chapters</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Discover;
