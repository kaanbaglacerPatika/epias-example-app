import React from "react";
import PropTypes from 'prop-types';
import Th from "./Th.jsx";
import Td from "./Td.jsx";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const Table = (props) => {
   const {headerList, dataList, tableStyle, fieldList} = props;

   Table.propTypes = {
      headerList: PropTypes
         .arrayOf(PropTypes.any),
      fieldList: PropTypes
         .arrayOf(PropTypes.string),
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
         rowData: PropTypes
            .arrayOf(PropTypes.any).isRequired
      };

      return <>
         {fieldList?.length > 0 && (<tr>
            {fieldList.map((field) => <Td label={props.rowData[field]} key={field} id={field}/>)}
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
            return <TableDataRow key={index} rowData={data}/>;
         }))
      }
      </tbody>
   </StyledTable>
};

export default Table;
