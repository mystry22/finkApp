import React,{useContext} from 'react';
import {Drawer} from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons'; 
import {AuthContext} from '../AuthContext';


export default function drawerContentForSignedIn(props){

    const [token,setToken] = useContext(AuthContext);

    if(token){
        return(
            <View>
            <Drawer.Section>
                <Drawer.Item
                    icon={(color, size) =>(
                        <Icon 
                            name='home-outline'
                            size={25}
                            
                        />
    
                    )}
                    label='Home'
    
                    onPress={()=>{props.navigation.navigate('Home')}}
               />
    
                
    
                <Drawer.Item
                    icon={(color, size) =>(
                        <MaterialIcons 
                            name='payment'
                            size={25}
                            
                        />
    
                    )}
                    label='Payout'
    
                    onPress={()=>{props.navigation.navigate('Payout')}}
               />
               <Drawer.Item
                    icon={(color, size) =>(
                        <MaterialIcons 
                            name='track-changes'
                            size={25}
                            
                        />
    
                    )}
                    label='Change Plan'
    
                    onPress={()=>{props.navigation.navigate('Change Plan')}}
               />
               <Drawer.Item
                    icon={(color, size) =>(
                        <MaterialIcons 
                            name='face'
                            size={25}
                            
                        />
    
                    )}
                    label='Profile'
    
                    onPress={()=>{props.navigation.navigate('Profile')}}
               />
               <Drawer.Item
                    icon={(color, size) =>(
                        <MaterialIcons 
                            name='perm-contact-calendar'
                            size={25}
                            
                        />
    
                    )}
                    label='Contact'
    
                    onPress={()=>{props.navigation.navigate('Contact')}}
               />
    
            <Drawer.Item
                    icon={(color, size) =>(
                        <Icon 
                            name='exit-to-app'
                            size={25}
                            
                        />
    
                    )}
                    label='LogOut'
    
                    onPress={()=>{props.navigation.navigate('Logout')}}
               />
    
    
            </Drawer.Section>
    
            
            </View>
           
        )
    }else{
        return(
            <View style={{flex:1}}>
                <Drawer.Section>
                    <Drawer.Item
                        icon={({color, size}) =>(
                            <Icon 
                            name='login'
                            
                            size={size}
                            />
                        )}
    
                        label='Sign In'
    
                        onPress={()=>{props.navigation.navigate('Sign In')}}
                    />
                <Drawer.Item
                        icon={({color, size}) =>(
                            <Icon 
                            name='account-check-outline'
                        
                            size={size}
                            />
                        )}
    
                        label='Sign Up'
    
                        onPress={()=>{props.navigation.navigate('Sign Up')}}
                    />
    
                    <Drawer.Item
                        icon={({color, size}) =>(
                            <MaterialIcons 
                            name='keyboard-tab'
                            
                            size={size}
                            />
                        )}
    
                        label='About'
    
                        onPress={()=>{props.navigation.navigate('About')}}
                    />
    
                    <Drawer.Item
                        icon={({color, size}) =>(
                            <Icon 
                            name='email'
                            
                            size={size}
                            />
                        )}
    
                        label='Contact'
    
                        onPress={()=>{props.navigation.navigate('Contact')}}
                    />
                    
                </Drawer.Section>
            </View>
        )
    }

   

    
}