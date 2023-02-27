import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterButton.module.scss";
import {FaFilter} from "react-icons/all.js";

const FilterButton = (props) => {

   FilterButton.propTypes = {
      id: PropTypes.string,
      onClick: PropTypes.func,
      style: PropTypes.any
   };

   return <button className={styles.filterButton} id={props.id} onClick={props.onClick} style={props.style}>
      <FaFilter/>
   </button>;
}

export default FilterButton;
