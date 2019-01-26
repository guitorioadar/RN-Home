import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from "./Components/MainScreen";

// this is the main app

export default class App extends React.Component{
    render(){
        return(
            <AppStackNavigator/>
        );
    }
}

const AppStackNavigator = createStackNavigator({
    Main: {
        screen: MainScreen
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
