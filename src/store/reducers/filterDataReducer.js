import { GET_CLASSES, GET_MARKAS, GET_MODELS } from "../types";

const initialState = {
   classes:[],
   markas:[],
   models:[]
  };
  
export const filterDataReducer = (state=initialState,action) =>{
    switch (action.type){
        case GET_CLASSES:
            return {
                ...state,
                classes: [...action.payload]
            };
        case GET_MARKAS:{
            return {
                ...state,
                markas:[ ...action.payload ]
            }
        }
        case GET_MODELS:{
            return {
                ...state,
                models:[ ...action.payload ]
            }
        }
    }
    return state
}