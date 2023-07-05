import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavLink, useLocation } from 'react-router-dom';

import { AuthTabsContainer } from './AuthTabs.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  const handleTabChange = index => {
    setActiveTab(index);
  };

  useEffect(() => {
    const { pathname } = location;
    if (pathname === '/auth/register') {
      setActiveTab(0);
    } else if (pathname === '/auth/login') {
      setActiveTab(1);
    }
  }, [location]);

  return (
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
  );
};

export default AuthTabs;
