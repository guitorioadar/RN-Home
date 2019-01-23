import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import MainScreen from "./Components/MainScreen";

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



/*export default createBottomTabNavigator({
    Explore: {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'EXPLORE',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-search" color={tintColor} size={24} />
            )
        }
    },
    Saved: {
        screen: Saved,
        navigationOptions: {
            tabBarLabel: 'SAVED',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-heart-empty" color={tintColor} size={24} />
            )
        }
    },
    Trips: {
        screen: Trips,
        navigationOptions: {
            tabBarLabel: 'TRIPS',
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
            )
        }
    },
    Inbox: {
        screen: Inbox,
        navigationOptions: {
            tabBarLabel: 'INBOX',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-chatbubbles" color={tintColor} size={24} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-contact" color={tintColor} size={24} />
            )
        }
    }
},{
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
        }
    }
})*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
