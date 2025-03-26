import React, { useContext, useCallback } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GlobalContext } from "../../context";
import { useNavigation } from "@react-navigation/native";

const ShowAnswer = () => {
  const { QuestionNo, question, answer, setAnswer, setQuestion, setData } =
    useContext(GlobalContext);
  const navigation = useNavigation();

  const handleContinue = () => {
    const QnAobj = { Question: question, Answer: answer };
    setData((prevData) => [...prevData, QnAobj]);
    setQuestion(""), setAnswer("");

    navigation.navigate("LetsContinue");
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.imageContainer}>
        <Image source={require("../Logo.png")} style={styles.image} />
      </View>
      <View style={styles.Answer}>
        <View style={styles.headingOutter}>
          <Text style={styles.heading}>ANSWER #{QuestionNo}</Text>
        </View>
        <View style={styles.AnswerContainer}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={true}
            nestedScrollEnabled={true}
          >
            <Text style={styles.ShowAnswer}>{answer}</Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.ContinueOutter}>
        <View style={styles.ContinueContainer}>
          <Pressable onPress={handleContinue}>
            <Text style={styles.ContinueBTN}>CONTINUE</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Poppins-Regular",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingBottom: 30,
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
    fontFamily: "Aboreto-Regular",
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 41.76,
  },
  AnswerContainer: { width: 240, height: "60%" },
  scrollView: {
    width: "100%",
  },
  ShowAnswer: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    lineHeight: 36,
    color: "#D0AC7B",
    textAlign: "center",
    width: 240,
    height: 144,
  },
  ContinueOutter: {
    position: "static",
    height: "20%",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  ContinueContainer: {
    backgroundColor: "#D0AC7B",
    width: 220,
    height: 60,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "bottom",
  },
  ContinueBTN: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default ShowAnswer;
