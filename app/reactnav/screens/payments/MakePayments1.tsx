import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import defaultStyles from "@/constants/Styles";

const MakePayment1 = ({ navigation }: { navigation: any }) => {
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
        <TouchableOpacity
          style={defaultStyles.button}
          onPress={() => navigation.navigate("MakePayments2")}
        >
          <Text style={defaultStyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MakePayment1;
