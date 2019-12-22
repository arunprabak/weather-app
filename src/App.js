import React from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider, CssBaseline, Container } from '@material-ui/core';

import Search from './components/Search';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import TitleBar from './components/TitleBar';

let theme = createMuiTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { paper: '#fff', default: '#fafafa' },
    primary: {
      light: '#000000',
      main: '#000000',
      dark: '#000000',
      contrastText: '#ffffff'
    },
    secondary: { light: '#ff4081', main: '#f50057', dark: '#c51162', contrastText: '#fff' },
    error: { light: '#e57373', main: '#f44336', dark: '#d32f2f', contrastText: '#fff' }
  }
});

theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TitleBar />
      <Container className='app'>
        <Search />
        <div>
          <ListView />
          <DetailView />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
