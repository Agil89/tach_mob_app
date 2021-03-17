import React,{useState} from 'react'
import {View,StyleSheet,ScrollView} from 'react-native'
import { DatePicker } from '../components/DateTimePicker'
import { OrderInfo } from '../components/OrderInfo'
import Slider from '../components/Slider'


export const ReserveScreen =({navigation}) =>{
    const car = navigation.getParam('car')
    const [gettedDate,setGettedDate] = useState(null)
    const [dateInfo,setDateInfo] = useState(false)
    const [delta,setDelta] =useState(null)

    const getDate = (date,info,delta) =>{
        setGettedDate(date)
        setDateInfo(info)
        setDelta(delta)
    }
    
    return (
        <ScrollView>
            <View style={styles.center}>
                <Slider images={car.images} />
                <DatePicker 
                getDate={getDate} 
                />
                <OrderInfo 
                navigation={navigation} 
                gettedDate={gettedDate}
                dateInfo={dateInfo}
                delta = {delta}
                 />
            </View>
        </ScrollView>
    )
}

ReserveScreen.navigationOptions = ({navigation}) => {
    const car = navigation.getParam('car')
    return{
        headerTitle: 'Аренда ' + car.model.marka.marka + ' ' + car.model.model
    }
}

const styles = StyleSheet.create({
    center:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'column',
        marginBottom:20
    }
})