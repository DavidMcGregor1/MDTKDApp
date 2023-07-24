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

const NotificationsComponent = () => {
  const notificationTitles = [
    { notificationTitle: "Upcoming Event", date: "01/01/01" },
    { notificationTitle: "Upcoming Event", date: "01/01/01" },
    { notificationTitle: "Upcoming Event", date: "01/01/01" },
    { notificationTitle: "Upcoming Event", date: "01/01/01" },
    { notificationTitle: "Upcoming Event", date: "01/01/01" },
  ];

  return (
    <View style={styles.content}>
      <View style={styles.box}>
        <View>
          <Text style={styles.boxTitle}>Notdifications</Text>
          <TouchableWithoutFeedback onPress={() => handleBoxPress("Show all")}>
            <Text style={styles.showAll}>Show all</Text>
          </TouchableWithoutFeedback>
        </View>
        {notificationTitles.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => handleBoxPress(item.notificationTitle)}
          >
            <View style={styles.inner}>
              <Text style={styles.date}>{item.date}</Text>
              <View style={styles.notificationTitleContainer}>
                <Text style={styles.notificationTitle}>
                  {item.notificationTitle}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  box: {
    width: "80%",
    padding: 10,
    marginBottom: 80,
    backgroundColor: "#fff",
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#292529",
  },
  showAll: {
    fontSize: 12,
    top: -30,
    textAlign: "right",
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 20,
    minHeight: 40,
  },
  notificationTitleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationTitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#292529",
  },
  date: {
    fontSize: 14,
    marginRight: 10,
    color: "#292529",
  },
});

export default NotificationsComponent;
