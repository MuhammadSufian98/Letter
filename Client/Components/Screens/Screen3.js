import React, { useCallback } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Screen3 = () => {
  const navigation = useNavigation();

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
      <View style={styles.DocContainer}>
        <View style={styles.headingOutter}>
          <Text style={styles.heading}>A Memory to Keep</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Every exchange is saved as a beautifully formatted letter—a keepsake
            of your shared conversation. These memories remain private but can
            be shared within the app by invitation.
          </Text>
          <Text style={styles.text}>
            Be sincere. The words you write today may become a treasured memory
            tomorrow.
          </Text>
        </View>
      </View>
      <View style={styles.NextOutter}>
        <View style={styles.NextContainer}>
          <Pressable onPress={() => navigation.navigate("NameInput")}>
            <Text style={styles.NextBTN}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Aboreto-Regular",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
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
  DocContainer: {
    width: 321,
    height: "50%",
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
  textContainer: {
    width: 321,
    height: 324,
  },
  text: {
    fontFamily: "Poppins-Regular",
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
    width: 220,
    height: 60,
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

export default Screen3;
