import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Contacts from './components/Contacts';
import Action from './components/Action';
import { Font } from 'expo';

export default class App extends Component {
  render() {
    return <RootStack />;
  }

}

const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  SignIn: {
    screen: SignIn
  },
  Contacts: {
    screen: Contacts
  },
  Action: {
    screen: Action
  }
},
  {
    initialRouteName: 'SignIn'
  }
);

