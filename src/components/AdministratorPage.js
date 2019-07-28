import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import JobTable from './JobTable.js';


const PageContainer = styled.div`
    padding: 60px;
    font-family: 'lato';
`

const Title = styled.div`
    font-size: 35px;
`

class AdministratorPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <PageContainer>
                    <Title><FontAwesomeIcon icon="angle-double-right"/> Administrator</Title>
                    <JobTable tableTitle="Currently Executing Jobs" type="current"/>
                    <JobTable tableTitle="Jobs Queue" type="waiting"/>
                    <JobTable tableTitle="Finished Jobs" type="finished"/>
                </PageContainer>
                
            </React.Fragment>
        );
    }
}

export default AdministratorPage;