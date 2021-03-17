import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import { HeaderButtons,Item } from 'react-navigation-header-buttons'


export const ContactScreen =({}) =>{
    return (
        <View style={styles.center}>
            <Text>ContactScreen</Text>
        </View>
    )
}

ContactScreen.navigationOptions =({navigation}) => ({
    headerTitle: 'Контакты',
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}  />
        </HeaderButtons>
    )
})

const styles = StyleSheet.create({
    center:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})