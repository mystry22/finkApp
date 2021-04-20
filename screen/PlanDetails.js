import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native';
import styles from '../shared/globalStyles';
import axios from 'axios';
import prodImages from '../shared/dynaImage';
import Loader from '../screen/Loader';
import { checkConnection } from "../shared/Connection";


export default function PlanDetails({ navigation, route }) {
  const [userDetails, setUserDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const getUserDetails = async () => {
    
        setIsLoading(true);
        AsyncStorage.getItem('user').then(tok=>{
        if (tok) {

          const authAxios = axios.create({
            headers: {
              authorization: `Bearer ${tok}`
            }
          });
          authAxios.post('https://finkappbackend.herokuapp.com/api/mobile/getMobileUser').
            then(res => {

              if (res.data == 'no user found') {
                setIsLoading(false);
                alert('No User Found')



              } else {
                setIsLoading(false);
                setUserDetails(res.data);


              }


            });
        } else {
          navigation.goBack();
        }
      });
      
  }

  useEffect(() => {
    getUserDetails();

  }, []);



  const imageDet = route.params.image;


  const sendRequest = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('email', userDetails.email);
    formData.append('first_name', userDetails.first_name);
    formData.append('plan', route.params.product);
    axios.post('https://finkappbackend.herokuapp.com/api/mobile/planRequest', formData)
      .then(res => {
        if (res.data == 'sent') {
          setIsLoading(false);
          alert('Your request has been sent kindly await as one of our team members will get back to you shortly');

        } else {
          setIsLoading(false);
          alert('Sorry we are unable to process your request at the moment')
        }
      })
  }

  if (isLoading) {
    return (<Loader />);
  }
  return (

    <View style={styles.welcomeContainer}>
      {isLoading ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
        : null}
      <Text style={{ marginBottom: 5, fontSize: 25, letterSpacing: 1, color: '#778899', alignSelf: 'center' }}>Welcome to Our {route.params.product} package</Text>
      <Text style={{ marginBottom: 5, fontSize: 15, letterSpacing: 1, color: '#778899' }}>{route.params.description}</Text>
      <View style={styles.prodDetailProdContainer}>
        <View style={styles.imageprodContainer}>
          <Image source={prodImages.myImage[imageDet]} style={{ width: '100%', height: 200 }} />
        </View>
        <View style={{ marginBottom: 50 }} />


        <Text style={{ fontSize: 20, letterSpacing: 1, color: '#778899', alignSelf: 'center' }}>{route.params.product}</Text>


        <TouchableOpacity style={styles.button} onPress={sendRequest}>
          <Text style={styles.loginText}>Get Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}