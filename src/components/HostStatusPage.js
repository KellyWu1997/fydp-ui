import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DataPagination from './DataPagination.js';

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
    }

    render() {
        return (
            <React.Fragment>
                <PageContainer>
                    <Title><FontAwesomeIcon icon="angle-double-right"/> Host Status</Title>
                    <Legend>
                        <LegendColor color="#88bdbc"></LegendColor>
                        <LegendText>Occupied</LegendText>
                    </Legend>
                    <Legend>
                        <LegendColor color="#FFE4B5"></LegendColor>
                        <LegendText>Available</LegendText>
                    </Legend>
                    <DataPagination />
                </PageContainer>
                
            </React.Fragment>
        );
    }
}

export default HostStatusPage;