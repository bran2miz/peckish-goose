import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './menuSlice';

const menu = configureStore({
    reducer: {
        menu: menuReducer
    },
});

export default menu;