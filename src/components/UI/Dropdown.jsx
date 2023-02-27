import React from "react";
import PropTypes from "prop-types";

const Dropdown = (props) => {
   Dropdown.propTypes = {
      selectedOption: PropTypes.any,
      options: PropTypes.arrayOf(
         PropTypes.shape({
            value: PropTypes.any,
            label: PropTypes.any
         })).isRequired,
      emptyOption: PropTypes.shape({
         value: PropTypes.any,
         label: PropTypes.any
      }),
      onChange: PropTypes.func
   }

   return (
      <select value={props.selectedOption} onChange={props.onChange}>
         {props.emptyOption != null &&
            <option key={props.emptyOption.value} value={props.emptyOption.value}>{props.emptyOption.label}</option>}
         {
            props.options.map(option => {
               return <option key={option.value} value={option.value}>{option.label}</option>;
            })
         }
      </select>
   );
}

export default Dropdown;
