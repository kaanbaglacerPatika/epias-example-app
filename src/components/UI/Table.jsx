import React from "react";
import PropTypes from 'prop-types';
import Th from "./Th.jsx";
import Td from "./Td.jsx";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%
`;

const Table = (props) => {
   const {headerList, dataList, tableStyle} = props;

   Table.propTypes = {
      headerList: PropTypes
         .arrayOf(PropTypes.any).isRequired,
      dataList: PropTypes
         .arrayOf(PropTypes.any).isRequired,
      tableStyle: PropTypes.any
   }

   const TableHeaderRow = () => {
      return <>
         {headerList?.length > 0 && (<tr>
            {headerList.map((header) => <Th label={header.label} key={header.id} id={header.id}/>)}
         </tr>)}
      </>;
   }

   const TableDataRow = (props) => {
      TableDataRow.propTypes = {
         rowDataList: PropTypes
            .arrayOf(PropTypes.any).isRequired
      };

      return <>
         {props.rowDataList?.length > 0 && (<tr>
            {props.rowDataList.map((data) => <Td label={data.label} key={data.id} id={data.id}/>)}
         </tr>)}
      </>;
   };

   return <StyledTable style={tableStyle}>
      <thead>
      <TableHeaderRow/>
      </thead>
      <tbody>
      {
         dataList?.length > 0 && (dataList.map((data, index) => {
            return <TableDataRow key={index} rowDataList={data}/>;
         }))
      }
      </tbody>
   </StyledTable>
};

export default Table;
