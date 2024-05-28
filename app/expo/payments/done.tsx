import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import defaultStyles from "@/constants/Styles";
import { Link, Stack } from "expo-router";

const SubmitPayment = () => {
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
      <Stack.Screen options={{ headerTitle: "Submit Payment" }} />

      <Text style={defaultStyles.largeText}>
        Your payment has been submitted successfully!
      </Text>

      <Link href="expo/payments/make-payment-1" asChild>
        <TouchableOpacity style={defaultStyles.button}>
          <Text style={defaultStyles.buttonText}>Start Over</Text>
        </TouchableOpacity>
      </Link>

      <Link href="expo/dashboard" asChild>
        <TouchableOpacity style={defaultStyles.button}>
          <Text style={defaultStyles.buttonText}>Go to Dashboard</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default SubmitPayment;
