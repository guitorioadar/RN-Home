import React, {Component} from 'react'
import { View,Text,StyleSheet,Platform } from 'react-native'
import {Icon} from 'native-base'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

class MainScreen extends Component{

    static navigationOptions = {

        header: null
    }

    render() {
        return (
            <AppBottomTabNavigator/>
        )
    }
}

export default MainScreen

/*const AppTabNav = createMaterialTopTabNavigator({
    Home: {
        screen: HomeTab
    },
    Search: {
        screen: SearchTab
    },
    'Media': {
        screen: AddMediaTab
    },
    Likes: {
        screen: LikesTab
    },
    Profile: {
        screen: ProfileTab
    }
})*/

const AppBottomTabNavigator = createMaterialTopTabNavigator({

    Home: {
        screen: HomeTab
    },
    Search: {
        screen: SearchTab
    },
    'Media': {
        screen: AddMediaTab
    },
    Likes: {
        screen: LikesTab
    },
    Profile: {
        screen: ProfileTab
    }

},{
    animationsAreEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: "white",
                }
            })
        },
        indicatorStyle: {
            backgroundColor: 'white',
        },
        activeTintColor: '#000',
        inactiveTintColor: "#d1cece",
        showLabel: false,
        showIcon: true
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})