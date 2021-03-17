// import * as axios from 'axios'


// const instance = axios.create({
//     withCredentials: true,
//     baseURL:'http://34.72.0.144/api/v1.0/cars/'
// })


// export const getData ={
//     getCars(){
//         return instance.get(`cars`).then(response =>{
//              return response.data
//      })
//     },
// }



import { useDispatch } from 'react-redux'
import { loadingHandler } from '../store/actions/carAction'
 
export const getCars = async () =>{
    const response = await fetch('http://34.72.0.144/api/v1.0/cars/all/?page=1',{
        method:'GET',
        headers:{'Content-Type': 'application/json'}
    })
    const data = await response.json()
    return data.results
}

export const getCarsByLimit = async (page) =>{
 
    const response = await fetch(`http://34.72.0.144/api/v1.0/cars/all/?page=${page}`,{
        method:'GET',
        headers:{'Content-Type': 'application/json'}
    })
    const data = await response.json()
    
    return data
}

export const getFilteredCars = async () =>{
    const car_model='kia'
    const car_class= 'komfort'
    console.log('burdayam')
    const response = await fetch(`http://34.72.0.144/api/v1.0/cars/cars/?car_Model=${car_model}`,{
        method:'GET',
        headers:{'Content-Type': 'application/json'},
    })
    const data = await response.json()
    
    return data
}


