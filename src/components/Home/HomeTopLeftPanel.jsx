import FilterButton from "./FilterButton.jsx";
import Table from "../UI/Table.jsx";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Dropdown from "../UI/Dropdown.jsx";
import ContractTableTopBar from "./ContractTableTopBar.jsx";
import Panel from "../UI/Panel.jsx";
import Modal from "../UI/Modal.jsx";

const HomeTopLeftPanel = () => {
   const factoryItems = useSelector(state => state.factory.factoryItems ?? []);
   const [contractYearFilterValue, setContractYearFilterValue] = useState("");
   const uniqueContractYears = [...new Set(factoryItems.map(factoryItem => factoryItem?.contractYear))];
   const [modalIsOpen, setModalIsOpen] = useState(false);

   const splitPercentages = useSelector((state) => state.ui.splitPercentages);

   let [topLeftPerc, topRightPerc] = splitPercentages.homeTopHorizontal;

   useEffect(()=>{
      console.log(splitPercentages);
      [topLeftPerc, topRightPerc] = splitPercentages.homeTopHorizontal;
   },[splitPercentages.homeTopHorizontal])

   function changeModal() {
      setModalIsOpen(prevState => !prevState);
   }

   const headerList = [
      {id: 'id', label: 'Id', field: 'id'},
      {id: 'contractYear', label: 'Kontrat', field: 'contractYear'},
      {id: 'bid', label: 'Teklif', field: 'bid'},
      {id: 'data', label: 'Data', field: 'data'},
   ];
   const factoryItem = factoryItems?.length > 0 ? Object.assign(factoryItems[0]) : {};
   const fieldList = Object.keys(factoryItem);

   const optionList = [
      {
         value: false,
         label: 'id',
         field: 'id'
      },
      {
         value: false,
         label: 'kontrat',
         field: 'contractYear'
      },
      {
         value: false,
         label: 'teklif',
         field: 'bid'
      },
      {
         value: false,
         label: 'data',
         field: 'data'
      }
   ];
   const onContractYearFilterChange = (event) => {
      setContractYearFilterValue(event.target.value);
   };

   return (
      <Panel>
         <ContractTableTopBar>
            <Dropdown
               options={uniqueContractYears.map(year => ({value: year, label: year}))}
               selectedOption={contractYearFilterValue}
               onChange={onContractYearFilterChange}
               emptyOption={{value: '', label: 'Kontrat Seçiniz'}}/>
            <FilterButton id={'test'} onClick={changeModal}/>
            {modalIsOpen && <Modal changeModal={changeModal} right={`${topRightPerc}%`}>
               <input id={'yy'} type={"checkbox"}/>
               <label for={'yy'}> Test </label>
               <input id={'yy'} type={"checkbox"}/>
               <label for={'yy'}>Test</label>
               <input id={'yy'} type={"checkbox"}/>
               <label for={'yy'}>Test</label>
               <input id={'yy'} type={"checkbox"}/>
               <label for={'yy'}>Test</label>
            </Modal>}
         </ContractTableTopBar>
         <Table
            headerList={headerList}
            dataList={factoryItems.filter(fi => {
               return fi?.contractYear?.toString()?.includes(contractYearFilterValue) ?? true;
            })}
            fieldList={fieldList}/>
      </Panel>);
};

export default HomeTopLeftPanel;
