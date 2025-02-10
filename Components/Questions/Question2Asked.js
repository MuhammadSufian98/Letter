import React, { useContext } from "react";
import { View, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "../../fontPoppins";
import { GlobalContext } from "../../context";

const Question2Asked = () => {
  const { question, seconds } = useContext(GlobalContext);
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
      <View style={styles.askQuestion}>
        <View style={styles.headingOutter}>
          <AppText style={styles.heading}>QUESTION #2</AppText>
          <View style={styles.QuestionContainer}>
            <AppText style={styles.Question}>
              {question || "What is your question?"}
            </AppText>
          </View>
        </View>
        <View style={styles.timerContainer}>
          <AppText style={styles.TimerHeading}>TIME REMAINING</AppText>
          <AppText style={styles.timer}>{formatTime()}</AppText>
        </View>
      </View>
      <View style={styles.RespondOutter}>
        <View style={styles.RespondContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate("Answer2");
            }}
          >
            <AppText style={styles.RespondBTN}>Respond</AppText>
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
    justifyContent:"center",
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
    fontSize: 58,
  },
  RespondOutter: {
    height: "20%",
    width: "100%",
    alignItems: "center",
  },
  RespondContainer: {
    backgroundColor: "#D0AC7B",
    width: 240,
    height: 67,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  RespondBTN: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default Question2Asked;
