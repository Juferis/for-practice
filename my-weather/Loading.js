import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>날씨를 불러오는 중...</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 100,
    backgroundColor: "#558CCF",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
    textAlign: "center",
  },
});
