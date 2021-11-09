import axios from 'axios';
import { Dispatch } from 'react';




export interface UserErrorAction{
    readonly type: 'ON_USER_ERROR',
    payload: any
}



export interface UserLoginAction{
    readonly type: 'ON_USER_LOGIN',
    payload: string
}



const BASE_URL='http://localhost:5000/users'
export type UserAction =  UserErrorAction  | UserLoginAction;

export const OnUserSignup = (first_name: string ,  last_name: string , email: string, mobile_phone: Number ,password: string) => {
 
    return async ( dispatch: Dispatch<UserAction>) => {

        try {
             const response = await axios.post<string>('http://localhost:5000/users', {
                email,
                mobile_phone,
                password,
                first_name,
                last_name
            })

            console.log(response)

            if(!response){
                dispatch({
                    type: 'ON_USER_ERROR',
                    payload: 'Login Error'
                })
            }else{
                dispatch({
                    type: 'ON_USER_LOGIN',
                    payload: response.data
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'ON_USER_ERROR',
                payload: 'Login Error'
            })
        }
    }

}