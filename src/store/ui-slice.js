import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
   name: 'ui',
   initialState: {
      splitPercentages: {
         homeTopHorizontal: [70,30],
         homeBottomHorizontal: [70,30],
         homeVertical: [65, 35]
      },
   },
   reducers: {
      setHomeTopHorizontalSplit(state, action) {
         state.splitPercentages.homeTopHorizontal = action.payload;
      },
      setHomeBottomHorizontalSplit(state, action) {
         state.splitPercentages.homeBottomHorizontal = action.payload;
      },
      setHomeVerticalSplit(state, action) {
         state.splitPercentages.homeVertical = action.payload;
      },
   },
});

export const uiActions = uiSlice.actions

export default uiSlice;
