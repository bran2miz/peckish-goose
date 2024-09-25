import React, { useState, useContext } from 'react';
import axios from 'axios';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { MoodContext } from '../Context/Settings/MoodContext';
import RestaurantForm from './RestaurantForm';
import RestaurantCard from './RestaurantCard';

export default function MainPage() {
    const [restaurants, setRestaurants] = useState([]);
    // const [userInput, setUserInput] = useState('');
    const {mood} = useContext(MoodContext);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        const formattedMood = mood.toLowerCase();
        try {
            const response = await axios.get('http://localhost:3002/api/v1/restaurants', { params: { mood: formattedMood } });
            console.log("response", response);
            setRestaurants(response.data);
            setError('');
        } catch (error) {
            setError('Could not find any restaurants for that mood');
            console.error('Error fetching restaurants:', error);
        }
    };
    

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <RestaurantForm  
            handleSearch={handleSearch}
            />
        </View>
        <View style={styles.restaurantList}>
                    {restaurants.map((restaurant,idx) => (
                        <RestaurantCard key={idx} restaurant={restaurant} />
                    ))}
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      backgroundColor: '#f8f8f8',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 20,
      paddingTop: 50,
      backgroundColor: '#fff',
      borderRadius: 10,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    pickerContainer: {
      flex: 1,
      width: '100%',
      marginBottom: 20,
    },
    pickerLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    middleContainer: {
      alignItems: 'center',
    },
    instructions: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
      color: '#333',
    },
  });
