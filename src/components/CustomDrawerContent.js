import React from 'react'
import {Text,View,StyleSheet} from 'react-native'


export const CustomDrawerContent = (props) =>{
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>TachRent</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal:30,
        backgroundColor:'red'
    },
    text:{
        color:'white',
        fontSize:36,
        fontWeight:'bold'
    }
})