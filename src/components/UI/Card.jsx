import React from "react";
import styles from "./Card.module.scss";
import PropTypes from "prop-types";

const Card = (props) => {
   Card.propTypes = {
      width: PropTypes.string,
      height: PropTypes.string,
      background: PropTypes.string
   };

   return <div style={{
      width: props?.width ?? '230px',
      height: props?.height ?? '250px',
      background: props.background ?? '#e5e582'
   }} className={styles.card}>
      {props.children}
   </div>
}

export default Card;
