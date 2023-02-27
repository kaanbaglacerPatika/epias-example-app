import './App.scss';
import React, {useEffect} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/Home.jsx";
import {useDispatch} from "react-redux";
import {fetchAndSetBottomFactoryData, fetchAndSetTopFactoryData} from "./store/factory-slice.js";
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

   useEffect(() => {
      dispatch(fetchAndSetTopFactoryData());
      dispatch(fetchAndSetBottomFactoryData());
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
