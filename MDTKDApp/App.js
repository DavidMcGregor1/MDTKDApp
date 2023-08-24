import React, { useEffect, useState } from "react";
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
import LogoImageComponent from "./Components/LogoImageComponent";
import NavBarComponent from "./Components/NavBarComponent";
import { FlatList } from "react-native";

const notificationTitles = [
  { notificationTitle: "Upcoming Event", date: "01/01/01" },
  { notificationTitle: "Upcoming Event", date: "01/01/01" },
  { notificationTitle: "Upcoming Event", date: "01/01/01" },
  { notificationTitle: "Upcoming Event", date: "01/01/01" },
  { notificationTitle: "Upcoming Event", date: "01/01/01" },
];

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://mdtkd.net/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
      <View style={styles.notificationsContainer}>
        <Text style={styles.testHeading}>Notifications</Text>
        <FlatList
          data={notificationTitles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => handleBoxPress(item.notificationTitle)}
            >
              <View style={styles.testPost}>
                <Text style={styles.testTitle}>{item.notificationTitle}</Text>
                <Text>Date: {item.date}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>

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
  notificationsContainer: {
    padding: 20,
  },
  // ...rest of your styles
  imageLogo: {
    width: 240,
    height: 240,
  },

  testHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  testPost: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  testTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
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
