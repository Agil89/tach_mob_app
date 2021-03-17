import React from 'react'
import {Text,View,Button,Image, StyleSheet} from 'react-native'


export const Car = ({car, onOpen}) =>{
    const headUri = 'http://34.72.0.144'
    return (
        <View style={styles.car}>
            <View style={styles.carChild}>
                <Image style={styles.image}  source={{uri:car.main_image}} />
                <View style={styles.allInfo}>
                    <Text style={styles.textName}>{car.model.marka.marka} {car.model.model} {car.car_year.year}</Text>
                    <Text style={styles.text}>{car.fuel.name}</Text>
                    <Text style={styles.text}>{car.comment}</Text>
                </View>
            </View>
            <View style={styles.priceView}>
             <Text style={styles.priceText}>Цена за 1 день от {car.price}</Text>
            </View>
            <Button title='Забронировать' onPress={()=> onOpen(car)} />
        </View>
    )
}


const styles = StyleSheet.create({
    car:{
        flex:1,
        width:'100%',
        padding:10,
        height:200,
        marginVertical:5,
        backgroundColor:'#E4FEFC'
    },
    image:{
        padding:5,
        height:'100%',
        width:'50%',
    },
    carChild:{
        flex:1,
        flexDirection:'row'
    },
    allInfo:{
        width:'50%',
        height:'100%',
        justifyContent:'center'
    },
    text:{
        fontFamily:'roboto-bold',
        textAlign:'right',
        paddingVertical:5
    },
    priceText:{
        textAlign:'center',
        fontWeight:'bold'
    },
    priceView:{
        paddingVertical:5,
        
    },textName:{
        fontFamily:'roboto-bold',
        textAlign:'right',
        paddingVertical:5,
        fontWeight:'bold'
    }
})