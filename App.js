import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import FrontPage from "./Components/frontPage/FrontPage";

export default function App() {
  return (
    <View style={styles.container}>
      <FrontPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
});
