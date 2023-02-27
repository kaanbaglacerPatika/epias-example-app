import React, {useState} from "react";
import Table from "../UI/Table.jsx";
import Panel from "../UI/Panel.jsx";
import {useDispatch, useSelector} from "react-redux";
import {factoryActions} from "../../store/factory-slice.js";
import InsertTableForm, {InsertTableButton} from "./InsertTableForm.jsx";

const HomeBottomLeftPanel = () => {
   const dispatch = useDispatch();
   const factoryItems = useSelector(state => state.factory.bottomFactoryItems ?? []);
   const fieldList = ['contract', 'bid', 'data'];
   const [insertFormVisible, setInsertFormVisible] = useState(false);

   const showInsertForm = () => setInsertFormVisible(true);
   const hideInsertForm = () => setInsertFormVisible(false);

   const handleOnSaveClick = (obj) => {
      dispatch(factoryActions.assignBottomFactoryItems({bottomFactoryItems: [...factoryItems, obj]}));
   };


   return (<Panel>
      <Table dataList={factoryItems} fieldList={fieldList}/>
      {insertFormVisible &&
         <InsertTableForm handleOnSaveClick={handleOnSaveClick} handleOnCloseClick={hideInsertForm}/>
      }
      <InsertTableButton onClick={showInsertForm}>Yeni ekle</InsertTableButton>
   </Panel>);
};

export default HomeBottomLeftPanel;
