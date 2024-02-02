import {Button, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import { useState } from 'react';


export default function TabOneScreen() {
  const [status,requestPermission] = Location.useForegroundPermissions()
  // const [status,requestPermission] = Location.useBackgroundPermissions()
  if (!status || !status.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>You don't have enabled location permission please enable</Text>
        <Button title='Grant location acces' onPress={requestPermission}/>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
