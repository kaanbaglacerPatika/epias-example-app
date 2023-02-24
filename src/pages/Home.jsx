import React, {useState} from "react";
import Split from "react-split";
import Table from "../components/Table";
import "./Home.scss";
import FilterButton from "../components/FilterButton.jsx";

const TopLeft = () => {
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
const TopRight = () => {
   return (
      <div>
         <h1>Top Right</h1>
      </div>
   );
};

const BottomLeft = () => {
   return (
      <div>
         <h1>Bottom Left</h1>
      </div>
   );
};

const BottomRight = () => {
   return (
      <div>
         <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ea, sapiente dolore similique voluptates
            ut magnam cupiditate quod hic eligendi beatae nesciunt deserunt dolorem minima autem blanditiis quam
            quisquam doloribus.
         </p>
      </div>
   );
};

function Top() {
   return <Split
      sizes={[70, 30]}
      className="split"
      direction="horizontal">
      <TopLeft></TopLeft>
      <TopRight></TopRight>
   </Split>;
}

function Bottom() {
   return <Split
      sizes={[70, 30]}
      className="split"
      direction="horizontal">
      <BottomLeft></BottomLeft>
      <BottomRight></BottomRight>
   </Split>;
}

export default function HomePage() {
   return (
      <Split
         className="wrap"
         sizes={[65, 35]}
         minSize={100}
         expandToMin={false}
         gutterSize={10}
         gutterAlign="center"
         snapOffset={30}
         dragInterval={1}
         direction="vertical"
         cursor="col-resize"
      >
         <Top/>
         <Bottom/>
      </Split>

   )
}

