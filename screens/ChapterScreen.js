import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChapterScreen = ({ route }) => {
  const { mangaId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chapter Title {mangaId}</Text>
      <Text style={styles.description}>Description of Chapter {mangaId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  description: { fontSize: 16, marginTop: 10 },
});

export default ChapterScreen;
