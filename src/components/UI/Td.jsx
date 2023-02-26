import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTd = styled.td`
  height: 25px;
  border-bottom: 1px gray solid;
`;

const Td = (props) => {

   Td.propTypes = {
      id: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired
   }

   return <StyledTd key={props.id}>
      {props.label}
   </StyledTd>
}

export default Td;
