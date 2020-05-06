import axios from "axios";
import { url as baseUrl } from "../api";
import * as ACTION_TYPES from "./types";
import { toast } from "react-toastify";


/**
 * @Actions
 * CheckIn CRUD OPERATIONS
 * returns API response from server
 * =================================
 * fetchAll()
 * fetchById()
 * create()
 * update()
 * Delete()
 */

export const fetchAllFHealthTips = (onSuccess, onError) => dispatch => {

  axios
    .get(`${baseUrl}healthtips`)
    .then(response => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_HEALTHTIPS,
        payload: response.data
      })
      console.log(response)
      onSuccess();
    })
    .catch(error => {
      onError();
      console.log(error)
    });
};
export const fetchAllHealthTipsType = (onSuccess, onError) => dispatch => {

    axios
      .get(`${baseUrl}healthtiptypes`)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.FETCH_ALL_HEALTHTIPSTYPE,
          payload: response.data
        })
        console.log(response)
        onSuccess();
      })
      .catch(error => {
        onError();
        console.log(error)
      });
  };
export const createHealthType = (data,onSuccess, onError ) => dispatch => {
      
    axios
      .post(`${baseUrl}healthtiptypes`, data)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.CREATE_HEALTH_TYPE,
          payload: response.data
        });
        onSuccess()
        toast.success("Health Tip Type is added successfully!");
      })
      .catch(error =>{       
        onError()
        toast.error("Something went wrong, please try again");
        
      });
    
  };
  export const createHealthTips = (data,onSuccess, onError ) => dispatch => {
      console.log(data)
    axios
      .post(`${baseUrl}healthtips`, data)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.CREATE_HEALTH_TIPS,
          payload: response.data
        });
        onSuccess()
        toast.success("Health Tip Type is added successfully!");
      })
      .catch(error =>{       
        onError()
        toast.error("Something went wrong, please try again");
        console.log(error)
      });
    
  };
  export const updateHealthTipsType = (data,id,onSuccess, onError ) => dispatch => {
    console.log(data)
  axios
    .put(`${baseUrl}healthtiptype/${id}`, data)
    .then(response => {
      dispatch({
        type: ACTION_TYPES.UPDATE_HEALTH_TIPS_TYPE,
        payload: response.data
      });
      onSuccess()
      toast.success("Health Tip Type is added successfully!");
    })
    .catch(error =>{       
      onError()
      toast.error("Something went wrong, please try again");
      console.log(error)
    });
  
};
export const updateHealthTips = (data,id,onSuccess, onError ) => dispatch => {
    console.log(data)
  axios
    .put(`${baseUrl}healthtip/${id}`, data)
    .then(response => {
      dispatch({
        type: ACTION_TYPES.UPDATE_HEALTH_TIPS_TYPE,
        payload: response.data
      });
      onSuccess()
      toast.success("Health Tip Type is added successfully!");
    })
    .catch(error =>{       
      onError()
      toast.error("Something went wrong, please try again");
      console.log(error)
    });
  
};
  export const deleteHealthTips = (id, msg) => dispatch => {
    console.log(id)
  axios
    .delete(`${baseUrl}healthtip/${id}`)
    .then(response => {
      dispatch({
        type: ACTION_TYPES.DELETE_HEALTH_TIPS,
        payload: response.data
      });
      toast.success("Health Tip deleted successfully!");
      msg()
    })
    .catch(error =>{       
      toast.error("Something went wrong, please try again");
      console.log(error)
      msg();
    });
  
};
export const deleteHealthTipsType = (id, msg) => dispatch => {
    console.log(id)
  axios
    .delete(`${baseUrl}healthtiptype/${id}`)
    .then(response => {
      dispatch({
        type: ACTION_TYPES.DELETE_HEALTH_TIPS,
        payload: response.data
      });
      toast.success("Health Tip Type deleted successfully!");
      msg()
    })
    .catch(error =>{       
      toast.error("Something went wrong, please try again");
      console.log(error)
      msg();
    });
  
};