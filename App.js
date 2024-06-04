import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // for icons

import Discover from "./components/Discover";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === "Discover") {
              iconName = "compass-outline";
            } else if (route.name === "Profile") {
              iconName = "account-outline";
            } else if (route.name === "Favorites") {
              iconName = "heart-outline";
            }

            return (
              <MaterialCommunityIcons name={iconName} size={24} color={color} />
            );
          },
        })}
      >
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
