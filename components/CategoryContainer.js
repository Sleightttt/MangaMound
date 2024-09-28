import React, { useRef } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import MangaCard from "./MangaCard";
import { icons } from "../constants";

const CategoryContainer = ({ title, data, onPress }) => {
  const scrollBarRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;
    const visibleWidth = event.nativeEvent.layoutMeasurement.width;

    // 95% width of the container
    const containerWidth = visibleWidth * 0.95;

    // Calculate the width of the scroll bar as a ratio of the visible width to the total content width
    let scrollBarWidth = (visibleWidth / contentWidth) * containerWidth;
    scrollBarWidth = Math.max(scrollBarWidth, 20); // Minimum scrollbar width for visibility

    // Calculate the position of the scroll bar based on the scroll position
    let scrollBarPosition = (contentOffsetX / contentWidth) * containerWidth;

    // Clamp the scroll bar position so it doesn't exceed the left (0) or right end of the container
    scrollBarPosition = Math.max(0, scrollBarPosition); // Prevent scrolling past the left edge
    scrollBarPosition = Math.min(
      scrollBarPosition,
      containerWidth - scrollBarWidth
    ); // Prevent scrolling past the right edge

    // Update the custom scroll bar's width and position
    scrollBarRef.current.setNativeProps({
      style: {
        width: scrollBarWidth,
        transform: [{ translateX: scrollBarPosition }],
      },
    });
  };
  return (
    <View style={styles.catContainer}>
      <View style={styles.catHeader}>
        <TouchableOpacity
          style={styles.catPress}
          onPress={() => onPress("someId")}
        >
          <Text style={styles.title}>{title}</Text>
          <Image source={icons.rightArrow} style={styles.catArrow} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item.id)}>
            <MangaCard title={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false} // Hide the native scrollbar
        onScroll={handleScroll}
        scrollEventThrottle={16} // Limits the number of scroll events, helps with performance
      />
      <View style={styles.customScrollBarContainer}>
        <View ref={scrollBarRef} style={styles.customScrollBar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  catContainer: {
    marginTop: 5,
    marginBottom: 5,
    marginTop: 0,
    flex: 1,
    height: 280,
  },
  catArrow: {
    width: 20,
    height: 15,
    marginLeft: 10,
    marginTop: 3,
  },
  catPress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 10,
    borderWidth: 0.5,
    borderColor: "#242424",
  },
  catHeader: {
    flexDirection: "row",
    marginLeft: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flexShrink: 1,
    color: "#242424",
    textAlign: "center",
  },
  customScrollBarContainer: {
    flex: 1,
    alignSelf: "center",
    height: 2,
    width: "95%",

    backgroundColor: "#242424",
    position: "absolute",
    bottom: 0,
  },
  customScrollBar: {
    height: 2,
    backgroundColor: "red",
    position: "absolute",
    left: 0,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
  },
});

export default CategoryContainer;
