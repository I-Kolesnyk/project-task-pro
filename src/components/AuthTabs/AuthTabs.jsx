import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {
  AuthTabsContainer,
  TabButton,
  TabPanelContainer,
} from './AuthTabs.styled';

import LoginForm from 'components/LoginForm/LoginForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = index => {
    setActiveTab(index);
  };

  return (
    <AuthTabsContainer>
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList>
          <Tab css={TabButton}>Registration</Tab>
          <Tab css={TabButton}>Log In</Tab>
        </TabList>

        <TabPanel css={TabPanelContainer}>
          <RegistrationForm />
        </TabPanel>

        <TabPanel css={TabPanelContainer}>
          <LoginForm />
        </TabPanel>
      </Tabs>
    </AuthTabsContainer>
  );
};

export default AuthTabs;
