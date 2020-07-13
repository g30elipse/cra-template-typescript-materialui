import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import RootLayout from './Screens/RootLayout';
import Boot from './Boot';





const App: React.FC = () => {
  Boot().then(() => {

  });
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={Theme}>
        <RootLayout />
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
