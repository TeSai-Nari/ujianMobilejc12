import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const getData = () => {
    return async dispatch => {
        try {
            let res = await Axios.get('https://api.thecatapi.com/v1/images/search?limit=10',
                {headers:{
                    " X-Api-Key" : "5feff869-ac55-43fb-af69-05b5f35ef942"
                }}
            )
            
            dispatch({
                type: 'GET_DATA',
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const userLogin = (data) => {
    console.log(data)
    return async dispatch => {
        try {
            dispatch({
                type: 'USER_LOGIN',
                payload: data
            })
            await AsyncStorage.setItem('username', JSON.stringify(data))
        } catch (error) {
            
        }
    }
}

export const keepLogin = () => {
    return async dispatch => {
        try {
            let data = await AsyncStorage.getItem('username')
            data = JSON.parse(data)
            dispatch({
                type: 'USER_LOGIN',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const imageAction = (data) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'IMAGE',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const userLogout=()=>{
    return async (dispatch)=>{
        await AsyncStorage.removeItem('username')
        dispatch({type:'USER_LOGOUT'})
    }
}