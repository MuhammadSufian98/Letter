import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "../fontPoppins";


const Screen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("./Logo.png")} style={styles.image} />
      </View>
      <View style={styles.DocContainer}>
        <View style={styles.headingOutter}>
          <Text style={styles.heading}>Time & Truth</Text>
        </View>
        <View style={styles.textContainer}>
          <AppText style={styles.text}>
            Each response has a timer—set the time, and let the moment unfold.
            The countdown isn’t a rush; it’s an invitation to pause, think, and
            express yourself fully.
          </AppText>
          <AppText style={styles.text}>
            Be present. Thoughtful answers lead to unforgettable moments.
          </AppText>
        </View>
      </View>
      <View style={styles.NextOutter}>
        <View style={styles.NextContainer}>
          <Pressable onPress={() => navigation.navigate("Screen3")}>
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

export default Screen2;
