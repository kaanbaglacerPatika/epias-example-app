import React, {useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledModal = styled.div`
  position: absolute;
  z-index: 100;
  right: ${props => `calc(${props?.right} + 50px)` ?? '35px'};
  top: 40px;
  background-color: white;
  padding: 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5em;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

const Modal = (props) => {

   Modal.propTypes = {
      changeModal: PropTypes.func.isRequired,
      right: PropTypes.any
   }
   console.log(props.right)
   return ReactDOM.createPortal(
      <StyledModal right={props.right}>
         <CloseButton onClick={() => props.changeModal}>
            x
         </CloseButton>
         {props.children}
      </StyledModal>,
      document.getElementById('modal-root')
   );
}

export default Modal;
