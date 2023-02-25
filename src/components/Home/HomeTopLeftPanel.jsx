import FilterButton from "../FilterButton.jsx";
import Table from "../UI/Table.jsx";
import React from "react";

const HomeTopLeftPanel = () => {
   const headerList = [{id: 'id', label: 'id'}, {id: 'label', label: 'label'}]
   const dataList = [[{id: 'id1', label: 'id'}, {id: 'label1', label: 'label'}]];
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
   return (<div>
      <FilterButton id={'test'}/>
      <Table headerList={headerList} dataList={dataList}/>
   </div>);
};

export default HomeTopLeftPanel;
