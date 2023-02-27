import './App.scss';
import React, {useEffect} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/Home.jsx";
import {useDispatch} from "react-redux";
import {factoryActions} from "./store/factory-slice.js";
import {localStorageKeys} from "./utils/constants.js";
import {uiActions} from "./store/ui-slice.js";

const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout/>,
      children: [
         {index: true, element: <HomePage/>}
      ]
   }
]);

function App() {
   const dispatch = useDispatch();
   const dataJSON = JSON.stringify({
         "response": [
            {
               "id": 1,
               "contractYear": 2019,
               "bid": 123154,
               "data": "Alış"
            },
            {
               "id": 2,
               "contractYear": 2019,
               "bid": 7233154,
               "data": "Satış"
            },
            {
               "id": 3,
               "contractYear": 2019,
               "bid": 923154,
               "data": "Satış"
            },
            {
               "id": 4,
               "contractYear": 2018,
               "bid": 3154,
               "data": "Satış"
            },
            {
               "id": 5,
               "contractYear": 2018,
               "bid": 54,
               "data": "Alış"
            }
         ]
      }
   );
   const bottomTableDataJSON = JSON.stringify({
         "response": [
            {
               "id": 1,
               "contract": "ABC12345",
               "bid": 254,
               "data": "Alış"
            },
            {
               "id": 2,
               "contract": "DEF56789",
               "bid": 6448,
               "data": "Satış"
            },
            {
               "id": 3,
               "contract": "GHI45678",
               "bid": 5020,
               "data": "Satış"
            },
         ]
      }
   );
   useEffect(() => {
      const topFactoryItemsData = JSON.parse(dataJSON);
      const bottomFactoryItemsData = JSON.parse(bottomTableDataJSON);
      dispatch(factoryActions.assignTopFactoryItems({topFactoryItems: topFactoryItemsData.response}));
      dispatch(factoryActions.assignBottomFactoryItems({bottomFactoryItems: bottomFactoryItemsData.response}));
      if (!!localStorage.getItem(localStorageKeys.LayoutSplitPercentages)) {
         const uiLayoutPercentages = JSON.parse(localStorage.getItem(localStorageKeys.LayoutSplitPercentages));
         dispatch(uiActions.setLayoutSplit(uiLayoutPercentages));
         dispatch(uiActions.setInitialLayoutSplit(uiLayoutPercentages));
      }

   }, [dispatch]);

   return (<>
      <RouterProvider router={router}/>
      <div id="modal-root"></div>
   </>);
}

export default App;
