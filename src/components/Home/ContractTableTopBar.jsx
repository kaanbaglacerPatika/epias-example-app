import React from "react";
import styles from "./ContractTableTopBar.module.scss";

const ContractTableTopBar = (props) => {
   return <div className={styles.topBar}>
      {props.children}
   </div>;
}

export default ContractTableTopBar;
