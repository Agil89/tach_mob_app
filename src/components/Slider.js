import React from 'react'
import {View,Image,ScrollView,Dimensions,Text,StyleSheet} from 'react-native'

const {width} = Dimensions.get("window")
const height = width * 0.6
const headUri = 'http://34.72.0.144/media/'

export default class Slider extends React.Component{
    state = {
        active: 0
    }

    change = ({nativeEvent}) =>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if(slide !== this.state.active){
            this.setState({active:slide})
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                pagingEnabled
                horizontal
                onScroll={this.change}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}>
                {
                    this.props.images.map((image,index)=>(
                        <Image 
                        key={index}
                        source={{uri:`${headUri}/${image}`}}
                        style={styles.image} />
                        
                    ))
                }
                {
                    this.props.images.map((image,index)=>(
                        console.log(image)
                        
                    ))
                }
                </ScrollView>
               
                <View style={styles.pagination}>
                    {
                        this.props.images.map((i,k)=>(
                            <Text key={k} style={k==this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width,
        height
    },
    scroll:{
        width,
        height
    },
    image:{
        width,
        height,
        resizeMode:'cover'
    },
    pagination:{
        flexDirection:'row',
        position:'absolute',
        top:190,
        alignSelf:'center'
    },
    pagingText:{
        color:'#888',
        margin:3,
        fontSize:(width/30)
    },
    pagingActiveText:{
        color:'white',
        margin:3,
        fontSize:(width/30)
    }

})