import React from "react";
import { StyleSheet } from "react-native";
import FrontPage from "./Components/frontPage/FrontPage";
import WelcomePage from "./Components/welcomePage/welcomePage";
import Screen1 from "./Components/Screens/Screen1";
import Screen2 from "./Components/Screens/Screen2";
import Screen3 from "./Components/Screens/Screen3";
import NameInput from "./Components/NameInput";
import BeginScreen from "./Components/BeginScreen";
import Question1 from "./Components/Questions/Question1";
import Question1Asked from "./Components/Questions/Question1Asked";
import Answer1 from "./Components/Questions/Answer1";
import ShowAnswer1 from "./Components/Questions/ShowAnswer1";
import LetsContinue from "./Components/LetsContinue";
import Question2 from "./Components/Questions/Question2";
import Question2Asked from "./Components/Questions/Question2Asked";
import Answer2 from "./Components/Questions/Answer2";
import ShowAnswer2 from "./Components/Questions/ShowAnswer2";
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
          <Stack.Screen name="Question1Asked" component={Question1Asked} />
          <Stack.Screen name="Answer1" component={Answer1} />
          <Stack.Screen name="ShowAnswer1" component={ShowAnswer1} />
          <Stack.Screen name="LetsContinue" component={LetsContinue} />
          <Stack.Screen name="Question2" component={Question2} />
          <Stack.Screen name="Question2Asked" component={Question2Asked} />
          <Stack.Screen name="Answer2" component={Answer2} />
          <Stack.Screen name="ShowAnswer2" component={ShowAnswer2} />
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
