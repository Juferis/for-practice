import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherBackground = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#74ebd5", "#ACB6E5"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["##000046", "##1CB5E0"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#C9D6FF", "#E2E2E2"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Atmosphere,
  Mist,
  Smoke,
  Fog,
  Ash,
  Squall: {
    iconName: "weather-fog",
    gradient: ["#373B44", "#4286f4"],
  },
  Dust,
  Sand: {
    iconName: "weather-windy",
    gradient: ["#D1913C", "#FFD194"],
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#e1eec3", "#f05053"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherBackground[condition].gradient}
      style={styles.container}
    >
      <StatusBar barstyle="ligth-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={150}
          name={weatherBackground[condition].iconName}
          color="white"
        />
        <Text style={styles.tempText}>{temp}°C</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
    "Smoke",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempText: {
    fontSize: 40,
    color: "white",
  },
});
