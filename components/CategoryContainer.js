import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import MangaCard from "./MangaCard";
import { icons } from "../constants";

const CategoryContainer = ({ title, data, onPress }) => {
  return (
    <View style={styles.catContainer}>
      <View style={styles.catHeader}>
        <TouchableOpacity
          style={styles.catPress}
          onPress={() => onPress("someId")}
        >
          <Text style={styles.title}>{title}</Text>
          <Image source={icons.rightArrow} style={styles.catArrow} />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item.id)}>
            <MangaCard title={item.title} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  catContainer: {
    margin: 5,
    flex: 1,
    height: 150,
  },
  catArrow: {
    width: 20,
    height: 15,
    marginTop: 1,
  },
  catPress: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  catHeader: {
    height: 30,
    flexDirection: "row",
  },
  title: { fontSize: 24, fontWeight: "bold" },
});

export default CategoryContainer;
