import FilterButton from "./FilterButton.jsx";
import Table from "../UI/Table.jsx";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Dropdown from "../UI/Dropdown.jsx";
import ContractTableTopBar from "./ContractTableTopBar.jsx";
import Panel from "../UI/Panel.jsx";
import Modal from "../UI/Modal.jsx";
import CheckboxWithLabel from "../UI/CheckboxWithLabel.jsx";
import {useImmer} from "use-immer";

const HomeTopLeftPanel = () => {
   const [contractYearFilterValue, setContractYearFilterValue] = useState("");
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const factoryItems = useSelector(state => state.factory.factoryItems ?? []);
   const splitPercentages = useSelector((state) => state.ui.splitPercentages);
   const uniqueContractYears = [...new Set(factoryItems.map(factoryItem => factoryItem?.contractYear))];
   let [topLeftPerc, topRightPerc] = splitPercentages.homeTopHorizontal;
   const [filterList, setFilterList] = useImmer([
      {
         value: 'id',
         checked: true,
         label: 'id',
         field: 'id'
      },
      {
         value: 'contractYear',
         checked: true,
         label: 'kontrat',
         field: 'contractYear'
      },
      {
         value: 'bid',
         checked: true,
         label: 'teklif',
         field: 'bid'
      },
      {
         value: 'data',
         checked: true,
         label: 'data',
         field: 'data'
      }
   ]);

   useEffect(() => {
      [topLeftPerc, topRightPerc] = splitPercentages.homeTopHorizontal;
   }, [splitPercentages.homeTopHorizontal])

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
   const onContractYearFilterChange = (event) => {
      setContractYearFilterValue(event.target.value);
   };

   const onFilterCheckboxChange = (event) => {
      setFilterList((draft) => {
         const clickedFilter = draft.find(df => df.value === event.target.value);
         clickedFilter.checked = event.target.checked;
      })
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
               {filterList.map(fil => {
                  return <div key={fil.label} style={{display: "flex"}}>
                     <CheckboxWithLabel
                        checked={fil.checked}
                        value={fil.value}
                        label={fil.label}
                        onChange={onFilterCheckboxChange}/>
                  </div>;
               })}
            </Modal>}
         </ContractTableTopBar>
         <Table
            headerList={headerList.filter((header) => {
               return filterList.filter(filter => filter.checked).map(filter => filter.field).includes(header.field);
            })}
            dataList={factoryItems.filter(fi => {
               return fi?.contractYear?.toString()?.includes(contractYearFilterValue) ?? true;
            })}
            fieldList={fieldList.filter((field) => {
               return filterList.filter(filter => filter.checked).map(filter => filter.field).includes(field);
            })}/>
      </Panel>);
};

export default HomeTopLeftPanel;
