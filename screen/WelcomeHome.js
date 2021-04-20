import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from '../shared/globalStyles';
import { UserDetails } from '../UserDetailContext';
import { AuthContext } from '../AuthContext';
import Loader from '../screen/Loader';
import axios from 'axios';


export default function DefaultHome({ navigation }) {
    const [userDetails, setUserDetails] = useState('');
    const [token, setToken] = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const getUserDetails = async () => {
                setIsLoading(true);
              const tok = await AsyncStorage.getItem('user');
                    if(tok){
                        const authAxios = axios.create({
                            headers: {
                            authorization: `Bearer ${tok}`
                            }
                        });

                        authAxios.post('https://finkappbackend.herokuapp.com/api/mobile/getMobileUser').then(res =>{
                            if (res.data == 'no user found') {
                                setIsLoading(false);
                                alert('No User Found');
                            } else {
                        
                                setIsLoading(false);
                                setUserDetails(res.data);
                            }

                        });
                    }else{
                        navigation.goBack();
                    }
                
            
           
    }
    const refreshScreen = () => {
        AsyncStorage.getItem('user').then(tok => {
            setToken(tok);
        })



    }

    const checkUserData = () => {
        // if(!userDetails){
        //     setIsLoading(true)
        // }else{
        //     setIsLoading(false)
        // }



    }
    useEffect(() => {
        //checkUserData()
        // setLoginTimeOut();
        refreshScreen();
        getUserDetails();
    }, [token])


    const changePlan = () => {
        navigation.navigate('Change Plan');

    }

    if (isLoading) {
        return (<Loader />);
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#009387', paddingHorizontal: 5 }}>
                <Text style={styles.customHeaderText}>Hi {userDetails.first_name}</Text>
                <Text style={styles.cutomeHeadeSmallerText}>Maturity: {userDetails.maturity}</Text>
                <Text style={styles.cutomeHeadeSmallerText}>Plan: {userDetails.plan}</Text>

            </View>
            <View style={styles.container}>


                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/happy.png')}
                        style={styles.image}

                    />
                </View>

                <View style={styles.welcomeContainer}>
                    <Text style={styles.landingBoldText}>Let your money work for you while you do absolutely nothing</Text>
                    <Text style={styles.landingSmallText}>Enjoy 10% monthly return on your investment</Text>

                    <TouchableOpacity style={styles.button} onPress={changePlan}>
                        <Text style={styles.loginText}>Get Started</Text>
                    </TouchableOpacity>



                </View>
            </View>
        </View>
    );







}