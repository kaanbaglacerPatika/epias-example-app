import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const StyledModal = (props) => {
   return <div
      className={styles.modal}
      style={{right: props?.right ? `calc(${props?.right} + 50px)` : '35px'}}>
      {props.children}
   </div>
}

const CloseButton = (props) => {
   return <button
      className={styles.closeButton}
      onClick={props.onClick}>
      {props.children}
   </button>
}

const Modal = (props) => {

   Modal.propTypes = {
      changeModal: PropTypes.func.isRequired,
      right: PropTypes.any
   }
   return ReactDOM.createPortal(
      <StyledModal right={props.right}>
         <CloseButton onClick={props.changeModal}>
            <span>x</span>
         </CloseButton>
         {props.children}
      </StyledModal>,
      document.getElementById('modal-root')
   );
}

export default Modal;
