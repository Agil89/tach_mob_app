import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { MainScreen } from '../screens/MainScreen'
import { AboutUsScreen } from '../screens/AboutUsScreen'
import { ContactScreen } from '../screens/ContactsScreen'
import { THEME } from '../theme'
import { Platform } from 'react-native'
import { ReserveScreen } from '../screens/ReserveScreen'
import { ReserveInfoScreen } from '../screens/ReserveInfoScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { AntDesign,FontAwesome } from '@expo/vector-icons'
import {TaxiScreen} from '../screens/TaxiScreen'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { FilterScreen } from '../screens/FilterScreen'
import { Dimensions } from 'react-native'
import { CustomDrawerContentComponent } from '../components/DrawerContentComponent'
import { SuccessScreen } from '../screens/SuccessScreen'
import { FilteredCarsScreen } from '../screens/FilteredCarsScreen'





const navigatorOptions={
    defaultNavigationOptions:{
        headerTintColor:Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
            
        }
    }
}


const MainNavigator = createStackNavigator({
    Main: {
        screen: MainScreen
    },
    About: {
        screen:AboutUsScreen
    },
    Contacts: {
        screen:ContactScreen
    },
    Reserve:{
        screen:ReserveScreen
    },
    Filters:{
        screen:FilterScreen
    },
    ReserveScreen:{
        screen:ReserveInfoScreen
    },
    SuccessScreen:{
        screen:SuccessScreen
    },
    FilteredScreen:{
        screen:FilteredCarsScreen
    }
},{
    initialRouteName:'Main',
    defaultNavigationOptions:{
        headerTintColor:Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
            
        }
    }
})

const AboutNavigator = createStackNavigator({
    About: AboutUsScreen,
    initialRouteName:'О нас'
},navigatorOptions)

const ContactsNavigator = createStackNavigator({
    Contacts:ContactScreen
},navigatorOptions)

const forTaxiNavigator = createStackNavigator({
    Taxi:TaxiScreen,
    Main: {
        screen: MainScreen
    }
},{
    initialRouteName:'Taxi',
    defaultNavigationOptions:{
        headerTintColor:Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
            
        }
    }
})

const BottomNavigator = createBottomTabNavigator({
    Main:{
        screen:MainNavigator,
        navigationOptions:{
            tabBarIcon:info=>(<AntDesign name='home' size={25} color={info.tintColor} />)
        }
    },
    Taxi:{
        screen: forTaxiNavigator,
        navigationOptions:{
            tabBarIcon:info=>(<FontAwesome name='taxi' size={25} color={info.tintColor} />)
        }
    }
},{
    tabBarOptions:{
        activeTintColor:THEME.MAIN_COLOR
    }
})


const MainDrawerNavigator = createDrawerNavigator({
        MainScreen:{
            screen:BottomNavigator,
            navigationOptions:{
                drawerLabel:'Главная'
            }
        },
        AboutUsScreen:{
            screen:AboutNavigator,
            navigationOptions:{
                drawerLabel:'О нас'
            }
        },
        ContactScreen:{
            screen:ContactsNavigator,
            navigationOptions:{
                drawerLabel:'Контакты'
            }
        }
    }
    ,{
        initialRouteName:'MainScreen',
        contentComponent:CustomDrawerContentComponent,
        drawerWidth: Dimensions.get('window').width / 1.5,
         drawerPosition: 'left',
        gesturesEnabled: false,
}
    
)

export const AppNavigation = createAppContainer(MainDrawerNavigator)