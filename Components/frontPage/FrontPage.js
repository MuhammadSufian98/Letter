import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "../../fontPoppins";


const FrontPage = () => {
  const [selected, setSelected] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../Logo.png")} style={styles.image} />
      </View>

      <View style={styles.lang}>
        <View
          style={[
            styles.innerLang,
            selected === "English" && styles.selectedBorder,
          ]}
        >
          <Pressable
            style={styles.langContainer}
            onPress={() => setSelected("English")}
          >
            <Image
              source={require("./united-states.png")}
              style={styles.langImage}
            />
            <AppText style={styles.text}>English</AppText>
          </Pressable>
        </View>

        <View
          style={[
            styles.innerLang,
            selected === "Español" && styles.selectedBorder,
          ]}
        >
          <Pressable
            style={styles.langContainer}
            onPress={() => setSelected("Español")}
          >
            <Image source={require("./world.png")} style={styles.langImage} />
            <AppText style={styles.text}>Español</AppText>
          </Pressable>
        </View>
      </View>
      <View style={styles.NextOutter}>
        <View
          style={
            selected === "Español" || selected === "English"
              ? styles.NextContainer
              : { display: "none" }
          }
        >
          <Pressable onPress={() => navigation.navigate("WelcomePage")}>
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
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "400",
    color: "#D0AC7B",
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
  lang: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50%",
    gap: 20,
  },
  innerLang: {
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "transparent",
    width: 219,
    height: 70,
  },
  selectedBorder: {
    borderColor: "#D0AC7B",
  },
  langContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingRight: 40,
  },
  langImage: {
    width: 40,
    height: 40,
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

export default FrontPage;
