import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Splash from "./Screens/Splash";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headersShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{ headersShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headersShown: false }}
          name="Signup"
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
