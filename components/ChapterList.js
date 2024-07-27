import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const ChapterList = ({ chapters }) => {
  return (
    <FlatList
      data={chapters}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={styles.chapter}>
            <Text style={styles.chapterText}>{item}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
    />
  );
};

const styles = StyleSheet.create({
  chapter: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  chapterText: {
    fontSize: 18,
    color: "red",
  },
});

export default ChapterList;
