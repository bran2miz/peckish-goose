import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function RestaurantItem({ restaurant }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.description}>{restaurant.description}</Text>
      {restaurant.imageUrl && (
        <Image
          style={styles.image}
          source={{ uri: restaurant.imageUrl }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
});
