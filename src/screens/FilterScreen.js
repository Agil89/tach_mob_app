import React,{useState, useEffect} from 'react'
import {Text,View,StyleSheet,TextInput,Button} from 'react-native'
import {Picker} from '@react-native-community/picker'
import { CheckBox } from 'react-native-elements'
import { getFilteredCars } from '../api/getCars'
import { useSelector,useDispatch } from 'react-redux'
import { getModelsForMarka } from '../store/actions/filterDataAction'


export const FilterScreen =({navigation}) =>{

    const dispatch = useDispatch()


    const [isSelected,setSelection] = useState(false)

    const classes = useSelector(state => state.filters.classes)
    const markas = useSelector(state => state.filters.markas)
    const models = useSelector(state => state.filters.models)

    console.log(models)



    const [isPicked,setPicked] = useState('Марка автомобиля')
    const [pickModel,setPickModel] = useState('Модель автомобиля')
    const [minText,setMinText] = useState(null)
    const [maxText,setMaxText] = useState(null)

    useEffect(()=>{
        dispatch(getModelsForMarka(isPicked))
    },[isPicked])

    const selectHandle = () =>{
        if (isSelected){
            setSelection(false)
        }else {
            setSelection(true)
        }
    }
    
    const filterCarsHandler = () =>{
        getFilteredCars()
        navigation.navigate('FilteredScreen')
        
    }

    return (
        <View style={styles.center}>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>По Цене:</Text>
                <View style={styles.minMax}>
                    <View style={styles.input}>
                        <TextInput 
                        placeholder='Минимум' 
                        keyboardType='number-pad' 
                        onChangeText={text=>setMinText(text)} />
                    </View>
                    <View style={styles.input}>
                        <TextInput 
                        placeholder='Максимум' 
                        keyboardType='number-pad' 
                        onChangeText={text=>setMaxText(text)} />
                    </View>
                </View>
            </View>
            <View style={styles.classContainer}>
                <Text style={styles.classText}>По классу автомобиля :</Text>
                <View style={styles.allClasses}>
                {classes.map(carClass => (
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        title={carClass.name}
                        checked={isSelected}
                        onPress={selectHandle}
                        />
                    </View> ))}
                </View>
            </View>
            <View>
                <Text style={styles.classText}>По марку и модели автомобиля :</Text>
                <View style={styles.mm}>
                    <Text>Марка автомобиля : </Text>
                <Picker
                    selectedValue={isPicked}
                    style={{height: 50, width: '40%'}}
                    onValueChange={(itemValue, itemIndex)=>(
                        setPicked(itemValue)
                        )}>
                    {markas.map(marka => <Picker.Item label={marka.marka} value={marka.id} />)}
                </Picker>
                </View>
                <View style={styles.mm}>
                    <Text>Модель автомобиля :</Text>
                <Picker
                    selectedValue={pickModel}
                    style={{height: 50, width: '40%'}}
                    onValueChange={(itemValue, itemIndex)=>setPickModel(itemValue)}>
                        {models.map(model => <Picker.Item label={model.model} value={model.model} />)}
                </Picker>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Найти' onPress={filterCarsHandler}  />
            </View>
        </View>
    )
}

FilterScreen.navigationOptions = {
    headerTitle: 'Фильтры'
}

const styles = StyleSheet.create({
    center:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    checkboxContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:'33%'
    },
    mm:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    priceContainer:{
        flexDirection:'column',
        width:'80%',
        paddingVertical:20
    },
    minMax:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    priceText:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5
    },
    input:{
        borderBottomWidth:1,
        width:'30%'
    },
    buttonContainer:{
        width:'80%',
        paddingTop:30
    },
    classContainer:{
        marginVertical:20,
        justifyContent:'center',
        width:'100%'
    },
    classText:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5
    },
    allClasses:{
        flexDirection:'row'
    }
})