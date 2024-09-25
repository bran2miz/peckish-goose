import React, { useState } from 'react';
import RestaurantModal from './RestaurantModal';
import { View, Text, Modal, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function RestaurantItem({ restaurant }) {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    }

    const closeModal = () => {
        setModalShow(false);
    }

    return (
        <View style={styles.itemContainer}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.description}>{restaurant.description}</Text>
            <TouchableOpacity onPress={handleClick}>
                {restaurant.imageUrl && (
                    <Image
                        style={styles.image}
                        source={{ uri: restaurant.imageUrl }}
                    />
                )}
            </TouchableOpacity>
            <RestaurantModal
                visible={modalShow}
                onClose={closeModal}
                restaurant={restaurant}
            />
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
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
