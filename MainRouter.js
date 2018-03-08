import HomeScreen from "./HomeScreen";
import SettingsScreen from "./Settings";
import React from 'react';
import {DrawerNavigator, TabBarBottom, TabNavigator} from 'react-navigation';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerContainer from "./DrawerContainer";

const TabStack = TabNavigator({
    Home: {
        screen: HomeScreen,


    },
    Settings: {
        screen: SettingsScreen,

    },


}, {
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Settings') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
            }
            return <Ionicons name={iconName} size={25} color={tintColor}/>;
        },

    }),

    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
});


export default DrawerNavigator({
    Tabs: {
        screen: TabStack
    },
    Page1: {
        screen: Page1,
        navigationOptions: {tabBarVisible: false}

    },
    Page2: {
        screen: Page2,
        navigationOptions: {tabBarVisible: false}

    },
    Page3: {
        screen: Page3,
        navigationOptions: {tabBarVisible: true}

    },

}, {
    contentComponent: DrawerContainer,
    drawerWidth: 300,
    navigationOptions: {
        headerMode: 'screen'
    }
});

