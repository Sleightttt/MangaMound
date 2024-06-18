import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
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

const carouselItems = [
  {
    title: "Final Chapter Tomorrow",
    mangaTitle: "One Piece",
    image: images.promo,
  },
  {
    title: "New Arc Released",
    mangaTitle: "Attack on Titan",
    image: images.spacepromo,
  },
  {
    title: "Special Edition",
    mangaTitle: "My Hero Academia",
    image: images.manga1,
  },
];

const LandingScreen = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const handlePress = (id) => {
    navigation.navigate("MangaDetails", { mangaId: id });
  };

  const renderCarouselItem = ({ item }) => (
    <View style={styles.banner}>
      <ImageBackground source={item.image} style={styles.bannerImage}>
        <View style={styles.promoH}>
          <Text style={styles.promoText}>{item.title}</Text>
        </View>
        <View style={styles.mangaTitleContainer}>
          <Text style={styles.mangaTitleText}>{item.mangaTitle}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);
  };

  const resetAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      startAutoPlay();
    }, 7000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.snapToItem(activeSlide);
    }
  }, [activeSlide]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground source={images.lp_bg} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Carousel
            ref={carouselRef}
            data={carouselItems}
            renderItem={renderCarouselItem}
            sliderWidth={400}
            itemWidth={300}
            onSnapToItem={(index) => {
              setActiveSlide(index);
              resetAutoPlay();
            }}
          />
          <Pagination
            dotsLength={carouselItems.length}
            activeDotIndex={activeSlide}
            containerStyle={{ paddingVertical: 8 }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: "red",
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
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
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  promoText: {
    color: "black",
    padding: 5,
    borderRadius: 20,

    textAlign: "center",
  },
  promoH: {
    position: "absolute",
    top: 10,
    left: 10,
    borderRadius: 20,
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
  },
  mangaTitleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "auto%",
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderBottomLeftRadius: 20,
  },
  mangaTitleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LandingScreen;
