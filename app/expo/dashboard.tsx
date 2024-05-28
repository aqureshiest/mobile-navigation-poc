import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import defaultStyles from "@/constants/Styles";
import { Link } from "expo-router";

const DashboardPage = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={defaultStyles.largeText}>Expo Router Dashboard</Text>

      <Text style={{ marginTop: 10 }}>Dashboard page content goes here...</Text>

      <Link href="/" asChild style={{ marginTop: 20 }}>
        <TouchableOpacity style={defaultStyles.button}>
          <Text style={defaultStyles.buttonText}>Switch Navigation</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DashboardPage;
