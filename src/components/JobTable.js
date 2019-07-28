import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Table from 'react-bootstrap/Table';

let jsonData = require('../jobData.json');


console.log(jsonData);

const TableContainer = styled.div`
    font-family: 'lato';
    margin: 50px 30px;
`

const TableTitle = styled.div`
    font-size: 25px;
    color: #45A29E;
    margin-bottom: 20px;
`



class JobTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let dataSet = [];
        if (this.props.type === "current"){
           dataSet = jsonData.current;
        }
        else if (this.props.type === "waiting"){
           dataSet = jsonData.waiting;
        }
        else if (this.props.type === "finished"){
           dataSet = jsonData.finished;
        } 
        return (
            <TableContainer>
                <TableTitle>{this.props.tableTitle}</TableTitle>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {
                                Object.keys(dataSet[0]).map((key) => {
                                    return( <th> {key} </th> )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataSet.map((row) => {
                                return (
                                    <tr>
                                        {
                                            Object.keys(row).map((key) => {
                                                return( <th> {row[key]} </th> )
                                            })
                                       }
                                    </tr>
                                )
                                
                            })
                        }
                      
                    </tbody>
                </Table>

            </TableContainer>
        );
    }
}

export default JobTable;