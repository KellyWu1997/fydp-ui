import React, {Component} from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css';

import HostStatusPage from './components/HostStatusPage';
import AdministratorPage from './components/AdministratorPage';

import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleDoubleRight)


const RightContainer = styled.div`
  height: 100%;
  float: right;
  width: 80%;
`

const Title = styled.div`
    margin: 30px auto;
    display: block;
    font-size: 55px;
    font-family: 'Bahianita';
    color: white;
    width: 75%;
    align-content: center;
`

const BetaText = styled.p`
    font-size: 12px;
    font-family: 'lato';
    color: #C5C6C7;
`

class App extends Component {

  constructor() {
    super();
    this.state = {
       activePage: "Administrator"
    };
  } 

  render() {
    const navList = ["Host Status", "Administrator"]
    return (
    <div className="App">
      {/* <Sidebar navList={navList} activeItem={this.state.activePage}/> */}

      <Tabs>
        

          <TabList className="sidebar">

            <Title>
              LSF Coordinator
              <BetaText>BETA 1.0</BetaText>
            </Title>

            <Tab className="navItem" selectedClassName="activeTab"><p>Host Status</p></Tab>
            <Tab className="navItem" selectedClassName="activeTab"><p>Administrator</p></Tab>
          </TabList>
       

        {/* <RightContainer>
          {this.state.activePage === 'Host Status' ?
            <HostStatusPage /> : null
          }
          {this.state.activePage === 'Administrator' ?
            <AdministratorPage /> : null
          }
        </RightContainer> */}

        <TabPanel className="rightContainer">
          <HostStatusPage />
        </TabPanel>
        <TabPanel className="rightContainer">
          <AdministratorPage />
        </TabPanel>
     </Tabs>
    </div>
    );
  }
}

export default App;

