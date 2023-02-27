import React from "react";
import {Outlet} from 'react-router-dom';
import Layout from "../components/Layout/Layout.jsx";

function RootLayout() {
   return <Layout>
      <Outlet/>
   </Layout>;
}

export default RootLayout;
