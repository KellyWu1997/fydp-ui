import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HostStatusItem from './HostStatusItem';

let statusData = require('../statusData.json');
let totalPageNum = Math.ceil(statusData.length / 6);

const Container = styled.div`
    margin-top: 10px;
    height: 700px;
`

const PaginationContainer = styled.div`
    width: 600px;
    height: 100px;
    margin: 50px auto;
    text-align: center;
`
const PaginationList = styled.ul`
    margin-top: 10px;
`

const ListItem = styled.li`
    display: inline-block;
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #C5C6C7;
    cursor: pointer;
    background-color: ${(props) => props.activePage == props.actualPage ? "#45A29E" : "white"};
    color: ${(props) => props.activePage == props.actualPage ? "white" : "black"};
`

const SideItem = styled.li`
    display: inline-block;
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #C5C6C7;
    cursor: pointer;
    background-color: #FFE4B5;
    color: black;
`


class DataPagination extends Component {
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);

        this.state = {
            activePage: 1,
        }
    }


    changePage = (destination) => {
        if(destination === "previous") {
            if (this.state.activePage > 1) {
                this.setState({
                    activePage: this.state.activePage - 1,
                })
            }
        } 
        
        else if(destination === "next")
        {
            if (this.state.activePage < totalPageNum) {
                this.setState({
                    activePage: this.state.activePage + 1
                })
            }
        }

        else {
            this.setState({
                activePage: destination,
            })
        }
       
    }

    render() {
        let data = statusData.slice(6 * (this.state.activePage - 1), 6 * (this.state.activePage));
        let pageArr = [];
        for (let i=1; i<=totalPageNum; i++) {
            pageArr.push(i);
        }

        return (
            <Container>
                {
                    data.map((host)=> {
                        return (
                            <HostStatusItem hostName={host.hostName} chart={host.chartData}/>
                        )
                    })
                }
                <PaginationContainer>
                    <PaginationList>
                        <SideItem onClick={() => this.changePage("previous")}>Previous</SideItem>
                        {
                            pageArr.map((num) => {
                                return (
                                    <ListItem activePage={this.state.activePage} actualPage={num} onClick={() => this.changePage(num)}>{num}</ListItem>
                                )
                            })
                        }
                       
                        <SideItem onClick={() => this.changePage("next")}>Next</SideItem>
                    </PaginationList>
                </PaginationContainer>
            </Container>
        );
    }
}

export default DataPagination;