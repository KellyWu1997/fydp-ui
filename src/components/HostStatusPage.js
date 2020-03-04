import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DataPagination from './DataPagination.js';
import HostStatusChart from './HostStatusChart';

let statusData = require('../statusData.json');

const PageContainer = styled.div`
    padding: 60px;
    font-family: 'lato';
`

const Title = styled.div`
    font-size: 35px;
    margin-bottom: 30px;
`

const Legend = styled.div`
    display:inline-block;
    margin-left: 20px;
    margin-right: 15px;
`

const LegendColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.color};
    display: inline-block;
    margin-right: 5px; 
`

const LegendText = styled.p`
    display: inline-block;
    font-size: 20px;
`


class HostStatusPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            random: 0
        }
    }

    componentDidMount() {
        let rand = 0;
        setInterval(() => {
            rand = (rand + 1) % statusData.length;
            this.setState({
                random: rand
            })
        }, 2000)
    }

    render() {
        return (
            <React.Fragment>
                <PageContainer>
                    <Title><FontAwesomeIcon icon="angle-double-right"/> Host Status</Title>
                    <HostStatusChart random={this.state.random} />
                    <DataPagination random={this.state.random}/>
                </PageContainer>
                
            </React.Fragment>
        );
    }
}

export default HostStatusPage;