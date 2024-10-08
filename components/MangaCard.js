import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MangaCard = ({ title }) => (
  <View style={styles.card}>
    <Image source={title.cover} style={styles.cardBackground} />
    <View style={styles.cardH}>
      <Text style={styles.title}>{title.title}</Text>
    </View>
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
    border: 1,
    borderWidth: 0.5,
    borderColor: "black",
  },
  cardH: {
    position: "absolute",
    top: 0,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderColor: "black",
  },
  title: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2.5,
    paddingLeft: 5,
    color: "white",
  },
  cardBackground: {
    borderRadius: 12,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
  },
});

export default MangaCard;
