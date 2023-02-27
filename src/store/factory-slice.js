import { createSlice } from '@reduxjs/toolkit';
import topFactoryDataJSON from  '../assets/top-factory-data.json' assert { type: 'JSON' };
import bottomFactoryDataJSON from  '../assets/bottom-factory-data.json' assert { type: 'JSON' };

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

export const fetchAndSetTopFactoryData = () => (dispatch) => {
   // Typically we will fetch data in here. Fetch etc.
   const topFactoryItemsData = JSON.parse(JSON.stringify(topFactoryDataJSON));
   dispatch(factoryActions.assignTopFactoryItems({topFactoryItems: topFactoryItemsData.response}))
}

export const fetchAndSetBottomFactoryData = () => (dispatch) => {
   // Typically we will fetch data in here. Fetch etc.
   const bottomFactoryItemsData = JSON.parse(JSON.stringify(bottomFactoryDataJSON));
   dispatch(factoryActions.assignBottomFactoryItems({bottomFactoryItems: bottomFactoryItemsData.response}))
}


export const factoryActions = factorySlice.actions;

export default factorySlice;
