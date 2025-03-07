import React, { useContext, useCallback } from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GlobalContext } from "../../context";
import { useNavigation, CommonActions } from "@react-navigation/native";
import * as Print from "expo-print";

const Result = () => {
  const { Data, setData } = useContext(GlobalContext);
  const navigation = useNavigation();

  const html = `
  <html>
    <head>
      <meta 
        name="viewport" 
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" 
      />
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
  
        @page {
          size: A4;
          margin: 65px;
        }
        
        body {
          width: 794px;
          height: 1123px;
          margin: 0 auto;
          font-family: "Poppins", sans-serif;
          text-align: center;
        }
      </style>
    </head>
    <body>
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
          src="https://s3-alpha-sig.figma.com/img/0bd8/7aa2/328ab591fd9929ccb2eac57dafde36f0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ajH1nfCNb9~cLjc1cQ9sw4ESaQWfaD6aL591NYtF3ALZDId4wPZIi~EzzaQySIqFxxDmPe3884AjfsxK~c0r3WocqHbUq-ewqBuDINs1WJGjBjlKxvz7yicJLKY1mT02IscNVl-bG~KhyPYa6A53q8mR57TXThlW4FM4m8X68Uef6k9onR4zqp2F6y~hE8Ane6xPGG2g93zXeeg3EBtD9g-UoCd-RTMm7UmU6-2Go9~JUV2Bw6CiNtxt-3EU8lIqSj9wpQb3WgInIDDREbQJTw3HdIT94YNutWerv42YfJTfTv3YgwmOal1WtWojtPBf4PjT7P5u6rYRAR6SvTYoVg__" 
          alt="Logo" 
          width="400px"
        />
      </div>
            
      <div style="padding: 30px;">
        ${Data.map(
          (item) => `
          <div 
            style="
              display: flex; 
              gap: 20px; 
              align-items: flex-start; 
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
                flex: 1;
                max-width: 400px;
                width: 100%;
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
                flex: 1;
                max-width: 400px;
                width: 100%;
               min-width: 20px;
              "
            >
              ${item.Answer}
            </div>
          </div>
          `
        ).join("")}
      </div>
    </body>
  </html>
  `;

  const print = async () => {
    await Print.printAsync({ html });
  };

  const navigateToFrontPage = () => {
    setData("");
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
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/0bd8/7aa2/328ab591fd9929ccb2eac57dafde36f0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ajH1nfCNb9~cLjc1cQ9sw4ESaQWfaD6aL591NYtF3ALZDId4wPZIi~EzzaQySIqFxxDmPe3884AjfsxK~c0r3WocqHbUq-ewqBuDINs1WJGjBjlKxvz7yicJLKY1mT02IscNVl-bG~KhyPYa6A53q8mR57TXThlW4FM4m8X68Uef6k9onR4zqp2F6y~hE8Ane6xPGG2g93zXeeg3EBtD9g-UoCd-RTMm7UmU6-2Go9~JUV2Bw6CiNtxt-3EU8lIqSj9wpQb3WgInIDDREbQJTw3HdIT94YNutWerv42YfJTfTv3YgwmOal1WtWojtPBf4PjT7P5u6rYRAR6SvTYoVg__",
          }}
          style={styles.logo}
        />
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
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  BTNs: {
    justifyContent: "center",
    alignItems: "center",
  },
  DownloadContainer: {
    backgroundColor: "#D0AC7B",
    width: 200,
    height: 57,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  DownloadBTN: {
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
    fontSize: 24,
    textAlign: "center",
    fontWeight: "400",
    color: "#00000",
  },
});

export default Result;
