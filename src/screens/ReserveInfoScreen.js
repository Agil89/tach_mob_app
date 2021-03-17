import React,{useState} from 'react'
import {Text,View,StyleSheet,TextInput,ScrollView,Button} from 'react-native'
import { createOrder } from '../api/sendData'
import { PhotoPicker } from '../components/PhotoPicker'


export const ReserveInfoScreen =({navigation}) =>{
    const finalPrice = navigation.getParam('finalPrice')
    const delta = navigation.getParam('delta')
    const carName = navigation.getParam('carName')
    const gettedDate = navigation.getParam('gettedDate')

    const [userName,setUserName] = useState('')
    const [userSurname,setUserSurname] = useState('')
    const [userNumber,setUserNumber] = useState(null)


    const orderHandler = () =>{
        const finalPrice = navigation.getParam('finalPrice')
        const delta = navigation.getParam('delta')
        const carName = navigation.getParam('carName')
        const gettedDate = navigation.getParam('gettedDate')
        const uSurName = userSurname
        const uName = userName
        const phoneNumber = userNumber
        const orderData = `Авто : ${carName}, даты аренды : ${gettedDate}, количество дней : ${delta},общая сумма к оплате : ${finalPrice}`
        console.log(uName,uSurName,phoneNumber,orderData)
        createOrder(uName,uSurName,phoneNumber,orderData)
        navigation.navigate('SuccessScreen')
    }

    return (
        <ScrollView>
        <View style={styles.center}>
            <Text style={styles.rentText}>Информация об аренде</Text>
            <View style={styles.allRentData}>
                <View style={styles.data}>
                    <Text>Название автомобиля : </Text>
                    <Text>{carName}</Text>
                </View>
                <View style={styles.data}>
                    <Text>Даты аренды : </Text>
                    <Text>{gettedDate}</Text>
                </View>
                <View style={styles.data}>
                    <Text>Количество дней аренды : </Text>
                    <Text>{delta} дней</Text>
                </View>
                <View style={styles.data}>
                    <Text>Общая сумма к оплате : </Text>
                    <Text>{finalPrice} рублей</Text>
                </View>
            </View>
            <View >
                <Text style={styles.infoText}>Заполняйте ниже указанные данные для завершение заявки.</Text>
            <View style={styles.inputContainer}>
                <View style={styles.nameSurnameInput}>
                    <TextInput style={styles.userNSinfo}
                    onChangeText={userName=>setUserName(userName)}
                    placeholder='Имя' />
                    <TextInput style={styles.userNSinfo}
                    onChangeText={userSurname=>setUserSurname(userSurname)}
                    placeholder='Фамилия' />
                </View>
                
                <TextInput style={styles.userInfo}
                 keyboardType='phone-pad' 
                 placeholder='Номер телефона'
                 onChangeText={number=>setUserNumber(number)} />
            </View>
            <View style={styles.loadContainer}>
                <Text style={styles.ifText}>*Если хотите чтобы договор был готов к ващему приезду отправьте нам сканы ваших документов :</Text>
                <View style={styles.buttonContainer}>
                    <PhotoPicker myText='Первая страница паспорта: ' />
                </View>
                <View style={styles.buttonContainer}>
                    <PhotoPicker myText='Вторая страница паспорта: ' />
                </View>
                <View style={styles.buttonContainer}>
                    <PhotoPicker myText='Первая страница вод/уд.: ' />
                </View>
                <View style={styles.buttonContainer}>
                    <PhotoPicker myText='Вторая страница вод/уд.: ' />
                </View>
            </View>
            <View>
                <Button
                 disabled={!(userName && userSurname && userNumber)} 
                 title='Отправить данные' 
                 onPress={orderHandler}/>
            </View>
            </View>
          
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    center:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    userInfo:{
        borderBottomWidth:1,
    },
    buttonContainer:{
        // width:'90%',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:10,
        flexDirection:'row'
    },
    
    loadContainer:{
        width:'100%',
        marginVertical:15
    },
    data:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        alignItems:'center'
    },
    infoText:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:10
    },
    ifText:{
        opacity:0.5,
        textAlign:'center'
    },
    inputContainer:{
        paddingHorizontal:30,
        marginVertical:12
    },
    rentText:{
        fontWeight:'bold',
        fontSize:18
    },
    allRentData:{
        paddingLeft:'5%',
        marginVertical:12,
        width:'100%'
    },
    nameSurnameInput:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
    userNSinfo:{
        borderBottomWidth:1,
        width:'40%'
    }

})