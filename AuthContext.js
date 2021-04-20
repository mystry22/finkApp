import React,{createContext,useState,useEffect} from 'react';
import {AsyncStorage} from 'react-native';


export const AuthContext = createContext();





export const AuthContextProvider = (props)=>{
    const [token,setToken] = useState('');
    

    const getUserToken = async()=>{
        
      const token = await AsyncStorage.getItem('user');
      if(token){
          setToken(token)
      }else{
          
      }
    }

    

    useEffect(()=>{
     
     getUserToken();
     
    },[])
    
    return (

        <AuthContext.Provider value={[token,setToken]} >
            {props.children}
        </AuthContext.Provider>
    );
}
