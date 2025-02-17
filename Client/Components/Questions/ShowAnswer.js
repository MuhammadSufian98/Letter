import React, { useContext } from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import { AppText } from "../../fontPoppins";
import { GlobalContext } from "../../context";
import { useNavigation } from "@react-navigation/native";

const ShowAnswer = () => {
  const {
    QuestionNo,
    setQuestionNo,
    question,
    answer,
    setAnswer,
    setQuestion,
    setData,
  } = useContext(GlobalContext);
  const navigation = useNavigation();

  const handleContinue = () => {
    setQuestionNo((prev) => prev + 1);
    const QnAobj = { Question: question, Answer: answer };
    setData((prevData) => [...prevData, QnAobj]);
    setQuestion(""), setAnswer("");
    navigation.navigate("LetsContinue");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../Logo.png")} style={styles.image} />
      </View>
      <View style={styles.Answer}>
        <View style={styles.headingOutter}>
          <AppText style={styles.heading}>ANSWER #{QuestionNo}</AppText>
        </View>
        <View style={styles.AnswerContainer}>
          <AppText style={styles.ShowAnswer}>{answer}</AppText>
        </View>
      </View>
      <View style={styles.CONTINUEOutter}>
        <View style={styles.CONTINUEContainer}>
          <Pressable onPress={handleContinue}>
            <AppText style={styles.CONTINUEBTN}>CONTINUE</AppText>
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
    backgroundColor: "#F5FCFF",
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
    gap: 40,
  },
  headingOutter: {
    alignItems: "center",
  },
  heading: {
    fontSize: 36,
    fontWeight: "400",
    lineHeight: 41.76,
  },
  AnswerContainer: { width: 240, height: "60%" },

  ShowAnswer: {
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 36,
    color: "#D0AC7B",
    textAlign: "center",
    width: 240,
    height: 144,
    justifyContent: "center",
  },
  CONTINUEOutter: {
    height: "20%",
    width: "100%",
    alignItems: "center",
  },
  CONTINUEContainer: {
    backgroundColor: "#D0AC7B",
    width: 240,
    height: 67,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  CONTINUEBTN: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default ShowAnswer;
