import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTh = styled.th`
  background: #949494;
  height: 25px;
  text-align: start;
`;
const Th = (props) => {

   Th.propTypes = {
      id: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired
   }

   return <StyledTh key={props.id}>
      {props.label}
   </StyledTh>
}

export default Th;
