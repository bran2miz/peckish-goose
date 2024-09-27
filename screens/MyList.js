import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromList } from '../menu/menuSlice';
import { View, Text, Button } from 'react-native';

export default function MyListScreen() {
    const menuItems = useSelector(state => state.menu.menuItems);
    const dispatch = useDispatch();

    const handleRemoveItemFromList = (id) => {
        dispatch(removeItemFromList({ id }));
    };

    return (
        <View>
            {menuItems.length === 0 ? (
                <Text>Your Cart is Empty</Text>
            ) : (
                menuItems.map((item, idx) => (
                    <View key={idx}>
                        <Text>{item.menuName}</Text>
                        <Button title="Remove" onPress={() => handleRemoveItemFromList(item.id)} />
                    </View>
                )
                )
            )
            }
        </View>
    )
}