import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "../fontPoppins";

const NameInput = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("./Logo.png")} style={styles.image} />
      </View>
      <View style={styles.InputContainer}>
        <View style={styles.headingOutter}>
          <AppText style={styles.heading}>What is your name</AppText>
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
      </View>
      <View style={styles.NextOutter}>
        <View style={styles.NextContainer}>
          <Pressable onPress={() => navigation.navigate("BeginScreen")}>
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

  InputContainer: {
    height: "50%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  headingOutter: { width: 241, height: 84 },
  heading: {
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

export default NameInput;
