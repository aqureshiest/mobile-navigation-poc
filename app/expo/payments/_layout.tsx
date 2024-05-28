import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="make-payment-1" options={{ headerTitle: "Step 1" }} />
      <Stack.Screen name="make-payment-2" options={{ headerTitle: "Step 2" }} />
      <Stack.Screen name="make-payment-3" options={{ headerTitle: "Step 3" }} />
      <Stack.Screen name="done" />
    </Stack>
  );
};

export default _layout;
