import React, { useState, useCallback } from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const FrontPage = () => {
  const [selected, setSelected] = useState("");
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/Poppins-Regular_684471b5ff3c204b8d3b3da3bd4e082d.ttf"),
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
            <Text style={styles.text}>English</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.NextOutter}>
        <View
          style={
            selected === "English" ? styles.NextContainer : { display: "none" }
          }
        >
          <Pressable onPress={() => navigation.navigate("WelcomePage")}>
            <Text style={styles.NextBTN}>Next</Text>
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
});

export default FrontPage;
