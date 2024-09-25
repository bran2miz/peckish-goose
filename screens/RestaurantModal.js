// import React from 'react';
// import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

// export default function RestaurantModal({ visible, onClose, restaurant }) {
//     console.log(restaurant.Menus[0]);

//     return (
//         <Modal
//             animationType="slide"
//             transparent={false}
//             visible={visible}
//             onRequestClose={onClose}
//         >
//             <View style={styles.modalContent}>
//                 <Text>{restaurant.name}</Text>
//                 {restaurant.imageUrl && (
//                     <Image
//                         style={styles.image}
//                         source={{ uri: restaurant.imageUrl }}
//                     />
//                 )}
//                 {restaurant.Menus && restaurant.Menus.length > 0 && restaurant.Menus[0].menuItems &&
//                     restaurant.Menus[0].menuItems.map((menuItem, index) => (
//                         <View key={index} style={styles.menuItem}>
//                             <Text style={styles.itemNumber}>{index + 1}.</Text>
//                             <View style={styles.itemNameContainer}>
//                                 <Text style={styles.itemName}>{menuItem.itemName}</Text>
//                                 <Text style={styles.itemDescription}>{menuItem.itemDescription}</Text>
//                             </View>
//                         </View>
//                     ))
//                 }




//                 <Button title="Close" onPress={onClose} />
//             </View>
//         </Modal>
//     );
// }

// const styles = StyleSheet.create({
//     modalContent: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     image: {
//         width: '100%',
//         height: 150,
//         borderRadius: 5,
//         marginBottom: 20,
//     },
//     menuItem: {
//         flexDirection: 'row',
//         alignItems: 'flex-start',
//         marginBottom: 10,
//         width: '100%',
//     },
//     itemNumber: {
//         fontWeight: 'bold',
//         fontSize: 18,
//         marginRight: 5,
//         width: 25, 
//     },
//     itemNameContainer: {
//         flex: 1, 
//         flexDirection: 'column',
//         flexShrink: 1,
//     },
//     itemName: {
//         fontWeight: 'bold',
//         fontSize: 18,
//     },
//     itemDescription: {
//         fontSize: 14,
//         color: '#666',
//     },
// });

import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

export default function RestaurantModal({ visible, onClose, restaurant }) {
    console.log(restaurant.Menus[0]);

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContent}>
                <Text>{restaurant.name}</Text>
                {restaurant.imageUrl && (
                    <Image
                        style={styles.image}
                        source={{ uri: restaurant.imageUrl }}
                    />
                )}
                {restaurant.Menus && restaurant.Menus.length > 0 && restaurant.Menus[0].menuItems &&
                    restaurant.Menus[0].menuItems.map((menuItem, index) => (
                        <View key={index} style={styles.menuItem}>
                            <Text style={styles.itemNumber}>{index + 1}.</Text>
                            <View style={styles.itemNameContainer}>
                                <Text style={styles.itemName}>{menuItem.itemName}</Text>
                                <Text style={styles.itemDescription}>{menuItem.itemDescription}</Text>
                            </View>
                            <Button title="Add to List" onPress={() => {}} />
                        </View>
                    ))
                }
                <Button title="Close" onPress={onClose} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 5,
        marginBottom: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 10,
        width: '100%',
        justifyContent: 'space-between', 
    },
    itemNumber: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 5,
        width: 25, 
    },
    itemNameContainer: {
        flex: 1, 
        flexDirection: 'column',
        flexShrink: 1,
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
    },
});

