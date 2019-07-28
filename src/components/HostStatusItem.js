import React, { Component } from 'react';
import ReactSvgPieChart from "react-svg-piechart"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Container = styled.div`
    display: inline-block;
    margin: 15px;
    width: 30%;
    height: 350px;
    background-color: #C5C6C7;
    border-radius: 5px;
`
const Chart = styled.div`
    width: 80%;
    height: 80%;
    margin: 20px auto;
    margin-bottom: 0px;
`

const HostName = styled.p`
    font-family: 'lato';
    font-size: 20px;
    color: #1F2833;
    text-align: center;
    margin-top: -10px;

`

class HostStatusItem extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <React.Fragment>
                <Container>
                    <Chart>
                        <ReactSvgPieChart
                            data={this.props.chart}
                            strokeColor="#fff"
                            // If you need expand on hover (or touch) effect
                            expandOnHover               
                        />
                    </Chart>
                    <HostName>{this.props.hostName}</HostName>
                </Container>
            </React.Fragment>
        );
    }
}

export default HostStatusItem;