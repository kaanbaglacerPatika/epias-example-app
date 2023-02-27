import React from "react";
import { Outlet } from 'react-router-dom';
import Layout from "../components/Layout/Layout.jsx";

function RootLayout() {
   // const navigation = useNavigation();

   return (
      <>
         <Layout>
            {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
            <Outlet />
         </Layout>
      </>
   );
}

export default RootLayout;
