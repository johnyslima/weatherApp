import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import iconsT from '@expo/vector-icons/build/vendor/react-native-vector-icons/MaterialCommunityIcons'

type WeatherObjectType = {
  // iconName: keyof typeof iconsT,
  iconName:
    | "weather-lightning"
    | "weather-rainy"
    | "weather-pouring"
    | "snowflake"
    | "weather-windy-variant"
    | "weather-windy"
    | "weather-hazy"
    | "weather-fog"
    | "weather-sunny"
    | "weather-cloudy";
  gradient: [string, string];
  title: string;
  subtitle: string;
};

type WeatherName =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Drizzle"
  | "Dust"
  | "Smoke"
  | "Haze"
  | "Mist"
  | "Clear"
  | "Clouds";

const WEATHER_OPTIONS: Record<WeatherName, WeatherObjectType> = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Сиди дома",
    subtitle: "Ты видишь что на улице?",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Возьми зонтик",
    subtitle: "Возможно скоро дождь усилится ",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1CB5E0"],
    title: "На улице дождь",
    subtitle: "А значит скоро будет радуга!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "На улице снежок!",
    subtitle: "Одевайтесь потеплее, лепите снеговиков",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#B79891", "#94716B"],
    title: "Пыльно",
    subtitle: "Лучше закройте окна",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "На улице смог :(",
    subtitle: "Не советую выходить без необходимости",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
    title: "На улице снежок!",
    subtitle: "Одевайтесь потеплее, лепите снеговиков",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Ни черта не видно в тумане",
    subtitle: "Зато как в Сайлент-Хилле :)",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Погода супер :)",
    subtitle: "Иди гулять, хватит сидеть дома!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "Облака",
    subtitle: "Белогривые лошадки",
  },
};

interface IWeatherProps {
  temp: number;
  condition: keyof typeof WEATHER_OPTIONS | null;
}

export default function Weather({ temp, condition }: IWeatherProps) {
  console.log(condition);
  const nameIcon = condition
    ? WEATHER_OPTIONS[condition].iconName
    : "weather-cloudy";
  return (
    <LinearGradient
      colors={
        condition ? WEATHER_OPTIONS[condition].gradient : ["#757F9A", "#D7DDE8"]
      }
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={nameIcon} size={90} color="white" />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        {/* <View> */}
        <Text style={styles.title}>{condition && WEATHER_OPTIONS[condition].title}</Text>
        <Text style={styles.subtitle}>
          {condition && WEATHER_OPTIONS[condition].subtitle}
        </Text>
        {/* </View> */}
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
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
