import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ForecastWeather({ forecast }) {
  return (
    <View style={styles.container}>
      {forecast.map((weather, index) => (
        <View key={index} style={styles.forecastItem}>
          <Text style={styles.forecastDate}>{new Date(weather.dt * 1000).toLocaleString()}</Text>
          <Text style={styles.forecastTemp}>{weather.main.temp}°C</Text>
          <Text style={styles.forecastDescription}>{weather.weather[0].description}</Text>
          <Image
            style={styles.weatherIcon}
            source={{ uri: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png` }}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  forecastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#e6f7ff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  forecastDate: {
    fontSize: 16,
    color: '#333',
  },
  forecastTemp: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
  },
  forecastDescription: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});
