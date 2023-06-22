import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {
  AuthTabsContainer,
  TabButton,
  TabPanelContainer,
} from './AuthTabs.styled';

import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = index => {
    setActiveTab(index);
  };

  return (
    <AuthTabsContainer>
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList>
          <div>
            <Tab css={TabButton}>Registration</Tab>
            <Tab css={TabButton}>Log In</Tab>
          </div>
        </TabList>

        <TabPanel css={TabPanelContainer}>
          <RegisterForm />
        </TabPanel>

        <TabPanel css={TabPanelContainer}>
          <LoginForm />
        </TabPanel>
      </Tabs>
    </AuthTabsContainer>
  );
};

export default AuthTabs;
