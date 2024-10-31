import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('There was an error while trying to store data', e);
    }
};

const retrieveData = async (key, value) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (e) {
        console.error('There was an error while trying to retreive data', e);
    }
}

const saveList = async (menuItem) => {
    const savedItem = await retrieveData('list') || [];
    savedItem.push(menuItem);
    await storeData('list', savedItem);
}

const getList = async () => {
    return await retrieveData('list');
}

const clearData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error('Error clearing data', e);
    }
}

export {saveList, getList, clearData};