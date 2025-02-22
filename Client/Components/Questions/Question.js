import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "../../fontPoppins";
import { GlobalContext } from "../../context";

const Question = () => {
  const navigation = useNavigation();
  const { question, setQuestion, QuestionNo, startTimer } =
    useContext(GlobalContext);
  const [minutes, setMinutes] = useState("");

  const handleAsk = () => {
    if (!isNaN(minutes) && minutes > 0) {
      startTimer(Number(minutes));
      navigation.navigate("QuestionAsked");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../Logo.png")} style={styles.image} />
      </View>
      <View style={styles.askQuestion}>
        <View style={styles.headingOutter}>
          <AppText style={styles.heading}>QUESTION #{QuestionNo}</AppText>
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
          <AppText style={styles.TimeHeading}>SET TIMER</AppText>
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
            <AppText style={styles.NextBTN}>Ask</AppText>
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
    justifyContent: "space-between",
    alignItems: "center",
    height: "50%",
  },
  headingOutter: {
    alignItems: "center",
  },
  heading: {
    fontSize: 36,
    fontWeight: "400",
    lineHeight: 41.76,
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
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  InputTimerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 20,
  },
  TimeHeading: {
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
    width: "100%",
    alignItems: "center",
    // justifyContent: "center",
  },
  NextContainer: {
    backgroundColor: "#D0AC7B",
    width: 240,
    height: 67,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  NextBTN: {
    position: "static",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default Question;
