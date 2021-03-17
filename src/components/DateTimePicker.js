import React,{useState} from 'react'
import { Button, Text, View, StyleSheet,Alert} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'react-moment'



export const DatePicker = (props) =>{
    const [firstDate,setFirstDate] = useState(null)
    const [secondDate,setSecondDate] = useState(null)
    const [isDatePickerVisible,setDatePickerVisibility] = useState(false)
    const [isSecondDatePickerVisible,setSecondDatePickerVisibility] = useState(false)
    const [dateInfo,setDateInfo] = useState(false)

    const showDatePicker = () =>{
        setDatePickerVisibility(true)
    }
    const showDatePicker2 = () =>{
        setSecondDatePickerVisibility(true)
    }

    const hideDatePicker = () =>{
        setDatePickerVisibility(false)

    }
    const hideDatePicker2 = () =>{
        setSecondDatePickerVisibility(false)

    }

    const dateHandler = (formattedDate,dateInfo,delta) =>{
        props.getDate(formattedDate,dateInfo,delta)
    }
    

    const handleConfirm = (date) =>{
        const formattedDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
        setFirstDate(formattedDate)
        dateHandler(formattedDate)
        hideDatePicker()
    }

    const handleConfirmSecond = (date) =>{
        const formattedDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
        setSecondDate(formattedDate)
        const startDate = new Date(firstDate)
        const endDate = new Date(formattedDate)
        console.log(Math.round((endDate-startDate)/(1000*60*60*24)))
        const delta = Math.round((endDate-startDate)/(1000*60*60*24))
        dateHandler(firstDate.toString() + "-" + formattedDate.toString(),true,delta)
        hideDatePicker2()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Выберите дату для аренды : </Text>
            <View style={styles.buttonsViewParent}>
                <View style={styles.buttonsView}>
                    <Button title='С какого числа' onPress={showDatePicker} />
                    <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode='date'
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    
                    />
                </View>
                <Text style={styles.line}>-</Text>
                <View style={styles.buttonsView}>
                <Button disabled={!firstDate} title='До какого числа' onPress={showDatePicker2} />
                    <DateTimePickerModal
                    isVisible={isSecondDatePickerVisible}
                    mode='date'
                    onConfirm={handleConfirmSecond}
                    onCancel={hideDatePicker2}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        flexDirection:'column',
        marginTop:10,
        borderWidth:1,
        height:'15%',
        padding:10
    },
    buttonsView:{
        paddingHorizontal:10
    },
    buttonsViewParent:{
        flex:1,
        flexDirection:'row'
    },
    text:{
        marginBottom:10
    },
    line:{
        paddingTop:6
    },
    dateText:{
        color:'red',
        fontSize:16
    }
})




