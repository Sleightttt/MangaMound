import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  TouchableOpacity,
  StatusBar,
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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
//main stack with landing page and mangadetails page
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
      options={{
        title: "Manga Details",
        headerStyle: { backgroundColor: "#242424" },
        headerTintColor: "#fff",
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ChapterScreen"
      component={ChapterScreen}
      options={{ headerShown: false }}
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
      <Ionicons name={name} size={size} color={color} />
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

  const handleTabPress = (routeName) => {
    setActiveTab(routeName);
  };

  return (
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
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
