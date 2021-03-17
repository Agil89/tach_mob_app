import React,{ useEffect,useState } from 'react'
import {View,StyleSheet,FlatList, ActivityIndicator,Text} from 'react-native'
import { Car } from '../components/Car'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import { HeaderButtons,Item } from 'react-navigation-header-buttons'
import { useDispatch,useSelector } from 'react-redux'
import { loadCars, loadCarsByPage, loadingHandler } from '../store/actions/carAction'


export const MainScreen =(props) =>{

    const [pageCurrent,setpageCurrent] = useState(1)


    const openCarHandler = car =>{
        props.navigation.navigate('Reserve',{car})
    }

    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(loadCars())
    },[dispatch])

    useEffect(()=>{
        dispatch(loadingHandler(true))
        dispatch(loadCarsByPage(pageCurrent))
    },[pageCurrent])


    const allCars = useSelector(state =>state.cars.allCars)

    // useEffect (()=>{
    //     dispatch(loadingHandler(false))
    // },[allCars])

    const isLoading = useSelector(state => state.cars.isLoading)


    const renderFooter = () =>{
        return (
            isLoading ?
            <View style={styles.loader}>
                <ActivityIndicator size='large' color='grey' />
            </View> : null
        )
    }

    const handleLoadMore = () =>{
        setpageCurrent(pageCurrent + 1)
        console.log(pageCurrent)
    }


    return (
        <View style={styles.wrapper}>
            <FlatList 
            data={allCars}
            keyExtractor={(item,index)=> index.toString()}
            renderItem={({item})=> <Car car={item} onOpen={openCarHandler}/>}
            ListFooterComponent={renderFooter()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
           />
        </View>
    )
}

MainScreen.navigationOptions = ({navigation}) => ({
    headerTitle:'TachRent',
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
       padding:10,
       flex:1,

    },
    loader:{
       alignItems:'center',
       marginTop:10,
       color:'black'
    }
})