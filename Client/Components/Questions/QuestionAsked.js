import React, { useContext, useCallback } from "react";
import { View, Pressable, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GlobalContext } from "../../context";

const QuestionAsked = () => {
  const { question, QuestionNo, seconds } = useContext(GlobalContext);
  const navigation = useNavigation();

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/Poppins-Regular_684471b5ff3c204b8d3b3da3bd4e082d.ttf"),
    "Aboreto-Regular": require("../../assets/Aboreto Regular 400.ttf"),
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
        <Image source={require("../Logo.png")} style={styles.image} />
      </View>
      <View style={styles.askQuestion}>
        <View style={styles.headingOutter}>
          <Text style={styles.heading}>QUESTION #{QuestionNo}</Text>
          <View style={styles.QuestionContainer}>
            <Text style={styles.Question}>
              {question || "What is your question?"}
            </Text>
          </View>
        </View>
        <View style={styles.timerContainer}>
          <Text style={styles.TimerHeading}>TIME REMAINING</Text>
          <Text style={styles.timer}>{formatTime()}</Text>
        </View>
      </View>
      <View style={styles.RespondOutter}>
        <View style={styles.RespondContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate("Answer");
            }}
          >
            <Text style={styles.RespondBTN}>Respond</Text>
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
  askQuestion: {
    width: 321,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    gap: 40,
  },
  headingOutter: {
    alignItems: "center",
    gap: 30,
  },
  heading: {
    fontFamily: "Aboreto-Regular",
    fontSize: 36,
    fontWeight: "400",
    lineHeight: 41.76,
  },
  QuestionContainer: { width: 240, height: "30%" },

  Question: {
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 36,
    color: "#D0AC7B",
    textAlign: "center",
    width: 240,
    height: 144,
    justifyContent: "center",
  },
  timerContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  TimerHeading: {
    fontFamily: "Aboreto-Regular",
    fontSize: 20,
    fontWeight: "200",
  },
  timer: {
    fontSize: 38,
  },
  RespondOutter: {
    position: "static",
    height: "20%",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  RespondContainer: {
    backgroundColor: "#D0AC7B",
    width: 240,
    height: 67,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "bottom",
  },
  RespondBTN: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default QuestionAsked;
