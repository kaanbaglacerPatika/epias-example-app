import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled.div`
  width: ${props => (props?.width ?? '230px')};
  height: ${props => (props?.height ?? '250px')};
  background: ${props => (props.background ?? '#e5e582')};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 20px;
  margin: 5px;
  
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const Card = (props) => {
   Card.propTypes = {
      width: PropTypes.string,
      height: PropTypes.string,
      background: PropTypes.string
   };

   return <StyledCard width={props.width} height={props.height} background={props.background}>
      {props.children}
   </StyledCard>
}

export default Card;
