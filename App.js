import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // for icons
import { Animated, SafeAreaView, TouchableOpacity } from "react-native";

import Discover from "./components/Discover";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";

const Tab = createBottomTabNavigator();

function App() {
  function ShakingIcon({ name, color, focused }) {
    const shakeAnimation = React.useRef(new Animated.Value(0)).current;
    console.log(`${focused} is focused, name is ${name}`);

    React.useEffect(() => {
      if (focused) {
        Animated.sequence([
          Animated.timing(shakeAnimation, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnimation, {
            toValue: -1,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnimation, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnimation, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          }),
        ]).start();
      }
    }, [focused]);

    const shakeInterpolate = shakeAnimation.interpolate({
      inputRange: [-1, 1],
      outputRange: [-10, 10],
    });

    const animatedStyle = {
      transform: [{ translateX: shakeInterpolate }],
    };

    return (
      <Animated.View style={animatedStyle}>
        <MaterialCommunityIcons name={name} size={24} color={color} />
      </Animated.View>
    );
  }

  const handleTabPress = (routeName) => {
    console.log(`${routeName} tab clicked`);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, focused }) => {
              let iconName;

              if (route.name === "Discover") {
                iconName = "compass-outline";
              } else if (route.name === "Profile") {
                iconName = "account-outline";
              } else if (route.name === "Favorites") {
                iconName = "heart-outline";
              }

              return (
                <ShakingIcon name={iconName} color={color} focused={focused} />
              );
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "black",
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  handleTabPress(route.name);
                  props.onPress();
                }}
              />
            ),
          })}
        >
          <Tab.Screen name="Discover" component={Discover} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
