import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { images } from "../constants";

const MangaCard = ({ title }) => (
  <View style={styles.card}>
    <Image source={title.cover} style={styles.cardBackground} />
    <Text style={styles.title}>{title.title}</Text>
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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  title: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2.5,
    textAlign: "center",
    color: "black",
  },
  cardBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    position: "absolute",
  },
});

export default MangaCard;
