import React from 'react';
import {Drawer, Text} from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function draweContent(props){
    return(
        <View style={{flex:1}}>
            <Drawer.Section>
                <Drawer.Item
                    icon={({color, size}) =>(
                        <Icon 
                        name='login'
                        color={color}
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
                        color={color}
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
                        color={color}
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
                        color={color}
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