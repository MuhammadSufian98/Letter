import React, { useContext, useCallback } from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GlobalContext } from "../../context";
import { useNavigation, CommonActions } from "@react-navigation/native";
import * as Print from "expo-print";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

const Result = () => {
  const { Data, setData, name, setName, setQuestionNo } =
    useContext(GlobalContext);
  const navigation = useNavigation();

  const getBase64Image = async (imageAsset) => {
    const asset = Asset.fromModule(imageAsset);
    await asset.downloadAsync();

    const fileUri = asset.localUri;
    if (!fileUri) {
      throw new Error("Failed to load image asset");
    }

    return await FileSystem.readAsStringAsync(fileUri, { encoding: "base64" });
  };

  const getBase64Font = async (fontAsset) => {
    const asset = Asset.fromModule(fontAsset);
    await asset.downloadAsync();
    const fileUri = asset.localUri;
    if (!fileUri) {
      throw new Error("Failed to load font asset");
    }

    return await FileSystem.readAsStringAsync(fileUri, { encoding: "base64" });
  };

  const print = async () => {
    const imageBase64 = await getBase64Image(require("../../assets/Logo.png"));
    const fontBase64 = await getBase64Font(
      require("../../assets/Poppins-Regular_684471b5ff3c204b8d3b3da3bd4e082d.ttf")
    );
    const html = `
    <html>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <style>
        @page {
          size: A4;
          margin: 65px;
        }
        @font-face {
          font-family: 'Poppins-Regular';
          src: url('data:font/ttf;base64,${fontBase64}') format('truetype');
        }
        body {
          width: 794px;
          height: 1123px;
          margin: 0 auto;
          font-family: "Poppins-Regular", sans-serif;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div
        style="
          background: #fff;
          font-size: 24px;
          line-height: 30px;
  
          padding: 40px;
          box-shadow: inset #a9855f 0 0 0 5px, inset #c7a074 0 0 0 1px,
            inset #d0ac7b 0 0 0 10px, inset #e3c59a 0 0 0 11px,
            inset #f2dab5 0 0 0 16px, inset #fae8cd 0 0 0 17px,
            inset #fff7e5 0 0 0 21px, inset #fff3db 0 0 0 22px;
          text-shadow: 3px 3px 1px #e3c59a;
        "
      >
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            height: 150px;
            gap: 10px;
          "
        >
          <img
          src="data:image/png;base64,${imageBase64}"
          alt="Logo"
          width="400px"
          />
        </div>
          <hr style="
            border: none;
            height: 2px;
            background-color: #d0ac7b;
            margin: 20px auto;
          "
          />
        <div style="padding: 30px">
          ${Data.map(
            (item) => `
          <div
            style="
              display: flex;
              gap: 20px;
              margin-bottom: 20px;
              align-items: baseline;
            "
          >
            <div
              style="
                background-color: rgba(250, 231, 218);
                border-radius: 20px;
                padding: 5px 10px;
                text-align: left;
                max-width: 400px;
                min-width: 20px;
              "
            >
              ${item.Question}
            </div>
          </div>
  
          <div
            style="
              display: flex;
              flex-direction: row-reverse;
              gap: 20px;
              align-items: flex-start;
              margin-bottom: 20px;
              align-items: baseline;
            "
          >
            <div
              style="
                background-color: rgba(243, 235, 224);
                border-radius: 20px;
                padding: 5px 10px;
                text-align: right;
                max-width: 400px;
                min-width: 20px;
              "
            >
              ${item.Answer}
            </div>
          </div>
          `
          ).join("")}
        </div>
      </div>
    </body>
  </html>
    `;
    await Print.printAsync({ html });
  };

  const navigateToFrontPage = () => {
    setData([]);
    setName({
      firstName: "",
      lastName: "",
    });
    console.log(name);
    setQuestionNo(1);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "FrontPage" }],
      })
    );
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
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/Logo.png")} style={styles.logo} />
      </View>
      <View style={styles.BTNs}>
        <Pressable onPress={print} style={styles.DownloadContainer}>
          <Text style={styles.DownloadBTN}>Create PDF</Text>
        </Pressable>
        <Pressable onPress={navigateToFrontPage} style={styles.ExitContainer}>
          <Text style={styles.ExitBTN}>Exit</Text>
        </Pressable>
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
    padding: 20,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },
  logo: {
    width: 300,
    height: 1000,
    resizeMode: "contain",
  },
  BTNs: {
    justifyContent: "center",
    alignItems: "center",
  },
  DownloadContainer: {
    backgroundColor: "#D0AC7B",
    width: 220,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  DownloadBTN: {
    fontFamily: "Poppins-Regular",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "400",
    color: "#FFFFFF",
  },
  ExitContainer: {
    width: 140,
    height: 57,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ExitBTN: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
    color: "#000000",
  },
});

export default Result;
