import React, { useState, useContext, useCallback } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GlobalContext } from "../../context";

const Question = () => {
  const navigation = useNavigation();
  const { question, setQuestion, QuestionNo, startTimer } =
    useContext(GlobalContext);
  const [minutes, setMinutes] = useState("");

  const handleAsk = () => {
    if (!isNaN(minutes) && minutes > 0 && question) {
      startTimer(Number(minutes));
      navigation.navigate("QuestionAsked");
    }
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ height: 825, justifyContent: "center" }}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <View style={styles.imageContainer}>
            <Image source={require("../Logo.png")} style={styles.image} />
          </View>
          <View style={styles.askQuestion}>
            <View style={styles.headingOutter}>
              <Text style={styles.heading}>QUESTION #{QuestionNo}</Text>
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.input}
                placeholder="What is your question?"
                value={question}
                onChangeText={setQuestion}
                multiline={true}
              />
            </View>
            <View style={styles.InputTimerContainer}>
              <Text style={styles.TimeHeading}>SET TIMER</Text>
              <TextInput
                style={styles.inputTimer}
                placeholder="Enter minutes"
                keyboardType="numeric"
                value={minutes}
                onChangeText={setMinutes}
              />
            </View>
          </View>
          <View style={styles.NextOutter}>
            <View style={styles.NextContainer}>
              <Pressable onPress={handleAsk}>
                <Text style={styles.NextBTN}>Ask</Text>
              </Pressable>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("Result");
              }}
              style={styles.ExitContainer}
            >
              <Text style={styles.ExitBTN}>Exit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    justifyContent: "space-between",
    alignItems: "center",
    height: "50%",
  },
  headingOutter: {
    alignItems: "center",
  },
  heading: {
    fontFamily: "Aboreto-Regular",
    fontSize: 36,
    fontWeight: "400",
    lineHeight: 41.76,
    paddingBottom: 10,
  },
  InputContainer: {
    width: 321,
    height: 300,
  },
  input: {
    width: "100%",
    height: 252,
    borderColor: "#D0AC7B80",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 36,
    color: "#D0AC7B",
    textAlign: "justify",
    textAlignVertical: "top",
    overflow: "hidden",
  },
  InputTimerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 20,
  },
  TimeHeading: {
    fontFamily: "Aboreto-Regular",
    fontSize: 20,
  },
  inputTimer: {
    width: 200,
    height: 40,
    borderColor: "#D0AC7B80",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "400",
    color: "#D0AC7B",
    textAlign: "center",
  },
  NextOutter: {
    height: "20%",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  NextContainer: {
    position: "fixed",
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
  ExitContainer: {
    width: 140,
    height: 57,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ExitBTN: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "400",
    color: "#00000",
  },
});

export default Question;
