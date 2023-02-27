import styled from "styled-components";
import React, {useRef} from "react";
import PropTypes from "prop-types";

const InsertForm = styled.input`
  width: 125px;
  margin: 5px;
`;

export const InsertTableButton = styled.button`
  margin: 5px;
  padding: 2px;
`;

const InsertTableForm = (props) => {

   const idInputRef = useRef();
   const contractInputRef = useRef();
   const bidInputRef = useRef();
   const dataInputRef = useRef();

   InsertTableForm.propTypes = {
      handleOnSaveClick: PropTypes.func.isRequired,
      handleOnCloseClick: PropTypes.func.isRequired
   }

   const handleOnSaveClick = () => {
      props.handleOnSaveClick({
         id: idInputRef.current?.value,
         contract: contractInputRef.current?.value,
         bid: bidInputRef.current?.value,
         data: dataInputRef.current?.value,
      });
   };

   return <div>
      <InsertForm ref={idInputRef} type="text" placeholder="no giriniz."/>
      <InsertForm ref={contractInputRef} type="text" placeholder="kontrat giriniz."/>
      <InsertForm ref={bidInputRef} type="text" placeholder="teklif giriniz."/>
      <InsertForm ref={dataInputRef} type="text" placeholder="data giriniz."/>
      <Button onClick={handleOnSaveClick}>Kaydet</Button>
      <Button onClick={props.handleOnCloseClick}>Kapat</Button>
   </div>
}

export default InsertTableForm;

