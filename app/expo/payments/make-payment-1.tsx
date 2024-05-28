import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import defaultStyles from "@/constants/Styles";
import { Link, Tabs } from "expo-router";

const MakePayment = () => {
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
      <Text style={defaultStyles.largeText}>Make A Payment</Text>

      <Text style={defaultStyles.largeText}>Step 1</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Link href="expo/payments/make-payment-2" asChild>
          <TouchableOpacity style={defaultStyles.button}>
            <Text style={defaultStyles.buttonText}>Next</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default MakePayment;
