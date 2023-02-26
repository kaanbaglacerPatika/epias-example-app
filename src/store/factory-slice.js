import { createSlice } from '@reduxjs/toolkit';

const factorySlice = createSlice({
   name: 'factory',
   initialState: {
      topFactoryItems: [],
      bottomFactoryItems: []
   },
   reducers: {
      assignTopFactoryItems(state, action) {
         state.topFactoryItems = action.payload.topFactoryItems;
      },
      assignBottomFactoryItems(state, action) {
         state.bottomFactoryItems = action.payload.bottomFactoryItems;
      },
   },
});

export const factoryActions = factorySlice.actions;

export default factorySlice;
