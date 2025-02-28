import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const NameInput = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins-Regular_684471b5ff3c204b8d3b3da3bd4e082d.ttf"),
    "Aboreto-Regular": require("../assets/Aboreto Regular 400.ttf"),
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ height: 825, justifyContent: "center" }}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <View style={styles.imageContainer}>
            <Image source={require("./Logo.png")} style={styles.image} />
          </View>
          <View style={styles.InputContainer}>
            <View style={styles.headingOutter}>
              <Text style={styles.heading}>What is your name</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="FIRST NAME"
              placeholderTextColor="#D0AC7B80"
              value={name.firstName}
              onChangeText={(text) =>
                setName((prev) => ({ ...prev, firstName: text }))
              }
            />

            <TextInput
              style={[styles.input, isFocused && styles.inputFocused]}
              placeholder="LAST NAME"
              placeholderTextColor="#D0AC7B80"
              value={name.lastName}
              onChangeText={(text) =>
                setName((prev) => ({ ...prev, lastName: text }))
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />

            {!name.firstName.trim() && (
              <Text style={styles.warningText}>
                Enter first name to continue
              </Text>
            )}
          </View>
          <View style={styles.NextOutter}>
            <View style={styles.NextContainer}>
              <Pressable
                onPress={() => navigation.navigate("BeginScreen")}
                disabled={!name.firstName.trim()}
                style={({ pressed }) => [
                  styles.NextBTNContainer,
                  !name.firstName.trim() && styles.disabledBTN,
                  pressed && styles.pressedBTN,
                ]}
              >
                <Text style={styles.NextBTN}>Next</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Poppins-Regular",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    height: "100%",
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
  InputContainer: {
    height: "50%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  headingOutter: { width: 241, height: 84 },
  heading: {
    fontFamily: "Aboreto-Regular",
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "400",
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "#D0AC7B80",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#D0AC7B",
  },
  inputFocused: {
    borderColor: "#D0AC7B",
  },
  warningText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },

  NextOutter: {
    height: "20%",
    width: "100%",
    alignItems: "center",
  },
  NextContainer: {
    width: 240,
    height: 67,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  NextBTNContainer: {
    backgroundColor: "#D0AC7B",
    width: "100%",
    height: "100%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  NextBTN: {
    fontSize: 24,
    fontWeight: "400",
    color: "#FFFFFF",
  },
  disabledBTN: {
    backgroundColor: "#D0AC7B80",
  },
  pressedBTN: {
    opacity: 0.7,
  },
});

export default NameInput;
