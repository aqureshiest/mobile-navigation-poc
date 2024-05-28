import { View, Text, TouchableOpacity } from "react-native";

import React from "react";
import defaultStyles from "@/constants/Styles";
import { Link } from "expo-router";

const DashboardScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={defaultStyles.largeText}>React Navigation Dashboard</Text>

      <Text style={{ marginTop: 10 }}>Dashboard page content goes here...</Text>

      {/* ONLY using expo link here coz i couldnt figure out how to redirect back to main page */}
      <Link href="/" asChild style={{ marginTop: 20 }}>
        <TouchableOpacity style={defaultStyles.button}>
          <Text style={defaultStyles.buttonText}>Switch Navigation</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default DashboardScreen;
