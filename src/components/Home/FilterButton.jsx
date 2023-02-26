import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {FaFilter} from "react-icons/all.js";

const Button = styled.button`
     /* Adapt the colors based on primary prop */
     background: ${props => props.primary ? "dodgerblue" : "white"};
     color: ${props => props.primary ? "white" : "dodgerblue"};
     font-size: 1em;
     margin: 0.1em;
     padding: 0.25em 0.5em;
     border: 2px solid dodgerblue;
     border-radius: 3px;

     &:hover {
       background: ${props => props.primary ? "darkblue" : "white"};
       color: ${props => props.primary ? "white" : "darkblue"};
       border: 2px solid darkblue;
     }
   `;

const FilterButton = (props) => {

   FilterButton.propTypes = {
      id: PropTypes.string,
      onClick: PropTypes.func,
      style: PropTypes.any
   };

   return <Button primary id={props.id} onClick={props.onClick} style={props.style}>
      <FaFilter/>
   </Button>;
}

export default FilterButton;
