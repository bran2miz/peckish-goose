import React, {useState} from 'react';
import { Modal, View, Image, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import { setReviewForItem } from '../menu/menuSlice';

export default function ReviewModal({ modalVisible, closeModal, inputValue, setInputValue, itemId }) {
    const dispatch = useDispatch();
    const [selectedRating, setSelectedRating] = useState(0);

    const handleSubmitReview = () => {
        dispatch(setReviewForItem({
            id: itemId, review: inputValue, rating: selectedRating
        }));
        closeModal();
    };

    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={closeModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your comment"
                        value={inputValue}
                        onChangeText={setInputValue}
                    />
                    <Picker
                        selectedValue={selectedRating}
                        onValueChange={(itemValue) => setSelectedRating(itemValue)}
                    >
                        <Picker.Item label="Select rating" value={0} />
                        <Picker.Item label="⭐" value={1} />
                        <Picker.Item label="⭐⭐" value={2} />
                        <Picker.Item label="⭐⭐⭐" value={3} />
                        <Picker.Item label="⭐⭐⭐⭐" value={4} />
                        <Picker.Item label="⭐⭐⭐⭐⭐" value={5} />
                    </Picker>
                    <Button title="Submit" onPress={handleSubmitReview} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
});

