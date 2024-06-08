import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CurrentWeather({ weather }) {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{weather.name}</Text>
      <Text style={styles.temperature}>{weather.main.temp}°C</Text>
      <Text style={styles.weatherDescription}>{weather.weather[0].description}</Text>
      <Image
        style={styles.weatherIcon}
        source={{ uri: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png` }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff6347',
  },
  weatherDescription: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
});
