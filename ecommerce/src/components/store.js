// store.js (Redux store setup)
import { configureStore } from '@reduxjs/toolkit';

import viewDataReducer from '../components/slice';
const store = configureStore({
    reducer: {
        viewData: viewDataReducer  // Here, 'viewData' is the slice name, and viewDataReducer is the reducer from the slice
    }
});

export default store;
