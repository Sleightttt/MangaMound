import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import "./firebaseConfig"; // Just import it to ensure it's initialized

export default function App() {
  return <AppNavigator />;
}
