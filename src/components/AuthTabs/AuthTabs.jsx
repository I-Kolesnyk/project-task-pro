import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavLink } from 'react-router-dom';
import { AuthTabsWrapper, AuthTabsContainer } from './AuthTabs.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = index => {
    setActiveTab(index);
  };

  return (
    <AuthTabsWrapper>
      <AuthTabsContainer>
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
          <TabList>
            <Tab>
              <NavLink to="/auth/register">Registration</NavLink>
            </Tab>
            <Tab>
              <NavLink to="/auth/login">Log In</NavLink>
            </Tab>
          </TabList>

          <TabPanel>
            <RegisterForm />
          </TabPanel>

          <TabPanel>
            <LoginForm />
          </TabPanel>
        </Tabs>
      </AuthTabsContainer>
    </AuthTabsWrapper>
  );
};

export default AuthTabs;
