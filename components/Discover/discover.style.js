import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  mangaCard: {
    backgroundColor: "#000", // Black background
    // Add margin for spacing
    // Add padding for content
    borderRadius: 10, // Rounded corners
    shadowColor: "#000", // Shadow color (black)
    shadowOffset: { width: 3, height: 3 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 3, // Elevation for Android devices
    height: 200,
    margin: 10,
  },
  mangaTitle: {
    color: "#000000", // White text color
    fontSize: 24, // Font size
    fontWeight: "bold", // Bold text
    marginLeft: 10,
    marginTop: 10, // Add space to the left of title
    // Add space below title
    textShadowColor: "#fff",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
  },
  mangaChapter: {
    marginLeft: 10,
    color: "#000000", // White text color
    fontSize: 16,

    textShadowColor: "#fff",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
  },
  mangaCardImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10, // Stretch image to fill the container
  },
  mangaList: {
    padding: 10,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -6,
  },
});

export default style;
