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
            <MangaCard title={item} />
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
    height: 280,
  },
  catArrow: {
    width: 20,
    height: 15,
    marginLeft: 10,
    marginTop: 3, // Add some spacing between the title and the arrow
  },
  catPress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10, // For Android shadow
    borderWidth: 0.5,
    borderColor: "red",
  },
  catHeader: {
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flexShrink: 1, // Ensure the title doesn't get cut off
    color: "black",
    textAlign: "center", // Center the text horizontally
  },
});

export default CategoryContainer;
