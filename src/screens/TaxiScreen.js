import React from 'react'
import {View,StyleSheet,FlatList} from 'react-native'
import { Car } from '../components/Car'
import { DATA } from '../data'
import {useSelector} from 'react-redux'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import { HeaderButtons,Item } from 'react-navigation-header-buttons'


export const TaxiScreen =(props) =>{

    const openCarHandler = car =>{
        props.navigation.navigate('Reserve',{car})
    }

    const taxiCars = useSelector(state =>state.cars.taxiCars)

    return (
        <View style={styles.wrapper}>
            <FlatList 
            data={taxiCars}
            keyExtractor={car=> car.id.toString()}
            renderItem={({item})=> <Car car={item} onOpen={openCarHandler} />} />
        </View>
    )
}

TaxiScreen.navigationOptions=({navigation}) =>({
    headerTitle:'Аренда под такси',
    headerRight:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='filters' iconName='filter' onPress={() => navigation.navigate('Filters')}  />
        </HeaderButtons>
    ),
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}  />
        </HeaderButtons>
    )
})

const styles = StyleSheet.create({
    wrapper:{
       padding:10
    }
})