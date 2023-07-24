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

const NavBarComponent = () => {
  return (
    <View style={styles.bottomNavBar}>
      <View style={styles.navBarItem}>
        <Text style={styles.navBarText}>Home</Text>
      </View>
      <View style={styles.navBarItem}>
        <Text style={styles.navBarText}>Events</Text>
      </View>
      <View style={styles.navBarItem}>
        <Text style={styles.navBarText}>Terminology</Text>
      </View>
      <View style={styles.navBarItem}>
        <Text style={styles.navBarText}>Training</Text>
      </View>
      <View style={styles.navBarItem}>
        <Text style={styles.navBarText}>Account</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#39B54A",
    paddingVertical: 25,
  },
  navBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navBarText: {
    color: "#000",
    fontSize: 13.5,
  },
});

export default NavBarComponent;
