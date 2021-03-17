import React,{useState} from 'react'
import {Text,View,StyleSheet,TextInput,Button} from 'react-native'
import {Picker} from '@react-native-community/picker'
import { CheckBox } from 'react-native-elements'
import { getFilteredCars } from '../api/getCars'
import { useDispatch } from 'react-redux'


export const FilterScreen =({navigation}) =>{
    const [isSelected,setSelection] = useState(false)



    const [isEcoSelected,setEcoSelection] = useState(false)
    const [isComfSelected,setComfSelection] = useState(false)
    const [isBusSelected,setBusSelection] = useState(false)
    const [isPicked,setPicked] = useState('Марка автомобиля')
    const [pickModel,setPickModel] = useState('Модель автомобиля')
    const [minText,setMinText] = useState(null)
    const [maxText,setMaxText] = useState(null)

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
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        title='Эконом'
                        checked={isSelected}
                        onPress={selectHandle}
                        />
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        title='Комфорт'
                        checked={isSelected}
                        onPress={selectHandle}
                        />
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        title='Бизнес'
                        checked={isSelected}
                        onPress={selectHandle}
                        />
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.classText}>По марку и модели автомобиля :</Text>
                <View style={styles.mm}>
                    <Text>Марка автомобиля : </Text>
                <Picker
                    selectedValue={isPicked}
                    style={{height: 50, width: '40%'}}
                    onValueChange={(itemValue, itemIndex)=>setPicked(itemValue)}>
                    <Picker.Item label="Kia" value="kia" />
                    <Picker.Item label="Hyundai" value="hyundai" />
                    <Picker.Item label="Skoda" value="skoda" />
                </Picker>
                </View>
                <View style={styles.mm}>
                    <Text>Модель автомобиля :</Text>
                <Picker
                    selectedValue={pickModel}
                    style={{height: 50, width: '40%'}}
                    onValueChange={(itemValue, itemIndex)=>setPickModel(itemValue)}>
                    <Picker.Item label="Rio" value="rio" />
                    <Picker.Item label="Optima" value="Optima" />
                    <Picker.Item label="Carnaval" value="carnaval" />
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