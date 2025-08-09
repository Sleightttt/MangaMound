import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  const [name, setName] = useState("John Doe");
  const [favAnime, setFavAnime] = useState("Two Piece");
  const [favorites, setFavorites] = useState("Three Piece");
  const [memSince, setMemSince] = useState("2016");
  const [dono, setDono] = useState("1 dorra");

  const handleSave = () => {
    setName(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Favorite Anime</Text>
      <TextInput
        style={styles.input}
        value={favAnime}
        onChangeText={setFavAnime}
      />

      <Text style={styles.label}>Favorites</Text>
      <TextInput
        style={styles.input}
        value={favorites}
        onChangeText={setFavorites}
      />

      <Text style={styles.label}>Member Since</Text>
      <TextInput
        style={styles.input}
        value={memSince}
        onChangeText={setMemSince}
      />

      <Text style={styles.label}>Donations Made</Text>
      <TextInput style={styles.input} value={dono} onChangeText={setDono} />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 },
});

export default ProfileScreen;
