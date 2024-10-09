import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import LandingScreen from "../screens/LandingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MangaDetailsScreen from "../screens/MangaDetailsScreen";
import ChapterScreen from "../screens/ChapterScreen";
import { images } from "../constants";
import SearchScreen from "../screens/SearchScreen";
import LoadingScreen from "../components/LoadingScreen"; // Import your LoadingScreen component

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MangaStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Landing"
      component={LandingScreen}
      options={{
        headerStyle: {
          backgroundColor: "#242424",
        },
        headerTintColor: "#fff",
        headerShown: true,
        headerTitle: () => (
          <Image
            source={images.mound}
            style={{
              width: 60,
              height: 80,
              objectFit: "cover",
            }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="MangaDetails"
      component={MangaDetailsScreen}
      options={{
        title: "Manga Details",
        headerStyle: { backgroundColor: "#242424" },
        headerTintColor: "#fff",
        headerShown: true,

        headerTitle: () => (
          <Image
            source={images.mound}
            style={{
              width: 60,
              height: 80,
              objectFit: "cover",
            }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="ChapterScreen"
      component={ChapterScreen}
      options={{
        headerStyle: {
          backgroundColor: "#242424",
        },
        headerTintColor: "#fff",
        headerShown: true,
        headerTitle: () => (
          <Image
            source={images.mound}
            style={{
              width: 60,
              height: 80,
              objectFit: "cover",
            }}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileTab"
      component={ProfileScreen}
      options={{
        title: "Profile", // Customize as needed
        headerStyle: { backgroundColor: "#242424" },
        headerTintColor: "#fff",
        headerShown: true,

        headerTitle: () => (
          <Image
            source={images.mound}
            style={{
              width: 60,
              height: 80,
              objectFit: "cover",
            }}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FavoritesTab"
      component={FavoritesScreen}
      options={{
        title: "Favorites", // Customize as needed
        headerStyle: { backgroundColor: "#242424" },
        headerTintColor: "#fff",
        headerShown: true,

        headerTitle: () => (
          <Image
            source={images.mound}
            style={{
              width: 60,
              height: 80,
              objectFit: "cover",
            }}
          />
        ),
      }}
    />
  </Stack.Navigator>
);
const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchTab"
      component={SearchScreen}
      options={{
        headerStyle: {
          backgroundColor: "#242424",
        },
        headerTintColor: "#fff",
        headerShown: true,
        headerTitle: () => (
          <Image
            source={images.mound}
            style={{
              width: 60,
              height: 80,
              objectFit: "cover",
            }}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const AnimatedIcon = ({ name, size, color, focused, activeTab, routeName }) => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (focused && activeTab === routeName) {
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [focused, activeTab, routeName, shakeAnimation]);

  const shake = shakeAnimation.interpolate({
    inputRange: [-1, 1],
    outputRange: [-5, 5],
  });

  return (
    <Animated.View style={{ transform: [{ translateY: shake }] }}>
      <Ionicons
        name={name}
        size={size}
        color={color}
        style={{ marginTop: 10 }}
      />
    </Animated.View>
  );
};

const TabBarButton = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
    {children}
  </TouchableOpacity>
);

const AppNavigator = () => {
  const [activeTab, setActiveTab] = useState("Manga");
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate data loading or other async operations
    const loadData = async () => {
      // Your loading logic goes here. This could be an API call or data fetching operation.
      // Simulating a delay with setTimeout
      setTimeout(() => {
        setIsLoading(false); // Hide the loading animation after loading is complete
      }, 3000);
    };

    loadData();
  }, []);

  const handleTabPress = (routeName) => {
    setActiveTab(routeName);
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* Set the StatusBar color */}
        <StatusBar barStyle="light-content" backgroundColor="#242424" />

        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: "#242424",
            },
            headerTintColor: "#fff",
            headerTitle: () => (
              <Image
                source={images.mound}
                style={{
                  width: 60,
                  height: 80,
                  objectFit: "cover",
                }}
              />
            ),
            headerShown: false,
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              backgroundColor: "#242424",
              borderTopWidth: 1,
              borderTopColor: "grey",
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Manga") {
                iconName = focused ? "book" : "book-outline";
              } else if (route.name === "Favorites") {
                iconName = focused ? "heart" : "heart-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "search" : "search-outline";
              }
              return (
                <AnimatedIcon
                  name={iconName}
                  size={size}
                  color={color}
                  focused={focused}
                  activeTab={activeTab}
                  routeName={route.name}
                />
              );
            },
            tabBarButton: (props) => (
              <TabBarButton
                {...props}
                onPress={() => {
                  handleTabPress(route.name);
                  props.onPress();
                }}
              />
            ),
          })}
        >
          <Tab.Screen name="Manga" component={MangaStack} />
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="Favorites" component={FavoritesStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>

      {/* Show the loading screen on top of everything else */}
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <LoadingScreen />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#242424",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default AppNavigator;
