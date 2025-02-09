import React, { useContext } from "react";
import { View, TextInput, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "../fontPoppins";
import { GlobalContext } from "../context";

const Question1 = () => {
  const navigation = useNavigation();
  const { Question, setQuestion } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("./Logo.png")} style={styles.image} />
      </View>
      <View style={styles.askQuestion}>
        <View style={styles.headingOutter}>
          <AppText style={styles.heading}>Question #1</AppText>
        </View>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.input}
            placeholder="What is your question?"
            value={Question}
            onChangeText={(text) => setQuestion(text)}
            multiline={true}
          />
        </View>
        <View>
          <AppText>SET TIMER</AppText>
        </View>
      </View>
      <View style={styles.NextOutter}>
        <View style={styles.NextContainer}>
          <Pressable
            onPress={() => navigation.navigate("TimerScreen", { minutes: 2, seconds: 0 })}
          >
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
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    gap: 20,
  },
  headingOutter: {
    alignItems: "center",
  },
  heading: {
    fontSize: 36,
    fontWeight: "400",
    lineHeight: 41.76,
  },
  input: {
    height: 252,
    width: 288,
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
  textContainer: {
    width: 321,
    height: 324,
  },
  NextOutter: {
    height: "20%",
    width: "100%",
    alignItems: "center",
  },
  NextContainer: {
    backgroundColor: "#D0AC7B",
    width: 240,
    height: 67,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  NextBTN: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default Question1;
