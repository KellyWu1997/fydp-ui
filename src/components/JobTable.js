import './JobTable.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DataTable, { createTheme } from 'react-data-table-component';

let jsonData = require('../jobData.json');


const columnsOther = [
    {
      name: 'Job ID',
      selector: 'Job ID',
      sortable: true,
    },
    {
      name: 'Job Title',
      selector: 'Job Title',
      sortable: true,
    },
    {
      name: 'Submitter',
      selector: 'Submitter ID',
      sortable: true,
    },
    {
        name: 'Executing On',
        selector: 'Executing On',
        sortable: true,
    },
    {
      name: 'Usage',
      selector: 'Usage',
      sortable: true,
    }
  ];

  const columnsFinished = [
    {
      name: 'Job ID',
      selector: 'Job ID',
      sortable: true,
    },
    {
      name: 'Job Title',
      selector: 'Job Title',
      sortable: true,
    },
    {
      name: 'Submitter',
      selector: 'Submitter ID',
      sortable: true,
    },
    {
        name: 'Executed On',
        selector: 'Executed On',
        sortable: true,
    },
    {
      name: 'Status',
      selector: 'Status',
      sortable: true,
    },
    {
      name: 'Usage',
      selector: 'Usage',
      sortable: true,
    }
  ];

const TableContainer = styled.div`
    font-family: 'lato';
    margin: 50px 30px;
`

const TableTitle = styled.div`
    font-size: 25px;
    color: #45A29E;
    margin-bottom: 20px;
`
const customStyles = {
    rows: {
      style: {
        minHeight: '60px', 
        fontSize: '20px'
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        fontSize: '20px'
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        fontSize: '20px'
      },
    },
    header: {
        style: { display: 'none'}
    }
  };


class JobTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let dataSet = [];
        let title;
        let columns = columnsOther;
        if (this.props.type === "current"){
           dataSet = jsonData.current;
           
           title = "Current Executing";
        }
        else if (this.props.type === "waiting"){
          dataSet = jsonData.waiting;
           title = "Waiting";
        }
        else if (this.props.type === "finished"){
          dataSet = jsonData.finished;
           title = "Finished";
           columns = columnsFinished;
        } 
        return (
            <TableContainer>
                <TableTitle>{this.props.tableTitle}</TableTitle>
                <DataTable
                    columns={columns}
                    data={dataSet}
                    defaultSortField="title"
                    customStyles={customStyles}
                    highlightOnHover={true}
                />
          </TableContainer>
        );
    }
}

export default JobTable;