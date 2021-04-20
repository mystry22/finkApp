import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity, ActivityIndicator, Image, AsyncStorage } from 'react-native';
import styles from '../shared/globalStyles';
import axios from 'axios';
import { UserDetails } from '../UserDetailContext';
import Loader from '../screen/Loader';
import { checkConnection } from "../shared/Connection";

const banks = [
    { name: "Select Bank", id: '54' },
    { name: "Access Bank", id: '1' },
    { name: "Citi Bank", id: '2' },
    { name: "Diamond Bank", id: '3' },
    { name: "Ecobank", id: '4' },
    { name: "Fidelity Bank", id: '5' },
    { name: "First Bank", id: '6' },
    { name: "First City Monument Bank (FCMB)", id: '7' },
    { name: "Guaranty Trust Bank (GTB)", id: '8' },
    { name: "Heritage Bank", id: '9' },
    { name: "Keystone Bank", id: '10' },
    { name: "Polaris Bank", id: '11' },
    { name: "Providus Bank", id: '12' },
    { name: "Stanbic IBTC Bank", id: '13' },
    { name: "Standard Chartered Bank", id: '14' },
    { name: "Sterling Bank", id: '15' },
    { name: "Suntrust Bank", id: '16' },
    { name: "Union Bank", id: '17' },
    { name: "Bank for Africa (UBA)", id: '18' },
    { name: "Unity Bank", id: '19' },
    { name: "Wema Bank", id: '20' },
    { name: "Zenith Bank", id: '21' },
];
export default function Contact({ navigation }) {
    const [userDetails, setUserDetails] = useState('');
    const [fullName, setFullName] = useState('');
    



    const [isLoading, setIsLoading] = useState(false);
    const [accountError, setAccountError] = useState('');

    const [accountNumber, setAccountNumber] = useState('');
    const [email, setEmail] = useState('');
    const [bank, setBank] = useState('');

    const [isAccountNumber, setIsAccountNumber] = useState(false);

    const checkActNumber = (val) => {
        setAccountNumber(val);

        if (isNaN(accountNumber)) {
            setIsAccountNumber(false);
            setAccountError('Please enter a valid Account Number');
        } else {
            if (accountNumber.length < 9) {
                setIsAccountNumber(false);
                setAccountError('Please enter a valid Account Number');
            } else {
                setIsAccountNumber(true);
                setAccountError('');
            }
        }
    }

    const checkBank = (val) => {
        setBank(val);
    }

    const updateProfile = () => {
        
                setIsLoading(true);
                if (isAccountNumber && bank != 'Select Bank') {
                    const formData = new FormData();
                    formData.append('account_number', accountNumber);
                    formData.append('bank', bank);
                    formData.append('email', email);


                    axios.post('https://finkappbackend.herokuapp.com/api/mobile/updateProfile', formData)
                        .then(res => {
                            if (res.data == 'updated') {
                                setIsLoading(false);
                                alert('Update Successful');
                                navigation.navigate('Home');
                            } else {
                                setIsLoading(false);
                                alert(res.data);
                            }
                        });
                } else {
                    setIsLoading(false);
                    alert('Kindly Ensure All Fields are Filled Properly');
                }

            
    }

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
                            setFullName(res.data.first_name + ' ' + res.data.last_name);
                            setAccountNumber(res.data.account_number);
                            setIsAccountNumber(true);
                            setBank(res.data.bank);
                            setEmail(res.data.email);


                        }


                    });
            } else {
                navigation.goBack();
            }
        });
    
    }




    useEffect(() => {
        getUserDetails();


    }, [])

    if (isLoading) {
        return (<Loader />);
    }

    return (

        <View style={styles.welcomeContainer}>
            <View style={styles.contactContainer}>

                <View style={styles.imageIconContainer}>
                    <Image
                        source={require('../assets/loggoIcon.png')}
                        style={styles.image}
                    />
                </View>

                <Text style={{ marginBottom: 5, fontSize: 30, letterSpacing: 1, color: '#778899', alignSelf: 'center' }}
                >Edit Profile</Text>

                <Text style={{ fontSize: 15, letterSpacing: 1, color: '#778899', paddingLeft: 10 }}>Account Name</Text>
                <TextInput value={fullName} style={styles.input2} />


                <Text style={{ fontSize: 15, letterSpacing: 1, color: '#778899', paddingLeft: 10 }} >Account Number</Text>

                <TextInput value={accountNumber} style={styles.input2} onChangeText={(val) => checkActNumber(val)} keyboardType='numeric' />

                {accountError ? <Text style={styles.errorMsg}>{accountError}</Text> : null}


                <Text style={{ fontSize: 15, letterSpacing: 1, color: '#778899', paddingLeft: 10 }}>User Bank</Text>

                <TextInput value={bank} style={styles.input2} />


                <Picker style={styles.input} onValueChange={(value) => checkBank(value)}>
                    {banks.map(bank => (
                        <Picker.Item key={Math.random()} label={bank.name} value={bank.name} />
                    ))}

                </Picker>







                <TouchableOpacity style={styles.button} onPress={updateProfile}>
                    <Text style={styles.loginText}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}