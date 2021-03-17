import React from 'react'
import {Text,View,Button,StyleSheet} from 'react-native'


export const OrderInfo = ({navigation,gettedDate,dateInfo,delta}) =>{
    const car = navigation.getParam('car')
    const price = car.price
    const finalPrice = price * delta
    const carName = car.model.marka.marka + ' ' + car.model.model + ' ' + car.car_year.year
    return (
    <View style={styles.container}>
        <View style={styles.data}>
            <Text>Название автомобиля : </Text>
            <Text style={styles.rightText}>{car.model.marka.marka} {car.model.model} </Text>
        </View>
        <View style={styles.data}>
            <Text>Год выпуска : </Text>
            <Text style={styles.rightText}>{car.car_year.year}</Text>
        </View>
        <View style={styles.data}>
            <Text>Тип топливо : </Text>
            <Text style={styles.rightText}>{car.fuel.name}</Text>
        </View>
        <View style={styles.data}>
            <Text>Тип коробки передач : </Text>
            <Text style={styles.rightText}>{car.transmission.name}</Text>
        </View>
        <View style={styles.data}>
            <Text>Даты аренды : </Text>
            <Text style={styles.rightText}>{gettedDate}</Text>
        </View>
        <View style={styles.data}>
            <Text>Общая стоимость : </Text>
            <Text style={styles.rightText}>{delta && finalPrice || price} рублей</Text>
        </View>
        <View style={styles.buttonParent}>
        <Button disabled={!dateInfo} style={styles.button} title='Заполнить данные' 
        onPress={()=>navigation.navigate('ReserveScreen',{finalPrice,delta,carName,gettedDate})} />
        </View>
    </View>
    )
    
}


const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width:'80%'
    },
    data:{
        flexDirection:'row',
        paddingVertical:10,
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
    },
    rightText:{
        textAlign:'right'
    },

    buttonParent:{
        width:'100%'
    }
})