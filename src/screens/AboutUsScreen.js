import React from 'react'
import {Text,View,StyleSheet,Button,FlatList} from 'react-native'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import { HeaderButtons,Item } from 'react-navigation-header-buttons'
import { THEME } from '../theme'


export const AboutUsScreen =(props) =>{

    return (
        <View style={styles.wrapper}>
            <Text>about us</Text>
        </View>
    )
}


AboutUsScreen.navigationOptions = ({navigation}) => ({
    headerTitle:'О нас',
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}  />
        </HeaderButtons>
    )
})

const styles = StyleSheet.create({
    wrapper:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
    }
})