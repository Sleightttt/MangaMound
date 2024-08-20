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
    //current position of the scroll view
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    //total width of the scroll view
    const contentWidth = event.nativeEvent.contentSize.width;
    //length of the visible part of the scroll view
    const visibleWidth = event.nativeEvent.layoutMeasurement.width;

    // Calculate the width of the scroll bar as a ratio of the visible width to the total content width
    const scrollBarWidth = (visibleWidth / contentWidth) * visibleWidth;
    // Calculate the position of the scroll bar based on the scroll position
    const scrollBarPosition = (contentOffsetX / contentWidth) * visibleWidth;

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
    height: 2,
    width: "90%",
    backgroundColor: "#252525",
    position: "absolute",
    bottom: 0,
  },
  customScrollBar: {
    height: 2,
    backgroundColor: "red",
    position: "absolute",
    left: 0,
  },
});

export default CategoryContainer;
