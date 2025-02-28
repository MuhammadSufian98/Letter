import React, { useContext, useEffect, useCallback } from "react";
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GlobalContext } from "../../context";

const Answer = () => {
  const { answer, setAnswer, seconds, stopTimer, QuestionNo } =
    useContext(GlobalContext);
  const navigation = useNavigation();
  useEffect(() => {
    if (seconds === 0) {
      stopTimer();
      navigation.navigate("ShowAnswer");
    }
  }, [seconds]);

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ height: 825, justifyContent: "center" }}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <View style={styles.imageContainer}>
            <Image source={require("../Logo.png")} style={styles.image} />
          </View>
          <View style={styles.Answer}>
            <View style={styles.headingOutter}>
              <Text style={styles.heading}>ANSWER #{QuestionNo}</Text>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="ANSWER"
                  value={answer}
                  onChangeText={setAnswer}
                  multiline={true}
                />
              </View>
            </View>
            <View style={styles.timerContainer}>
              <Text style={styles.TimerHeading}>TIME REMAINING</Text>
              <Text style={styles.timer}>{formatTime()}</Text>
            </View>
          </View>
          <View style={styles.SubmitOutter}>
            <View style={styles.SubmitContainer}>
              <Pressable
                onPress={() => {
                  if (answer) {
                    stopTimer();
                    navigation.navigate("ShowAnswer");
                  }
                }}
              >
                <Text style={styles.SubmitBTN}>SUBMIT</Text>
              </Pressable>
            </View>
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
  Answer: {
    width: 321,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
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
  InputContainer: {
    width: 321,
    height: 280,
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
  SubmitOutter: {
    position: "static",
    height: "20%",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  SubmitContainer: {
    backgroundColor: "#D0AC7B",
    width: 240,
    height: 67,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "bottom",
  },
  SubmitBTN: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default Answer;
