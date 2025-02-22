import React, { useContext } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { AppText } from "../fontPoppins";
import { GlobalContext } from "../context";

const LetsContinue = () => {
  const navigation = useNavigation();
  const { setQuestionNo, Data } = useContext(GlobalContext);

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
    navigation.navigate("Question");
  };
  const handleExit = () => {
    postData();
    setQuestionNo(1);
    navigation.navigate("Result");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("./Logo.png")} style={styles.image} />
      </View>
      <View style={styles.DocContainer}>
        <View style={styles.headingOutter}>
          <AppText style={styles.heading}>LET’S CONTINUE</AppText>
        </View>
        <View style={styles.textContainer}>
          <AppText style={styles.text}>
            Please pass the phone to Michelle. She will ask the second question.
          </AppText>
        </View>
      </View>
      <View style={styles.NextOutter}>
        <View style={styles.NextContainer}>
          <Pressable onPress={handleNext}>
            <AppText style={styles.NextBTN}>Next</AppText>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={handleExit}>
            <AppText style={styles.ExitBTN}>Exit</AppText>
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
