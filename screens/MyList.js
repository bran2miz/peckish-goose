import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromList } from '../menu/menuSlice';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MyListScreen({ restaurants }) {
    const menuItems = useSelector(state => state.menu.menuItems);
    const dispatch = useDispatch();

    const handleRemoveItemFromList = (id) => {
        dispatch(removeItemFromList({ id }));
    };
    console.log(restaurants);
    return (
        <View style={styles.container}>
            {menuItems.length === 0 ? (
                <Text>Your Cart is Empty</Text>
            ) : (
                menuItems.map((item, idx) => {
                    const restaurant = restaurants.find(restaurant => 
                        restaurant.Menus &&
                        restaurant.Menus.length > 0 &&
                        restaurant.Menus[0].menuItems.some(menuItem => menuItem.itemName === item.itemName)
                    );
                    console.log(restaurant);

                    return (
                        <View key={idx} style={styles.card}>
                            <Text>{item.itemName} from {restaurant ? restaurant.name : "Unknown Restaurant"}</Text>
                            <Text style={styles.itemDescription}>{item.itemDescription}</Text>
                            <Button title="Remove" onPress={() => handleRemoveItemFromList(item.id)} />
                        </View>
                    );
                }

                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // For Android shadow
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
    },
});
