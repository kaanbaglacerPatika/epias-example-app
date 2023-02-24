import './App.scss';
import React, {useEffect} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/Home.jsx";
import {useDispatch} from "react-redux";
import {assignFactoryData} from "./store/factory-actions.js";

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
   useEffect(() => {
      dispatch(assignFactoryData(dataJSON));
   }, [dispatch]);

   return (<RouterProvider router={router}/>);
}

export default App;
