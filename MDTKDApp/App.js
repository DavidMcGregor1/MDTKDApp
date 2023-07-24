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
import LogoImageComponent from "./Components/LogoImageComponent";
import NavBarComponent from "./Components/NavBarComponent";
import NotificationsComponent from "./Components/NotificationsComponent";

const notificationTitles = [
  { notificationTitle: "Upcoming Event", date: "01/01/01" },
  { notificationTitle: "Upcoming Event", date: "01/01/01" },
  { notificationTitle: "Upcoming Event", date: "01/01/01" },
  { notificationTitle: "Upcoming Event", date: "01/01/01" },
  { notificationTitle: "Upcoming Event", date: "01/01/01" },
];

export default function App() {
  const name = "David";
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const handleBoxPress = (title) => {
    if (title === "Show all") {
      setShowHomeScreen(true);
    } else {
      Alert.alert(`Pressed the box with the ${title} notification`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ----- LOGO COMPONENT ----- */}

      <LogoImageComponent />

      {/* ----- NOTIFICATIONS COMPONENT ----- */}

      <NotificationsComponent />

      {/* ----- NAVBAR COMPONENT ----- */}

      <NavBarComponent />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292529",
  },
  imageLogo: {
    width: 240,
    height: 240,
  },

  // content: {
  //   flex: 1,
  //   alignItems: "center",
  //   paddingTop: 40,
  // },
  // box: {
  //   width: "80%",
  //   padding: 10,
  //   marginBottom: 80,
  //   backgroundColor: "#fff",
  // },
  // boxTitle: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   marginBottom: 10,
  //   color: "#292529",
  // },
  // showAll: {
  //   fontSize: 12,
  //   top: -30,
  //   textAlign: "right",
  // },
  // inner: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginVertical: 10,
  //   backgroundColor: "#D9D9D9",
  //   paddingHorizontal: 20,
  //   minHeight: 40,
  // },
  // notificationTitleContainer: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // notificationTitle: {
  //   fontSize: 16,
  //   textAlign: "center",
  //   color: "#292529",
  // },
  // date: {
  //   fontSize: 14,
  //   marginRight: 10,
  //   color: "#292529",
  // },
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
