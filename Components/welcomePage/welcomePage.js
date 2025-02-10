import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "../../fontPoppins";


const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      </View>
      <View style={styles.innerContainer}>
        <Image source={require("../Logo.png")} style={styles.image} />
        <AppText style={styles.text}>W E L C O M E T O</AppText>
        <AppText style={styles.name}>SOLOMON’S</AppText>
        <AppText style={styles.text}>L E T T E R S</AppText>
      </View>
      <View style={styles.NextOutter}>
        <View style={styles.NextContainer}>
          <Pressable onPress={() => navigation.navigate("Screen1")}>
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
    backgroundColor: "#F5FCFF",
    width: "100%",
    height: "100%",
    gap: 100,
  },
  imageContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "20%",
  },
  image: {
    width: 135,
    height: 135,
  },
  innerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    gap: 10,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "400",
    color: "#D0AC7B",
  },
  name: {
    fontSize: 45,
    color: "#1E1E1E",
  },
  NextOutter: {
    position: "static",
    height: "30%",
    width: "100%",
    alignItems: "center",
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
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default WelcomePage;
