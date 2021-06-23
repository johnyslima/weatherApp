import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import Loading from './src/components/Loading'
import Weather from './src/components/Weather'
import axios from 'axios'

const API_KEY = '7c802b143c69ff7a1d8892ba59bafdb2'

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true)
  const [temp, setTemp] = React.useState(0)
  const [condition, setCondition]  = React.useState<string | null>(null)

  const getWeather = async (latitude: number, longitude: number) => {
    const { data: {
      main: { temp }, weather} } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    setTemp(temp)
    setCondition(weather[0].main)
  }

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync()
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync() 
      getWeather(latitude, longitude)
      setIsLoading(false)
      // TODO: сделать запрос к API
    } catch (error) {
      Alert.alert('Не могу определить местоположение', 'Возможно необходимо разрешение')
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
  );
}

