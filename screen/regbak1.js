import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, Picker, AsyncStorage } from 'react-native';
import styles from '../shared/globalStyles';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import Loader from '../screen/Loader';
import { AuthContext } from '../AuthContext';





const banks = [
    { name: "Select Bank", id: '0' },
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
export default function Register({ navigation }) {
    //initialise auth context
    const [token, setToken] = useContext(AuthContext);

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [bank, setBank] = useState('Selected Bank');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [amIConnected, setAmIConnected] = useState(false);

    const [isLoading, setIsLoading] = useState(false);


    const [isfirstName, setIsFirstname] = useState(false);
    const [islastName, setIsLastname] = useState(false);
    const [isaddress, setIsAddress] = useState(false);
    const [isphone, setIsPhone] = useState(false);
    const [ispassword, setIsPassword] = useState(false);
    const [isaccount, setIsAccount] = useState(false);


    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [accountNumberError, setAccountNumberError] = useState('');

    const checkFirstName = (value) => {

        setFirstname(value);

        if (firstName.length > 2) {
            setIsFirstname(true);
            setFirstNameError('');
        } else {
            setIsFirstname(false);
            setFirstNameError('First Name must not be less  than 4 chars long');
        }
    };

    const checkLastName = (value) => {

        setLastName(value);

        if (lastName.length > 2) {
            setIsLastname(true);
            setLastNameError('');
        } else {
            setIsLastname(false);
            setLastNameError('First Name must not be less  than 4 chars long');
        }
    }

    const checkAddress = (value) => {
        setAddress(value);

        if (address.length < 8) {
            setIsAddress(false);
            setAddressError('Please enter a valid address');
        } else {
            setIsAddress(true);
            setAddressError('');
        }
    }

    const checkPhone = (value) => {
        setPhone(value);

        if (isNaN(phone)) {
            setIsPhone(false);
            setPhoneError('Please Enter a valid phone number');


        } else {
            if (phone.length > 9) {
                setIsPhone(true);
                setPhoneError('');

            } else {
                setIsPhone(false);
                setPhoneError('Please Enter a valid phone number');

            }
        }
    }

    const validateEmail = (value) => {
        setEmail(value);

    }

    const checkPassword = (value) => {
        setPassword(value);

        if (password.length < 5) {
            setIsPassword(false);
            setPasswordError('Password must not be less than 6 chars long');
        } else {
            setIsPassword(true);
            setPasswordError('');
        }
    }

    const checkAccount = (value) => {
        setAccountNumber(value);


        if (isNaN(accountNumber)) {
            setIsAccount(false);
            setAccountNumberError('Please enter a valid Account Number');
        } else {
            if (accountNumber.length < 9) {
                setIsAccount(false);
                setAccountNumberError('Please enter a valid Account Number');
            } else {
                setIsAccount(true);
                setAccountNumberError('');
            }
        }
    }

    const checkBank = (value) => {
        setBank(value);

    }


    const register = async () => {
        
               // const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
                //if (pattern.test(email)) {
                   // if (isaccount && isaddress && isfirstName && islastName && isphone && ispassword) {
                       // setIsLoading(true);

                        const regDate = new Date();
                        const balance = 0;
                        const formData = new FormData();

                        formData.append('firstname',firstName);
                        formData.append('lastname',lastName);
                        formData.append('address',address);
                        formData.append('email',email);
                        formData.append('bank',bank);
                        formData.append('account_number',accountNumber);
                        formData.append('password',password);
                        formData.append('phone',phone);
                        formData.append('regDate',regDate);

                        //axios.post('https://finkappbackend.herokuapp.com/api/mobile/mobileRegister', formData).
                        try{
                            axios.post('http://localhost:5000/mobile/testT')
                            .then(resp =>{
                                console.log(resp.data);
                            });
                        }catch(err){
                            console.log(err);
                        }
                        

                

                    // } else {
                    //     setIsLoading(false);
                    //     alert('Kindly that all fields are properly filled');


                    // }
              //  } else {
              //      alert('Please Enter A Valid Email Address');
              //  }

            
    }



    if (isLoading) {
        return (<Loader />);
    }
    return (
        <ScrollView>
            <View style={styles.container} >
                <View style={styles.welcomeContainer}>

                    <Text style={{ marginBottom: 5, fontSize: 15, letterSpacing: 1, color: '#778899' }}>Please fill the Form Below. Kindly Note that customers details are confidential
            and will not be shared with a third party</Text>

                    <TextInput style={styles.input2} placeholder="First name" onChangeText={(value) => checkFirstName(value)} />
                    {firstNameError ? <Text style={styles.errorMsg}>{firstNameError}</Text> : null}

                    <TextInput style={styles.input2} placeholder="Last name" onChangeText={(value) => checkLastName(value)} />
                    {lastNameError ? <Text style={styles.errorMsg}>{lastNameError}</Text> : null}

                    <TextInput style={styles.input2} placeholder="Address" onChangeText={(value) => checkAddress(value)} />
                    {addressError ? <Text style={styles.errorMsg}>{addressError}</Text> : null}

                    <TextInput style={styles.input2} placeholder="Phone Number"
                        keyboardType='numeric'
                        onChangeText={(value) => checkPhone(value)} />
                    {phoneError ? <Text style={styles.errorMsg}>{phoneError}</Text> : null}

                    <TextInput style={styles.input2} placeholder="E-mail" onChangeText={(value) => validateEmail(value)} />


                    <TextInput style={styles.input2} placeholder="Password" secureTextEntry={true} onChangeText={(value) => checkPassword(value)} />
                    {passwordError ? <Text style={styles.errorMsg}>{passwordError}</Text> : null}

                    <TextInput style={styles.input2} placeholder="Account Number" keyboardType='numeric' onChangeText={(value) => checkAccount(value)} />
                    {accountNumberError ? <Text style={styles.errorMsg}>{accountNumberError}</Text> : null}

                    <Picker style={styles.input} onValueChange={(value) => checkBank(value)}>
                        {banks.map(bank => (
                            <Picker.Item key={bank.id} label={bank.name} value={bank.name} />
                        ))}

                    </Picker>

                    <TextInput style={styles.input2} value={bank} />







                    <TouchableOpacity style={styles.button} onPress={register}>
                        <Text style={styles.loginText} >Sign Up</Text>
                    </TouchableOpacity>



                </View>

            </View>
        </ScrollView>
    )

}


