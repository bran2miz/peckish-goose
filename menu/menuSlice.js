import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuItems: [],
    },
    reducers: {
        addItemToList: (state, action) => {
            state.menuItems.push(action.payload)
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
        }
    }
});

export const {addItemToList, removeItemFromList, updateItemFromList} = menuSlice.actions;

export default menuSlice.reducer;