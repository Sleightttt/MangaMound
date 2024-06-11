// navigation/AppNavigator.js
import React from "react";
import {
  NavigationContainer,
  useNavigationState,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons"; // Optional: for icons

import LandingScreen from "../screens/LandingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MangaDetailsScreen from "../screens/MangaDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MangaStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Landing"
      component={LandingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MangaDetails"
      component={MangaDetailsScreen}
      options={{ title: "Manga Details", headerShown: false }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerLeftLabelVisible: true,
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
          ),
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
          tabBarHideOnKeyboard: true,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Manga") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "Favorites") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Manga" component={MangaStack} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
