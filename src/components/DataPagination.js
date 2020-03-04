import './DataPagination.css';

import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HostStatusItem from './HostStatusItem';


let statusData = require('../statusData.json');

class DataPagination extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        let random = this.props.random;
		let currentData = statusData[random];

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