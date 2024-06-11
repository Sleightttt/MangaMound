import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MangaDetailsScreen = ({ route }) => {
  const { mangaId } = route.params;
  // Here you would fetch manga details using the mangaId
  // For now, we'll use static content

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manga Title {mangaId}</Text>
      <Text style={styles.description}>Description of Manga {mangaId}</Text>
      {/* Additional details and components can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  description: { fontSize: 16, marginTop: 10 },
});

export default MangaDetailsScreen;
