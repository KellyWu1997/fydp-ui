import './HostStatusItem.css';

import React, { Component } from 'react';
import ReactSvgPieChart from "react-svg-piechart"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class HostStatusItem extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        let { data } = this.props;
        let occupancy = data.num_jobs / data.max_jobs;
        let itemColor = "#9bc4c3";

        if (occupancy > 0.5) {
            itemColor = "#45a29e";
        } 
        if (occupancy > 0.8) {
            itemColor = "#056361";
        }

        return (
            <div className="HostStatusItem" style={{backgroundColor: itemColor}}>
                <div className="hostId">{data.id}</div>
                <ul>
                    <li>Host name: {data.host_name}</li>
                    <li>Status: {data.status}</li>
                    <li>Max jobs #: {data.max_jobs}</li>
                    <li>Current jobs #: {data.num_jobs}</li>
                </ul>
                <ul>
                    <li>Running jobs #: {data.num_jobs_running}</li>
                    <li>CPU #: {data.num_cpu}</li>
                </ul>
            </div>
        );
    }
}

export default HostStatusItem;