import React from 'react';
import { Button, View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/images/FullLogo_Transparent.png')} style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>Welcome to The Peckish Goose!</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Explore delicious cuisines based on your mood!</Text>

      {/* Other content, like buttons or additional images */}
      <View style={styles.contentContainer}>
      <Button title="Enter" onPress={() => navigation.navigate('Tabs')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150, // Adjust to fit the screen properly
    height: 150, // Adjust to fit the screen properly
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  content: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
});
