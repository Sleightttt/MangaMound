import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CategoryContainer from "../components/CategoryContainer";
import { images } from "../constants";

const screenWidth = Dimensions.get("window").width; // Get the screen width

const mangas = [
  {
    id: 1,
    title: "Two Piece",
    mangaId: "101",
    description: "Description",
    cover: images.group,
  },
  {
    id: 2,
    title: "Kenpo Kaisen",
    mangaId: "102",
    description: "Description",
    cover: images.manga1,
  },
  {
    id: 3,
    title: "My Villian Academic",
    mangaId: "103",
    description: "Description",
    cover: images.romance,
  },
  {
    id: 4,
    title: "Angel Slayer",
    mangaId: "104",
    description: "Description",
    cover: images.group,
  },
  {
    id: 5,
    title: "White Clover",
    mangaId: "105",
    description: "Description",
    cover: images.romance,
  },
  {
    id: 6,
    title: "Defence on Titan",
    mangaId: "106",
    description: "Description",
    cover: images.group,
  },
  {
    id: 7,
    title: "Naruta",
    mangaId: "107",
    description: "Description",
    cover: images.romance,
  },
  {
    id: 8,
    title: "Ammonia",
    mangaId: "108",
    description: "Description",
    cover: images.manga1,
  },
  {
    id: 9,
    title: "One Punch Child",
    mangaId: "109",
    description: "Description",
    cover: images.romance,
  },
  {
    id: 11,
    title: "Japan Revengers",
    mangaId: "110",
    description: "Description",
    cover: images.group,
  },
  {
    id: 12,
    title: "Hairy Tail",
    mangaId: "111",
    description: "Description",
    cover: images.romance,
  },
];

const carouselItems = [
  {
    title: "Final Chapter Tomorrow",
    mangaTitle: "Star Guy",
    image: images.promo,
    mangaChapter: "1010",
  },
  {
    title: "New Arc Released",
    mangaTitle: "Attack on Stars",
    image: images.spacepromo,
    mangaChapter: "139",
  },
  {
    title: "Special Edition",
    mangaTitle: "My Hero These Guys",
    image: images.manga1,
    mangaChapter: "300",
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
        <View style={styles.mangaChapterContainer}>
          <Text style={styles.mangaTitleText}>{item.mangaChapter}</Text>
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
    <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
      <ImageBackground
        source={images.lp_bg}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Carousel
            ref={carouselRef}
            data={carouselItems}
            renderItem={renderCarouselItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth * 0.8}
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
              width: 15,
              height: 15,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: "red",
            }}
            inactiveDotOpacity={0.6}
            inactiveDotScale={0.4}
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
    borderColor: "#242424",
    borderWidth: 1.5,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
  },
  promoText: {
    color: "#242424",
    padding: 5,
    borderRadius: 20,
    fontWeight: "bold",
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
    borderWidth: 0.5,
    borderColor: "#242424",
  },
  mangaTitleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "auto%",
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "red",
    borderBottomLeftRadius: 18,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: -0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
  mangaChapterContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "auto",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  mangaTitleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 0.5,
  },
});

export default LandingScreen;
