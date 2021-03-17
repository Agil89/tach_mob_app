import { getClasses } from "../../api/getClasses"
import { GET_CLASSES, GET_MARKAS, GET_MODELS } from "../types"
import { getMarkas } from "../../api/getMarkas"
import { getModels } from "../../api/getModels"


export const getAllClasses = () =>{
    return async dispatch =>{
        const classes = await getClasses()
        dispatch({
            type: GET_CLASSES,
            payload: classes
        })
    }
}

export const getAllMarkas = () =>{
    return async dispatch =>{
        const markas = await getMarkas()
        dispatch({
            type: GET_MARKAS,
            payload: markas
        })
    }
}

export const getModelsForMarka = (markaId) =>{
    return async dispatch =>{
        const models = await getModels(markaId)
        dispatch({
            type: GET_MODELS,
            payload: models
        })
    }
}