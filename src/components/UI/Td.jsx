import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTd = styled.td`
  height: 25px;
`;

const Td = (props) => {

   Td.propTypes = {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
   }

   return <StyledTd key={props.id}>
      {props.label}
   </StyledTd>
}

export default Td;
