import { getCars, getCarsByLimit } from "../../api/getCars"
import { CHANGE_LOADING, LOAD_CARS, LOAD_MORE_CARS } from "../types"



export const loadCars = () =>{
    return async dispatch =>{
        const cars = await getCars()
        dispatch({
            type: LOAD_CARS,
            payload: cars
        })
    }
}
export const loadCarsByPage = (page) =>{
    return async dispatch =>{
        const carsOnPage = await getCarsByLimit(page)
        dispatch({
            type: LOAD_MORE_CARS,
            payload: carsOnPage.results
        })
        // if (carsOnPage.detail === 'Invalid page.'){
        //     dispatch(loadingHandler(false))
        // }
        dispatch(loadingHandler(false))
    }
}

export const loadingHandler = (result) =>{
    return {
        type: CHANGE_LOADING,
        payload: result
    }
}