import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromList } from '../menu/menuSlice';
import { View, Image, Text, Button, StyleSheet, ScrollView } from 'react-native';
import ReviewModal from './ReviewModal';

export default function MyListScreen({ restaurants }) {
    const menuItems = useSelector(state => state.menu.menuItems);
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible]= useState(false);
    const [inputValue, setInputValue] = useState('');
    const [currentItemId, setCurrentItemId] = useState(null);

    const handleRemoveItemFromList = (id) => {
        dispatch(removeItemFromList({ id }));
    };

    const openModal = (id) => {
        console.log("item id in open modal", id);
        setCurrentItemId(id);
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    console.log(restaurants);
    return (
        <ScrollView >
        <View style={styles.container}>
            {menuItems.length === 0 ? (
                <Text>No Items in your List!</Text>
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
                          <Text>
                            <Text style={styles.restaurantName}>{restaurant ? restaurant.name : "Unknown Restaurant"}</Text>
                            <Text> - {item.itemName}</Text>
                          </Text>
                          <Text style={styles.itemDescription}>{item.itemDescription}</Text>
                          {item.review && <Text style={styles.review}>Your Review: {item.review}</Text>}
                          {item.rating && <Text style={styles.rating}>Your Rating: {item.rating}</Text>}
                          <Image source={require('../assets/images/FullLogo_Transparent.png')} style={styles.logo} />
                          <Button title="Remove" onPress={() => handleRemoveItemFromList(item.id)} />
                        <Button title="Add a Review" onPress={()=> openModal(item.id)} />
                        </View>
                        
                      );
                      
                }

                ))
            }
            <ReviewModal modalVisible={modalVisible} closeModal= {closeModal} setInputValue={setInputValue} inputValue={inputValue} itemId={currentItemId}  />
        </View>
        </ScrollView>
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
    restaurantName: {
        fontWeight: 'bold',
        fontSize: 18,
      },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 10
    },
    logo: {
        width: 150, 
        height: 150, 
        marginBottom: 20,
        resizeMode: 'contain',
        alignSelf: 'center',  // Center the image horizontally
      },
});
