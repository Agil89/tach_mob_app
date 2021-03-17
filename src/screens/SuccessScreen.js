import React from 'react'
import { Text,View,StyleSheet,Button } from 'react-native'
import { Feather } from '@expo/vector-icons'; 




export const SuccessScreen = ({navigation}) =>{
    return (
        <View style={styles.wrapper}>
            <Feather name="check-circle" size={60} color="green" />
            <Text style={styles.text}>В ближайщее время наши сотрудники свяжутся с вами.</Text>
            <Button title='Главное меню' onPress={()=> navigation.navigate('Main')} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
        paddingHorizontal:20,
        marginVertical:25
    }
})