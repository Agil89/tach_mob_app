import React,{useState} from 'react'
import {View,StyleSheet,Button,Image,Text,Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

export const PhotoPicker = ({myText}) =>{

    async function askForPermissions() {
      const {status} = await Permissions.askAsync(
            Permissions.CAMERA,
            Permissions.MEDIA_LIBRARY,
        )
        if (status !=='granted'){
            Alert.alert('Вы не разрешили выбрать фото.')
            return false
        }
        return true
    }

    const [image,setImage] = useState(null)

    const pickPhoto = async () =>{
        const hasPermissions = await askForPermissions()
        if (!hasPermissions){
            return
        }
        
        const callCamera = async () =>{
            const img = await ImagePicker.launchCameraAsync({
                quality:0.7,
                allowsEditing:false,
                aspect:[16,9]
            })
            setImage(img.uri)
        }
        
        const callGallery = async () =>{
            const img = await ImagePicker.launchImageLibraryAsync({
                quality:0.7,
                allowsEditing:false,
                aspect:[16,9]
            })
            setImage(img.uri)
        }
        Alert.alert(
        "Camera or gallery",
        "Откуда хотите выбрать фото?(использовать камеру или галерею)",
        [
            {
            text: "Отмена",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            {
            text: "Камера",
            onPress: () => {callCamera()},
            },
            { text: "Галерея", onPress: () => {callGallery()}},
            
        ],
        { cancelable: false }
        );
        
        // onPick(img.uri)
    }
    return (
        <View>
            <Text style={styles.text}>{myText} </Text>
            <Button style={styles.buttons} title='Загрузить' onPress={pickPhoto} />
            {image && <Image style={styles.image} source={{uri:image}} />}
        </View>
    )
}


const styles = StyleSheet.create({
    buttons:{

    },
    text:{
        marginBottom:5
    },
    image:{
        width:'100%',
        height:150,
        marginVertical:5
    }
})