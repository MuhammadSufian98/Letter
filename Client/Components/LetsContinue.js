import React, { useContext, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Text,
  BackHandler,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GlobalContext } from "../context";

const LetsContinue = () => {
  const navigation = useNavigation();
  const { setQuestionNo, Data } = useContext(GlobalContext);

  useEffect(() => {
    const backAction = () => {
      return true; // Prevent going back
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  async function postData() {
    try {
      console.log(Data);
      const response = await axios.post("http://localhost:3000/submit", Data);
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }

  const handleNext = () => {
    setQuestionNo((prev) => prev + 1);

    navigation.navigate("Question");
  };
  const handleExit = () => {
    postData();

    setQuestionNo(1);
    navigation.navigate("Result");
  };

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
          <Text style={styles.heading}>LET’S CONTINUE</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Please pass the phone to Michelle. She will ask the second question.
          </Text>
        </View>
      </View>
      <View style={styles.NextOutter}>
        <View style={styles.NextContainer}>
          <Pressable onPress={handleNext}>
            <Text style={styles.NextBTN}>Next</Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={handleExit}>
            <Text style={styles.ExitBTN}>Exit</Text>
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
    height: 160,
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
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
    gap: 20,
  },
  NextContainer: {
    backgroundColor: "#D0AC7B",
    width: 240,
    height: 67,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "bottom",
  },
  NextBTN: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "400",
    color: "#FFFFFF",
  },
  ExitBTN: {
    fontSize: 18,
  },
});

export default LetsContinue;
