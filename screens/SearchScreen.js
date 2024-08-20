import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  const searchManga = () => {
    console.log("Searching for manga: ", search);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <View style={styles.searchBarCont}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for manga"
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
        <TouchableOpacity style={styles.searchButton} onPress={searchManga}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#181818" },
  title: { fontSize: 24, fontWeight: "bold", color: "white" },
  description: { fontSize: 16, marginTop: 10 },
  searchBarCont: { flexDirection: "row", marginTop: 20 },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    color: "white",
  },
  searchButton: {
    backgroundColor: "red",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  searchButtonText: { color: "white" },
});

export default SearchScreen;
