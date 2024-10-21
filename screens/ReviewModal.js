import React from 'react';
import { Modal, View, Image, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setReviewForItem } from '../menu/menuSlice';

export default function ReviewModal({ modalVisible, closeModal, inputValue, setInputValue, itemId }) {
    const dispatch = useDispatch();

    const handleSubmitReview = () => {
        dispatch(setReviewForItem({id: itemId, review: inputValue,            
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

