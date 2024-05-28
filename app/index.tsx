import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import defaultStyles from "@/constants/Styles";

const IndexPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.centerText}>
      <Text style={styles.heading}>Navigation POC</Text>
      <View style={{ marginTop: 30, gap: 20 }}>
        <TouchableOpacity
          style={defaultStyles.button}
          onPress={() => router.navigate("/expo")}
        >
          <Text style={defaultStyles.buttonText}>Expo Router</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={defaultStyles.button}
          onPress={() => router.navigate("/reactnav")}
        >
          <Text style={defaultStyles.buttonText}>React Navigation</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default IndexPage;
