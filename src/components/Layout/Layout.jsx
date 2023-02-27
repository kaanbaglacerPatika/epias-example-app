import React from "react";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import styles from "./Layout.module.scss";
const Layout = (props) => {
   return <>
      <Navigation/>
      <main className={styles.main}>{props.children}</main>
      <Footer/>
   </>
};

export default Layout;
