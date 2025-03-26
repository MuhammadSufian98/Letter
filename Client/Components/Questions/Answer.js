import React, { useContext, useEffect, useCallback, useState } from "react";
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
  const [Fill, setFill] = useState(false);

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
                  style={[
                    styles.input,
                    !Fill ? styles.goldBorder : styles.redBorder,
                  ]}
                  placeholder="ANSWER"
                  value={answer}
                  onChangeText={(text) => {
                    setAnswer(text);
                    setFill(false);
                  }}
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
                  if (!answer) {
                    setFill(true);
                  }
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
  Answer: {
    width: 321,
    justifyContent: "center",
    alignItems: "center",
    height: "45%",
  },
  headingOutter: {
    alignItems: "center",
  },
  heading: {
    paddingBottom: 50,
    fontFamily: "Aboreto-Regular",
    fontSize: 24,
  },
  InputContainer: {
    width: 321,
    height: 250,
  },
  input: {
    fontFamily: "Poppins-Regular",
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#D0AC7B",
    textAlignVertical: "top",
  },
  goldBorder: {
    borderColor: "#D0AC7B",
  },
  redBorder: {
    borderColor: "#ff0f0f",
  },
  timerContainer: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  TimerHeading: {
    fontFamily: "Aboreto-Regular",
    fontSize: 20,
    fontWeight: "200",
  },
  timer: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
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
    width: 220,
    height: 60,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "bottom",
  },
  SubmitBTN: {
    fontFamily: "Poppins-Regular",
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default Answer;
