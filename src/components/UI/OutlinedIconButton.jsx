import React from "react";
import {IconContext} from "react-icons";
import PropTypes from "prop-types";
import styles from "./OutlinedIconButton.module.scss"

const OutlinedIconButton = (props) => {

   OutlinedIconButton.propTypes = {
      iconColor: PropTypes.string,
      iconSize: PropTypes.string,
      buttonBackground: PropTypes.string,
      onClick: PropTypes.func
   }

   return <button
      className={styles.transparentBorderlessButton}
      style={{background: props?.buttonBackground ?? ''}}
      onClick={props.onClick}>
      <IconContext.Provider value={{color: props.iconColor, size: props.iconSize}}>
         {props.children}
      </IconContext.Provider>
   </button>
};

export default OutlinedIconButton
