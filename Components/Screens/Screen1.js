import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "../../fontPoppins";

const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../Logo.png")} style={styles.image} />
      </View>
      <View style={styles.DocContainer}>
        <View style={styles.headingOutter}>
          <AppText style={styles.heading}>ASK & REFLECT</AppText>
        </View>
        <View style={styles.textContainer}>
          <AppText style={styles.text}>
            This experience is about meaningful connection. Instead of speaking,
            you’ll ask and answer deep, thought-provoking questions—one at a
            time.
          </AppText>
          <AppText style={styles.text}>
            Write your question, pass the phone, and give space for reflection.
            Be intentional. The right question can open doors to understanding,
            vulnerability, and shared wisdom.
          </AppText>
        </View>
      </View>
      <View style={styles.NextOutter}>
        <View style={styles.NextContainer}>
          <Pressable onPress={() => navigation.navigate("Screen2")}>
            <AppText style={styles.NextBTN}>Next</AppText>
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
    height: 324,
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
  },
  NextContainer: {
    backgroundColor: "#D0AC7B",
    width: 240,
    height: 67,
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
});

export default Screen1;
