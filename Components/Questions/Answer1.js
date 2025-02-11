import React, { useContext } from "react";
import { View, Pressable, Image, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "../../fontPoppins";
import { GlobalContext } from "../../context";

const Answer1 = () => {
  const { answer, setAnswer, seconds, stopTimer, QuestionNo } =
    useContext(GlobalContext);
  const navigation = useNavigation();

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../Logo.png")} style={styles.image} />
      </View>
      <View style={styles.Answer}>
        <View style={styles.headingOutter}>
          <AppText style={styles.heading}>ANSWER #{QuestionNo}</AppText>
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
          <AppText style={styles.TimerHeading}>TIME REMAINING</AppText>
          <AppText style={styles.timer}>{formatTime()}</AppText>
        </View>
      </View>
      <View style={styles.SubmitOutter}>
        <View style={styles.SubmitContainer}>
          <Pressable
            onPress={() => {
              stopTimer();
              navigation.navigate("ShowAnswer1");
            }}
          >
            <AppText style={styles.SubmitBTN}>SUBMIT</AppText>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    paddingHorizontal: 25,
    paddingVertical: 25,
  },

  timerContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  TimerHeading: {
    fontSize: 20,
    fontWeight: "200",
  },
  timer: {
    fontSize: 38,
  },
  SubmitOutter: {
    height: "20%",
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
    alignItems: "center",
  },
  SubmitBTN: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default Answer1;
