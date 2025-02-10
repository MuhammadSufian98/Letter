import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalProvider } from "./context";
import {
  FrontPage,
  WelcomePage,
  Screen1,
  Screen2,
  Screen3,
  NameInput,
  BeginScreen,
  Question1,
  Question1Asked,
  Answer1,
  ShowAnswer1,
  LetsContinue,
  Question2,
  Question2Asked,
  Answer2,
  ShowAnswer2,
} from "./screens";

const Stack = createNativeStackNavigator();

const screens = [
  { name: "FrontPage", component: FrontPage },
  { name: "WelcomePage", component: WelcomePage },
  { name: "Screen1", component: Screen1 },
  { name: "Screen2", component: Screen2 },
  { name: "Screen3", component: Screen3 },
  { name: "NameInput", component: NameInput },
  { name: "BeginScreen", component: BeginScreen },
  { name: "Question1", component: Question1 },
  { name: "Question1Asked", component: Question1Asked },
  { name: "Answer1", component: Answer1 },
  { name: "ShowAnswer1", component: ShowAnswer1 },
  { name: "LetsContinue", component: LetsContinue },
  { name: "Question2", component: Question2 },
  { name: "Question2Asked", component: Question2Asked },
  { name: "Answer2", component: Answer2 },
  { name: "ShowAnswer2", component: ShowAnswer2 },
];

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="FrontPage"
          screenOptions={{ headerShown: false }}
        >
          {screens.map(({ name, component }) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}


