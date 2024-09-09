import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { MoodContext } from '../Context/Settings/MoodContext';

export default function MainPage({ handleSearch }) {

    const { mood, setMood } = useContext(MoodContext);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Please enter your current mood"
                value={mood}
                onChangeText={(text) => setMood(text)}
            />
            <Button title="Search" onPress={handleSearch} />

            {/* {error ? <Text style={styles.error}>{error}</Text> : null} */}


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        width: '80%',
    },
    error: {
        color: 'red',
    },
});
