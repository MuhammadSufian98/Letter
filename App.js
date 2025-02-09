import React from "react";
import { StyleSheet } from "react-native";
import FrontPage from "./Components/frontPage/FrontPage";
import WelcomePage from "./Components/welcomePage/welcomePage";
import Screen1 from "./Components/screen1";
import Screen2 from "./Components/screen2";
import Screen3 from "./Components/screen3";
import NameInput from "./Components/NameInput";
import BeginScreen from "./Components/BeginScreen";
import Question1 from "./Components/question1";
import QuestionAsked from "./Components/Question1Asked";
import Answer1 from "./Components/Answer1";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalProvider } from "./context";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="FrontPage"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="FrontPage" component={FrontPage} />
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
          <Stack.Screen name="NameInput" component={NameInput} />
          <Stack.Screen name="BeginScreen" component={BeginScreen} />
          <Stack.Screen name="Question1" component={Question1} />
          <Stack.Screen name="QuestionAsked" component={QuestionAsked} />
          <Stack.Screen name="Answer1" component={Answer1} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
});
