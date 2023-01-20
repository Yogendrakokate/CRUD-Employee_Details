import * as types from "./actionTypes";
import axios from "axios";

const getemployee = (params) => (dispatch) => {
 dispatch({ type: types.GET_DATA_REQUEST });

 return axios
  .get(`https://json-server-employee-crud.vercel.app/employee`, params)
  .then((r) => {
    dispatch({ type: types.GET_DATA_SUCCESS, payload: r.data });
    console.log(r,"rrr")
  })
  .catch((e) => {
   dispatch({ type: types.GET_DATA_FAILUER });
  });
};


const addemployee = (payload) => (dispatch) => {
 dispatch({ type: types.ADD_DATA_REQUEST });
 return axios
  .post(`https://json-server-employee-crud.vercel.app/employee`, payload)
  .then((r) => {
   dispatch({ type: types.ADD_DATA_SUCCESS, payload: r.data });
  })
  .catch((e) => {
   dispatch({ type: types.ADD_DATA_FAILUER });
  });
};

const updateemployee = (id, payload) => (dispatch) => {
 dispatch({ type: types.UPDATE_DATA_REQUEST });
 return axios
  .patch(`https://json-server-employee-crud.vercel.app/employee/${id}`, payload)
  .then((r) => {
   dispatch({ type: types.UPDATE_DATA_SUCCESS, payload: r.data });
  })
  .catch((e) => {
   dispatch({ type: types.UPDATE_DATA_FAILUER });
  });
};

const deleteemployee = (id) => (dispatch) => {
 dispatch({ type: types.DELETE_DATA_REQUEST });
 return axios
  .delete(`https://json-server-employee-crud.vercel.app/employee/${id}`)
  .then((r) => {
   dispatch({ type: types.DELETE_DATA_SUCCESS, payload: id });
  })
  .catch((e) => {
   dispatch({ type: types.DELETE_DATA_FAILUER });
  });
};

export {
 deleteemployee,
 getemployee,
 addemployee,
 updateemployee,
};
