import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

import Routes from "./components/Routes/Routes";
import { firebaseConfig } from "./config/Firebase";

export default function App() {
  if (!firebase.app) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  firebase.analytics;
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
