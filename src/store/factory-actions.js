import {factoryActions} from "./factory-slice.js";

export const assignFactoryData = (data) => {
   return async (dispatch) => {
      const factoryItemsData = JSON.parse(data)
      dispatch(factoryActions.replaceFactoryItems({factoryItems: factoryItemsData.response}));
   };
};
