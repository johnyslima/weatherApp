import React from "react"
import propTypes from "prop-types"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from "expo-linear-gradient"
// import iconsT from '@expo/vector-icons/build/vendor/react-native-vector-icons/MaterialCommunityIcons'

type WeatherObjectType = {
  // iconName: keyof typeof iconsT,
  iconName: 'weather-lightning' | 'weather-rainy' 
  | 'weather-pouring' 
  | 'snowflake' 
  | 'weather-windy-variant' 
  | 'weather-windy' 
  | 'weather-hazy' 
  | 'weather-fog' 
  | 'weather-sunny'
  | 'weather-cloudy',
  gradient: [string, string]
}

type WeatherName = "Thunderstorm" | "Drizzle" | "Rain" | "Snow" | "Drizzle" | "Dust" | "Smoke" | "Haze" | "Mist" | "Clear" | "Clouds" ;

const WEATHER_OPTIONS: Record<WeatherName, WeatherObjectType> = {
  Thunderstorm: {
      iconName: 'weather-lightning',
      gradient: ['#141E30', '#243B55']
  },
  Drizzle: {
      iconName: 'weather-rainy',
      gradient: ['#3a7bd5', '#3a6073']
  },
  Rain: {
      iconName: 'weather-pouring',
      gradient: ['#000046','#1CB5E0']
  },
  Snow: {
      iconName: 'snowflake',
      gradient: ['#83a4d4', '#b6fbff']
  },
  Dust: {
      iconName: 'weather-windy-variant',
      gradient: ['#B79891', '#94716B']
  },
  Smoke: {
      iconName: 'weather-windy',
      gradient: ['#56CCF2', '#2F80ED']
  },
  Haze: {
      iconName: 'weather-hazy',
      gradient: ['#3E5151', '#DECBA4']
  },
  Mist: {
      iconName: 'weather-fog',
      gradient: ['#606c88', '#3f4c6b']
  },
  Clear: {
      iconName: 'weather-sunny',
      gradient: ['#56CCF2', '#2F80ED']
  },
  Clouds: {
      iconName: 'weather-cloudy',
      gradient: ['#757F9A', '#D7DDE8']
  }
}

interface IWeatherProps {
  temp: number;
  condition: keyof typeof WEATHER_OPTIONS | null;
}

export default function Weather({ temp, condition }: IWeatherProps) {
  console.log(condition)
  const nameIcon = condition ? WEATHER_OPTIONS[condition].iconName : 'weather-cloudy'
  return (
    <LinearGradient
      colors={condition ? WEATHER_OPTIONS[condition].gradient : ['#757F9A', '#D7DDE8']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={nameIcon} size={90} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text>{condition}</Text>
      </View>
    </LinearGradient>
  );
}

// Weather.propTypes = {
//   temp: propTypes.number.isRequired,
//   condition: propTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds'])
// }

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
  temp: {
    fontSize: 42,
    color: "white",
  },
});
