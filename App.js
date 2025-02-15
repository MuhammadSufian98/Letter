import React, { useContext } from "react";
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
  Question,
  QuestionAsked,
  Answer,
  ShowAnswer,
  LetsContinue,
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
  { name: "Question", component: Question },
  { name: "QuestionAsked", component: QuestionAsked },
  { name: "Answer", component: Answer },
  { name: "ShowAnswer", component: ShowAnswer },
  { name: "LetsContinue", component: LetsContinue },
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
