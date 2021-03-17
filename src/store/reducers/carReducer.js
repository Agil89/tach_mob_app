import { CHANGE_LOADING, LOAD_CARS, LOAD_MORE_CARS } from "../types";

const initialState = {
  allCars: [],
  taxiCars: [],
  isLoading:false,
  filteredCars:[]
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARS:

      return {
        ...state,
        allCars: [...action.payload],
        taxiCars: action.payload.filter((car) => car.taxi),
      };
      
    case LOAD_MORE_CARS:
      return {
        ...state,
        allCars: [...state.allCars, ...action.payload],
        taxiCars: [...state.taxiCars, ...action.payload.filter((car)=>car.taxi)]
      };
    case CHANGE_LOADING:
      return { ...state,isLoading : action.payload}
  }
  return state;
};
