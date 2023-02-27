import React from "react";
import PropTypes from "prop-types";
import styles from "./Th.module.scss";

const Th = (props) => {

   Th.propTypes = {
      id: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired
   }

   return <th className={styles.th} key={props.id}>
      {props.label}
   </th>
}

export default Th;
