import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  const [name, setName] = useState("John Doe");

  const handleSave = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Favorite Anime</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Favorites</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Member Since</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Donations Made</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
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
