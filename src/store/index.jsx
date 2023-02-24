import { configureStore } from '@reduxjs/toolkit';

import factorySlice from "./factory-slice.js";

const store = configureStore({
   reducer: { factory: factorySlice.reducer },
});

export default store;
