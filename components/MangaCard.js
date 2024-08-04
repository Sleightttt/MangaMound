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
  },
  cardH: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderColor: "black",
    borderWidth: 1,
  },
  title: {
    marginBottom: 5,
    fontSize: 16,
    paddingTop: 5,
    fontWeight: "bold",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 1 },
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
