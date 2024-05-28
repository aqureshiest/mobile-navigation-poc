import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import defaultStyles from "@/constants/Styles";

const MakePayment2 = ({ navigation }: { navigation: any }) => {
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

      <Text style={defaultStyles.largeText}>Step 2</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={defaultStyles.button}
          onPress={() => navigation.navigate("MakePayments3")}
        >
          <Text style={defaultStyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MakePayment2;
