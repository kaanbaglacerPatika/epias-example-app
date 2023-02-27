import styles from "./InsertTableForm.module.scss";
import React, {useRef} from "react";
import PropTypes from "prop-types";

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
      <input ref={idInputRef} className={styles.insertInput} type="text" placeholder="no giriniz."/>
      <input ref={contractInputRef} className={styles.insertInput} type="text" placeholder="kontrat giriniz."/>
      <input ref={bidInputRef} className={styles.insertInput} type="text" placeholder="teklif giriniz."/>
      <input ref={dataInputRef} className={styles.insertInput} type="text" placeholder="data giriniz."/>
      <button className={styles.formButton} onClick={handleOnSaveClick}>Kaydet</button>
      <button className={styles.formButton} onClick={props.handleOnCloseClick}>Kapat</button>
   </div>
}

export default InsertTableForm;

