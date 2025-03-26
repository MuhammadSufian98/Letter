import React, { useContext, useCallback } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { GlobalContext } from "../context";
import * as SplashScreen from "expo-splash-screen";

const BeginScreen = () => {
  const navigation = useNavigation();
  const { name } = useContext(GlobalContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins-Regular_684471b5ff3c204b8d3b3da3bd4e082d.ttf"),
    "Aboreto-Regular": require("../assets/Aboreto Regular 400.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.imageContainer}>
        <Image source={require("./Logo.png")} style={styles.image} />
      </View>
      <View style={styles.DocContainer}>
        <View style={styles.headingOutter}>
          <Text style={styles.heading}>LET’S BEGIN</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Please pass the phone to {name.firstName} {name.lastName}. He/She
            will ask the first question.
          </Text>
        </View>
      </View>
      <View style={styles.NextOutter}>
        <View style={styles.NextContainer}>
          <Pressable onPress={() => navigation.navigate("Question")}>
            <Text style={styles.NextBTN}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Poppins-Regular",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    paddingBottom: 30,
  },
  imageContainer: {
    flexDirection: "column",
    justifyContent: "center",
    height: "30%",
  },
  image: {
    width: 70,
    height: 70,
  },
  DocContainer: {
    width: 321,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  headingOutter: {
    alignItems: "center",
  },
  heading: {
    fontFamily: "Aboreto-Regular",
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 41.76,
  },
  textContainer: {
    width: 321,
    height: 324,
  },
  text: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    margin: 10,
    lineHeight: 27,
    color: "#D0AC7B",
  },
  NextOutter: {
    position: "static",
    height: "20%",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  NextContainer: {
    backgroundColor: "#D0AC7B",
    width: 220,
    height: 60,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "bottom",
  },
  NextBTN: {
    fontFamily: "Poppins-Regular",
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default BeginScreen;
