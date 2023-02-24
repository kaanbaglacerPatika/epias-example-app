import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTh = styled.th`
  background: #949494;
  height: 25px;
`;
const Th = (props) => {

   Th.propTypes = {
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
   }

   return <StyledTh key={props.id}>
      {props.label}
   </StyledTh>
}

export default Th;
