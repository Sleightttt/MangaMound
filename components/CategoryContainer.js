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
    justifyContent: "center", // Center the content horizontally
    borderRadius: 20, // Add border radius here
    margin: 5, // Use margin for spacing
    backgroundColor: "white", // Add a background color
    paddingVertical: 10, // Add vertical padding
    paddingHorizontal: 15, // Add horizontal padding
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  catHeader: {
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flexShrink: 1, // Ensure the title doesn't get cut off
    color: "red",
    textAlign: "center", // Center the text horizontally
  },
});

export default CategoryContainer;
