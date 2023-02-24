import { createSlice } from '@reduxjs/toolkit';

const factorySlice = createSlice({
   name: 'factory',
   initialState: {
      factoryItems: [],
   },
   reducers: {
      replaceFactoryItems(state, action) {
         state.factoryItems = action.payload.factoryItems;
      },
   },
});

export const factoryActions = factorySlice.actions;

export default factorySlice;
