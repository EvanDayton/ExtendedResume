import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { portfolioData } from './data';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  color: #c9d1d9;
  background-color: #0d1117;
`;

function App() {
  const [currentSection, setCurrentSection] = useState('profile');
  const [data, setData] = useState(portfolioData);

  const updateData = (section, path, value) => {
    setData(prevData => {
      const newData = { ...prevData };
      if (value === null) {
        // Delete item
        const pathArray = path.split('.');
        let current = newData[section];
        for (let i = 0; i < pathArray.length - 1; i++) {
          current = current[pathArray[i]];
        }
        delete current[pathArray[pathArray.length - 1]];
      } else {
        // Add or update item
        const pathArray = path.split('.');
        let current = newData[section];
        for (let i = 0; i < pathArray.length - 1; i++) {
          if (!current[pathArray[i]]) {
            current[pathArray[i]] = {};
          }
          current = current[pathArray[i]];
        }
        current[pathArray[pathArray.length - 1]] = value;
      }
      return newData;
    });
  };

  return (
    <AppContainer>
      <Sidebar 
        sections={Object.keys(data)} 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <MainContent 
      data={portfolioData} 
      section={currentSection}
    />
    </AppContainer>
  );
}

export default App;