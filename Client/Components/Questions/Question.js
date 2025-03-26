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
  const [Fill, setFill] = useState(false);
  const [TimerFilled, setTimerFilled] = useState(false);

  const handleAsk = () => {
    if (!question) {
      setFill(true);
    }
    if (!minutes) {
      setTimerFilled(true);
    }
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
            <Text style={styles.heading}>QUESTION #{QuestionNo}</Text>
            <View style={styles.questionContainer}>
              <View style={styles.InputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    !Fill ? styles.goldBorder : styles.redBorder,
                  ]}
                  placeholder="What is your question?"
                  value={question}
                  onChangeText={(text) => {
                    setQuestion(text);
                    setFill(false);
                  }}
                  multiline={true}
                />
              </View>
              <View style={styles.InputTimerContainer}>
                <Text style={styles.TimeHeading}>SET TIMER</Text>
                <TextInput
                  style={[
                    styles.inputTimer,
                    !TimerFilled ? styles.goldBorder : styles.redBorder,
                  ]}
                  placeholder="Enter minutes"
                  keyboardType="numeric"
                  value={minutes}
                  onChangeText={(text) => {
                    setMinutes(text);
                    setTimerFilled(false);
                  }}
                />
              </View>
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
    paddingBottom: 40,
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
    height: "45%",
  },

  heading: {
    fontFamily: "Aboreto-Regular",
    fontSize: 24,
  },
  questionContainer: {
    alignItems: "center",
    gap: 0,
  },
  InputContainer: {
    width: 321,
    height: 220,
  },
  input: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#D0AC7B",
    textAlignVertical: "top",
  },
  goldBorder: {
    borderColor: "#D0AC7B80",
  },
  redBorder: {
    borderColor: "#ff0f0f80",
  },
  InputTimerContainer: {
    alignItems: "center",
    width: "100%",
    gap: 10,
    paddingBottom: 20,
  },
  TimeHeading: {
    fontFamily: "Aboreto-Regular",
    fontSize: 16,
  },
  inputTimer: {
    width: 190,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#D0AC7B",
    textAlign: "center",
    paddingVertical: 0,
  },
  NextOutter: {
    height: "20%",
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
  ExitContainer: {
    width: 140,
    height: 57,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ExitBTN: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    textAlign: "center",
    color: "#00000",
  },
});

export default Question;
