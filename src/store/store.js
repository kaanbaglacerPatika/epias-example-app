import { configureStore } from '@reduxjs/toolkit';

import factorySlice from "./factory-slice.js";
import uiSlice from "./ui-slice.js";

const store = configureStore({
   reducer: { factory: factorySlice.reducer , ui: uiSlice.reducer},
});

export default store;
