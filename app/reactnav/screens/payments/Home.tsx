import { View, Text } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MakePayments1 from "./MakePayments1";
import MakePayments2 from "./MakePayments2";
import MakePayments3 from "./MakePayments3";
import DoneScreen from "./Done";

const Stack = createStackNavigator();

const DashboardScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MakePayments1" component={MakePayments1} />
      <Stack.Screen name="MakePayments2" component={MakePayments2} />
      <Stack.Screen name="MakePayments3" component={MakePayments3} />
      <Stack.Screen name="Done" component={DoneScreen} />
    </Stack.Navigator>
  );
};

export default DashboardScreen;
