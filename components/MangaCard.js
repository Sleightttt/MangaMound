import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MangaCard = ({ title }) => (
  <View style={styles.card}>
    <Image
      source={require("../assets/images/onepiece.jpg")}
      style={styles.cardBackground}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 5,
    width: 120,
    backgroundColor: "#000",
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "#fff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    textAlign: "center",
    color: "red",
  },
  cardBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    position: "absolute",
  },
});

export default MangaCard;
