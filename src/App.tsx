import React from 'react';
import styled from 'styled-components';
import SideBar from './components/0.SideBar/SideBar';
import AboutMe from './components/1.AboutMe/AboutMe';
import Training from './components/2.Training/Training';
import Awards from './components/3.Awards/Awards';
import Project from './components/4.Project/Project';

function App() {
  return (
    <PortfolioPage>
      <Contents>
        <AboutMe />
        <Training />
        <Awards />
        <Project />
      </Contents>
      <SideBar />
    </PortfolioPage>
  );
}

export default App;

const PortfolioPage = styled.div`
  display: flex;
  width: 100%;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 60px 0px 0px 50px;
  gap: 50px;
`
