import './DataPagination.css';

import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HostStatusItem from './HostStatusItem';


let statusData = require('../statusData.json');

class DataPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentData: statusData[0]
        };
    }

    componentDidMount() {
        setInterval(() => {
            let random = Math.floor(Math.random() * statusData.length);
            let data = statusData[random];
            this.setState({
                currentData: data
            })
        }, 2000)
    }
    

    render() {
        let { currentData } = this.state;

        return (
            <div className="DataPagination">
                <ul>
                {
                    currentData.map((host)=> {
                        return (
                            <li><HostStatusItem data={host}/></li>
                        )
                    })
                }
                </ul>
                
                
            </div>
        );
    }
}

export default DataPagination;