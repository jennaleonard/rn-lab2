import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import MenuItem from "./components/MenuItem";
import sushi from "./assets/sushi.jpeg";
import burger from "./assets/burger.jpeg";

const items = {
  name: ['sushi', 'burger'],
  price: [200, 15],
  imageSource: [sushi, burger],
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Snap Eating Account</Text>
        <MenuItem name={items.name[0]} price={items.price[0]} imageSource={items.imageSource[0]} />
        <MenuItem name={items.name[1]} price={items.price[1]} imageSource={items.imageSource[1]} />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    padding: "8%",
  }
});
