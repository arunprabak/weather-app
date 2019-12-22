import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider, CssBaseline, Container, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Search from './components/Search';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import TitleBar from './components/TitleBar';

import { closeNotification } from './redux/notification/notificationAction';
import Favourite from './components/Favourite';

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

const App = ({ notification, closeNotification }) => {
  const action = (
    <IconButton color='inherit' onClick={closeNotification}>
      <CloseIcon />
    </IconButton>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TitleBar />
      <Container className='app'>
        <Search />
        <ListView />
        <Switch>
          <Route exact path='/' component={Favourite} />
          <Route exact path='/detail/:id' component={DetailView} />
        </Switch>
        <Snackbar
          open={notification.isOpen}
          onClose={closeNotification}
          message={notification.message}
          action={action}
        />
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ notification }) => ({
  notification
});

const mapDispatchToProps = dispatch => ({
  closeNotification: () => dispatch(closeNotification())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
