import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuItems: [],
    },
    reducers: {
        addItemToList: (state, action) => {

            const newItem = {
                ...action.payload,
                id: Date.now() // this will assign a unique ID based on the current time
            }

            state.menuItems.push(newItem)
        },
        removeItemFromList: (state, action) => {
            state.menuItems = state.menuItems.filter(item => item.id !== action.payload.id);
        },
        updateItemFromList: (state, action) => {
            const index = state.menuItems.findIndex(item => item.id === action.payload.id);
            // findIndex() method return -1 when the element is not found in the array. 

            if (index !== -1) {
                state.items[index] = {...state.items[index], ...action.payload};
            }
        },
        setReviewForItem: (state, action) => {
            const index = state.menuItems.findIndex(item => item.id === action.payload.id);

            if (index != -1) {
                state.menuItems[index].review = action.payload.review;
                state.menuItems[index].rating = action.payload.rating;
            }
        }
    }
});

export const {addItemToList, removeItemFromList, updateItemFromList, setReviewForItem} = menuSlice.actions;

export default menuSlice.reducer;