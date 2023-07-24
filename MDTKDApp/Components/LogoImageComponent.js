import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  Alert,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

const LogoImageComponent = () => {
  return (
    <View style={styles.topContainer}>
      <Image
        style={styles.imageLogo}
        source={require("../assets/logo_190x.png")}
      />
      <Text style={styles.welcomeMessage}>Welcome, David!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeMessage: {
    color: "#fff",
    fontSize: 24,
  },
});

export default LogoImageComponent;
