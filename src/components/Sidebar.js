import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.nav`
  width: ${(props) => (props.collapsed ? '5px' : '200px')};
  background-color: #161b22;
  padding: 20px;
  transition: width 0.3s ease;
  position: relative;
`;

const CollapseButton = styled.button`
  position: absolute;
  top: 20px;
  right: -18px;
  background-color: #161b22;
  color: #c9d1d9;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  &:hover {
    color: #58a6ff;
  }
`;

const SectionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SectionItem = styled.li`
  margin-bottom: 10px;
`;

const SectionLink = styled.a`
  color: #c9d1d9;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #58a6ff;
  }
`;

function Sidebar({ sections, currentSection, setCurrentSection }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarContainer collapsed={collapsed}>
      <CollapseButton onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '>' : '<'}
      </CollapseButton>
      {!collapsed && (
        <SectionList>
          {sections.map((section) => (
            <SectionItem key={section}>
              <SectionLink
                onClick={() => setCurrentSection(section)}
                style={{ fontWeight: currentSection === section ? 'bold' : 'normal' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </SectionLink>
            </SectionItem>
          ))}
        </SectionList>
      )}
    </SidebarContainer>
  );
}

export default Sidebar;