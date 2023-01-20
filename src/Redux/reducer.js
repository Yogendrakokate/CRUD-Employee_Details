import * as types from "./actionTypes"


const initialState = {

  data: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
    const { payload, type } = action
    
    switch (type) {
        case types.GET_DATA_REQUEST: return { ...state, isLoading: true }
        case types.GET_DATA_SUCCESS: return { ...state, data: payload }
        case types.GET_DATA_FAILUER: return { ...state, isLoading: false, isError: true }
        case types.UPDATE_DATA_FAILUER: return { ...state, isLoading: true }
        case types.UPDATE_DATA_SUCCESS: let newemployee = state.data.map((item) =>
            item.id === payload.id ? payload : item);
            return { ...state, isLoading: false, data: newemployee }
        case types.UPDATE_DATA_REQUEST: return { ...state, isLoading: false, isError: true }
        case types.ADD_DATA_REQUEST: return { ...state, isLoading: true, isError: false }
        case types.ADD_DATA_SUCCESS: return { ...state, data: [...state.data, payload] }
        case types.ADD_DATA_FAILUER: return { ...state, isLoading: false, isError: true }
        
        case types.DELETE_DATA_REQUEST: return { ...state, isLoading: true, isError: false }
        case types.DELETE_DATA_SUCCESS:
        let filterdata= state.data.filter((item) => item.id !== payload)
            return { ...state, data:filterdata }
        case types.DELETE_DATA_FAILUER:return {...state,isLoading:false,isError:true}
        default :return state
    }
}

export {reducer}