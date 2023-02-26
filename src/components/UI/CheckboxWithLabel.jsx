import React from "react";
import PropTypes from "prop-types";

const CheckboxWithLabel = (props) => {

   CheckboxWithLabel.propTypes = {
      label: PropTypes.any,
      checked: PropTypes.any,
      value: PropTypes.any,
      onChange: PropTypes.func
   }

   return <>
      <input
         type={'checkbox'}
         value={props.value}
         checked={props.checked}
         onChange={props.onChange}
      style={{marginRight: '5px'}}/>
      <label>{props.label}</label>
   </>;
}

export default CheckboxWithLabel;
