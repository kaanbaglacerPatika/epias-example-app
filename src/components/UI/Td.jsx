import React from "react";
import PropTypes from "prop-types";
import styles from "./Td.module.scss";


const Td = (props) => {

   Td.propTypes = {
      id: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired
   }

   return <td className={styles.td} key={props.id}>
      {props.label}
   </td>
}

export default Td;
