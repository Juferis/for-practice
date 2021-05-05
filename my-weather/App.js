import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "98ff49bf8e924408732ebe67b1a1c04d";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (lat, lon) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.getForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("위치정보를 가져올 수 없습니다.", "위치정보를 허용해주세요");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
