import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherBackground = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "천둥번개가 치고 있어요!",
    subtitle: "이런 날 우산 쓰면 번개 맞는 거 아시죠?",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "부슬부슬 이슬비",
    subtitle: "알게 모르게 젖을 테니 우산 챙겨봐요",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["##000046", "##1CB5E0"],
    title: "비가 옵니다.",
    subtitle: "우산 가지고 돌아오는 거 잊지 말아요!!",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#C9D6FF", "#E2E2E2"],
    title: "하늘에서 눈이",
    subtitle: "제설 작전하러 갑시다.",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
    title: "햍볕이 쨍쨍",
    subtitle: "놀러 가기 좋은 날씨입니다. 썬크림은 잊지 마세요!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "날씨가 흐리네요",
    subtitle: "밖에서 일하기 좋은 날씨입니다.",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#373B44", "#4286f4"],
    title: "안개가 꼈네요",
    subtitle: "앞에 잘 보고 다치지 마세요",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#373B44", "#4286f4"],
    title: "안개가 꼈네요",
    subtitle: "앞에 잘 보고 다치지 마세요",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#373B44", "#4286f4"],
    title: "안개가 꼈네요",
    subtitle: "앞에 잘 보고 다치지 마세요",
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#373B44", "#4286f4"],
    title: "안개가 꼈네요",
    subtitle: "앞에 잘 보고 다치지 마세요",
  },
  Squall: {
    iconName: "weather-fog",
    gradient: ["#373B44", "#4286f4"],
    title: "유명한 스콜 날씨",
    subtitle: "날벼락 주의!",
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#373B44", "#4286f4"],
    title: "안개가 꼈네요",
    subtitle: "앞에 잘 보고 다치지 마세요",
  },
  Dust: {
    iconName: "weather-windy",
    gradient: ["#D1913C", "#FFD194"],
    title: "콜록! 으..먼지!",
    subtitle: "오늘은 마스크 챙기고 실내활동 추천해 드려요",
  },
  Sand: {
    iconName: "weather-windy",
    gradient: ["#D1913C", "#FFD194"],
    title: "으..황사!",
    subtitle: "오늘은 마스크 챙기고 실내활동 추천해 드려요",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
    title: "토네이도 주의",
    subtitle: "만화랑 현실은 다르니 안전한 곳으로 대피하세요!",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#e1eec3", "#f05053"],
    title: "안개가 꼈네요",
    subtitle: "앞에 잘 보고 다치지 마세요",
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
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherBackground[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherBackground[condition].subtitle}
        </Text>
      </View>
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
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 25,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
