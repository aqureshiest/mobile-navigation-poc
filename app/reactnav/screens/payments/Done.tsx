import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import defaultStyles from "@/constants/Styles";

const DoneScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        alignContent: "center",
        justifyContent: "center",
        padding: 20,
        gap: 20,
        flex: 1,
      }}
    >
      <Text style={defaultStyles.largeText}>
        Your payment has been submitted successfully!
      </Text>

      <TouchableOpacity
        style={defaultStyles.button}
        onPress={() => navigation.navigate("MakePayments1")}
      >
        <Text style={defaultStyles.buttonText}>Start Over</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={defaultStyles.button}
        onPress={() => navigation.navigate("dashboard")}
      >
        <Text style={defaultStyles.buttonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoneScreen;
