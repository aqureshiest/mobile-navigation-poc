import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SummaryScreen from "./screens/Summary";
import DashboardScreen from "./screens";
import Home from "./screens/payments/Home";

const Tab = createBottomTabNavigator();

const _layout = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="dashboard" component={DashboardScreen} />
      <Tab.Screen name="payments" component={Home} />
      <Tab.Screen name="summary" component={SummaryScreen} />
    </Tab.Navigator>
  );
};

export default _layout;
