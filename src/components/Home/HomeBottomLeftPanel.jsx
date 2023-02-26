import React from "react";
import Table from "../UI/Table.jsx";
import Panel from "../UI/Panel.jsx";

const HomeBottomLeftPanel = () => {
   const dataList = [
      {id: 'id', label: 'label'},
      {id: 'id', label: 'label'},
      {id: 'id', label: 'label'},
   ];
   const fieldList = ['id', 'label'];
   return (<Panel>
      <Table dataList={dataList} fieldList={fieldList}/>
      <button>Yeni ekle</button>
   </Panel>);
};

export default HomeBottomLeftPanel;
