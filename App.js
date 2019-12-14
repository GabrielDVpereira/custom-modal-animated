import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/HomeScreen";
import ContextProvider from "./src/Context/index.js";

export default function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}
