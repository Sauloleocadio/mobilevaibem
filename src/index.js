import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';
import NetworkInformation from './components/Networkinformation';

function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="#f6f6f6"
        barStyle="dark-content"
      />
      <Routes />

      <NetworkInformation />
    </>
  );
}

export default App;
