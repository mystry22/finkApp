import React,{createContext,useState,useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import axios from 'axios';

export const UserDetails = createContext();


export const UserDeatilsProvider = (props)=>{

    const [userDetails, setUserDetails] = useState('');
    
   

    

    const getUserDetails = async()=>{
    

        const token = await AsyncStorage.getItem('user');
        if(token){
            
        const authAxios = axios.create({
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        authAxios.post('https://finkappbackend.herokuapp.com/api/mobile/getMobileUser').
            then(res => {

                if (res.data == 'no user found') {
                    setUserDetails('Invalid user details');



                } else if (res.data == 'unauthorised') {
                    setUserDetails('unathorised');

                } else {
                    setUserDetails(res.data);
                    

                }


            });
        }else{

        }
}

    useEffect(()=>{
     getUserDetails();
     
    },[])
    
    return (

        <UserDetails.Provider value={[userDetails,setUserDetails]} >
            {props.children}
        </UserDetails.Provider>
    );
}
