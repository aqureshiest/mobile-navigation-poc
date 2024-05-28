import { View, Text } from "react-native";
import React from "react";
import defaultStyles from "@/constants/Styles";

const summary = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={defaultStyles.largeText}>Expo Router Summary</Text>

      <Text style={{ marginTop: 10 }}>Summary page content goes here...</Text>
    </View>
  );
};

export default summary;
