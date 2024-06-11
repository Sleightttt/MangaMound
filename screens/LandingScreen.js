import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import MangaCard from "../components/MangaCard";
import { icons } from "../constants";

const mangas = [
  { id: "1", title: "One Piece", mangaId: "101" },
  { id: "2", title: "Jujutsu Kaisen", mangaId: "102" },
  { id: "3", title: "My Hero Academia", mangaId: "103" },
  { id: "4", title: "Demon Slayer", mangaId: "104" },
  { id: "5", title: "Black Clover", mangaId: "105" },
  { id: "6", title: "Attack on Titan", mangaId: "106" },
  { id: "7", title: "Naruto", mangaId: "107" },
  { id: "8", title: "Bleach", mangaId: "108" },
  { id: "9", title: "One Punch Man", mangaId: "109" },
  { id: "10", title: "Tokyo Revengers", mangaId: "110" },
  { id: "11", title: "Fairy Tail", mangaId: "111" },
];

const LandingScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={styles.catContainer}>
          <View style={styles.catHeader}>
            <TouchableOpacity style={styles.catPress}>
              <Text style={styles.title}>Continue Reading</Text>
              <Image source={icons.rightArrow} style={styles.catArrow} />
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={mangas}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Chapter", { chapterId: item.id })
                }
              >
                <MangaCard title={item.title} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.catContainer}>
          <View style={styles.catHeader}>
            <TouchableOpacity style={styles.catPress}>
              <Text style={styles.title}>New Arrivals</Text>
              <Image source={icons.rightArrow} style={styles.catArrow} />
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={mangas}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Chapter", { chapterId: item.id })
                }
              >
                <MangaCard title={item.title} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.catContainer}>
          <View style={styles.catHeader}>
            <TouchableOpacity style={styles.catPress}>
              <Text style={styles.title}>Trending</Text>
              <Image source={icons.rightArrow} style={styles.catArrow} />
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={mangas}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Chapter", { chapterId: item.id })
                }
              >
                <MangaCard title={item.title} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.catContainer}>
          <View style={styles.catHeader}>
            <TouchableOpacity style={styles.catPress}>
              <Text style={styles.title}>Fantasy</Text>
              <Image source={icons.rightArrow} style={styles.catArrow} />
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={mangas}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Chapter", { chapterId: item.id })
                }
              >
                <MangaCard title={item.title} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.catContainer}>
          <View style={styles.catHeader}>
            <TouchableOpacity style={styles.catPress}>
              <Text style={styles.title}>Fantasy</Text>
              <Image source={icons.rightArrow} style={styles.catArrow} />
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={mangas}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Chapter", { chapterId: item.id })
                }
              >
                <MangaCard title={item.title} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  catContainer: { flex: 1, backgroundColor: "red", height: 150 },
  catArrow: {
    width: 20,
    height: 20,
  },
  catPress: { flexDirection: "row", alignItems: "center" },
  catHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: { fontSize: 24, fontWeight: "bold" },
  description: { fontSize: 16, marginTop: 10 },
});
