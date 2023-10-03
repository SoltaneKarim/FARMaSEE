import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Assuming you have FontAwesome installed

const SearchBar = () => {
  // Placeholder image URL (you can replace it with actual URLs)
  const placeholderImageURL = "https://imgs.search.brave.com/O6ohCtpvlx8gskpbHEDveP8WPca-8D57hrw9TFwwX9U/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk0L0Nv/cm9uYXZpcnVzLl9T/QVJTLUNvVi0yLnBu/Zy81MTJweC1Db3Jv/bmF2aXJ1cy5fU0FS/Uy1Db1YtMi5wbmc"; // Replace with your own image URLs

  const handleCardClick = () => {
    alert("Card clicked!");
  }

  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.searchButton}>
        <FontAwesome name="search" size={24} color="white" />
      </TouchableOpacity>

      {/* Placeholder disease card */}
      <TouchableOpacity style={styles.diseaseCard} onPress={handleCardClick}>
        <Image source={{ uri: placeholderImageURL }} style={styles.image} />
        <Text style={styles.diseaseName}>Example Disease</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.diseaseCard} onPress={handleCardClick}>
        <Image source={{ uri: placeholderImageURL }} style={styles.image} />
        <Text style={styles.diseaseName}>Example Disease</Text>
      </TouchableOpacity>
      

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue", // Set the background color to light blue
    minHeight: "100%", // Ensure the container takes at least the full screen height
    paddingVertical: 16, // Add padding for spacing
  },
  input: {
    backgroundColor: "white", // Set the background color of the input field
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 20,
    width: "80%",
    height: "6%",
    top: 27,
    fontSize: 18, // Set the font size to make it bigger
    paddingLeft: 10, // Add left padding to align the text to the left
  },
  searchButton: {
    backgroundColor: "blue",
    borderRadius: 30,
    width: 47,
    height: 47,
    alignItems: "center",
    justifyContent: "center",
    left: "84%",
    top: -21.5,
  },
  diseaseCard: {
    backgroundColor: "white",
    borderRadius: 10,
    left:20,
    width: 150,
    height: 190,
    marginBottom:10,
    marginRight:5,
    marginLeft:3,

    
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  diseaseName: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SearchBar;
