import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, AsyncStorage, Image } from 'react-native';
import styles from '../shared/globalStyles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../AuthContext';
import Loader from '../screen/Loader';



const Home = ({ navigation }) => {
    const [token, setToken] = useState(AuthContext);
    const [isLoading, setIsloading] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isPassword, setIsPassword] = useState(false);
    const [backEndRes, setBackEndRes] = useState('');
    


    const routResgister = () => {
        navigation.navigate('Sign Up');
    }
    const validatePassword = (value) => {
        setPassword(value);

        if (password.length < 5) {
            setIsPassword(false);
            setPasswordError('Password must not be less than 6 chars long');
        } else {
            setIsPassword(true);
            setPasswordError('');
        }
    }

    updateMail = (value) => {
        setEmail(value);
    }


    const login = async () => {
        
                if (isPassword) {
                    setIsloading(true);
                    const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
                    if (pattern.test(email)) {

                        const formData = new FormData();
                        formData.append('email', email);
                        formData.append('password', password);
                         //axios.post('https://finkappbackend.herokuapp.com/api/mobile/mobileLogin', formData).
                         axios.post('https://localhost:5000/api/mobile/mobileLogin', formData).
                            then(res => {
                                if (res.data.text == 'unknown') {

                                    setIsloading(false);
                                    alert('Invalid user details');

                                } else {
                                    AsyncStorage.setItem('user', res.data.token).then(response => {
                                        setIsloading(false);
                                        setToken(res.data.token)
                                        navigation.navigate('Home');
                                    })
                                }
                            })


                    } else {
                        setIsloading(false);
                        alert('Invalid Email Address')

                    }

                } else {
                    setIsloading(false);
                    alert('Kindly Ensure All Fields Are Filled Correctly');

                }
            

    

    }




    if (isLoading) {
        return (<Loader />)
    }

    return (
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <View style={styles.imageIconContainer}>
                    <Image source={require('../assets/loggoIcon.png')} style={styles.image} />
                </View>
                <Text style={styles.boldText}>Kindly Sign In or Sign Up to Continue</Text>

                {isLoading ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size='large' color='green' />
                    </View>
                    : null}

                {backEndRes ? <Text style={styles.errorMsg}>{backEndRes}</Text> : null}
                <View style={styles.rowFlex}>
                    <Icon
                        name='email'
                        size={35}
                        color='#778899'
                        style={{ paddingTop: 15 }}

                    />
                    <TextInput placeholder='Please Enter Your Email' style={styles.input} onChangeText={(value) => updateMail(value)}

                    />
                </View>

                {emailError ? <Text style={styles.errorMsg}>{emailError}</Text> : null}
                <View style={styles.rowFlex}>
                    <Icon
                        name='account-outline'
                        size={35}
                        color='#778899'
                        style={{ paddingTop: 15 }}

                    />
                    <TextInput style={styles.input} secureTextEntry={true}
                        placeholder="Please Enter Password" onChangeText={(value) => validatePassword(value)} />


                </View>
                {passwordError ? <Text style={styles.errorMsg}>{passwordError}</Text> : null}
                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>



                <TouchableOpacity style={styles.button} onPress={routResgister}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>




            </View>
        </View>
    );

}


export default Home;
