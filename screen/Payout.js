import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity, ActivityIndicator, AsyncStorage, Image } from 'react-native';
import styles from '../shared/globalStyles';
import axios from 'axios';
import Loader from '../screen/Loader';


const contactOptions = [

    { option: 'PayOut', id: '1' },

];
export default function PayOut({ navigation }) {
    const [amIConnected, setAmIConnected] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isPlan, setIsPlan] = useState('');



    const [option, setOption] = useState('PayOut');

    const [msgError, setMsgError] = useState('');



    const [isMsg, setIsMsg] = useState(false);



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
                                setEmail(res.data.email);
                                setIsPlan(res.data.plan);

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


    const sendMail = () => {
        setIsLoading(true);
        if (isMsg && isPlan != 'None') {
            const formData = new FormData();
            formData.append('subject', option);
            formData.append('name', fullName);
            formData.append('email', email);
            formData.append('msg', msg);

            axios.post('https://finkappbackend.herokuapp.com/api/mobile/payOutRequest', formData)
                .then(res => {
                    if (res.data == 'sent') {
                        setIsLoading(false);
                        alert('Your request has been sent kindly await a response from our team');
                        navigation.navigate('Home');
                    } else {
                        setIsLoading(false);
                        alert(res.data);
                    }
                });
        } else {
            setIsLoading(false);
            alert('Sorry you cannot request for payout as you do not have an active plan');

        }
    }


    const updateMessage = (val) => {
        setMsg(val);
        if (msg.length > 3) {
            setMsgError('');
            setIsMsg(true);
        } else {
            setMsgError('Please Ensure You Enter a Valid Message');
            setIsMsg(false);
        }
    }



    const updateOption = (val) => {
        setOption(val);

    }

    if (isLoading) {
        return (<Loader />)
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

                <Text style={{ marginBottom: 5, fontSize: 15, letterSpacing: 1, color: '#778899' }}
                >Kindly NOTE that if you are requesting for PayOut you must have to reach at least 21 days investment period for that month so as to
                    enjoy the least 5% interest, and one can only request for PayOut once in an investment period (once in 90days)
             </Text>




                <Picker style={styles.input} onValueChange={(val) => updateOption(val)}>
                    {contactOptions.map(opt =>
                        (<Picker.Item key={opt.id} label={opt.option} value={opt.option} />)

                    )}
                </Picker>





                <TextInput value={fullName} style={{ borderWidth: 1, borderColor: '#777', padding: 10, margin: 8, width: '97%', borderRadius: 5, color: '#778899' }} />



                <TextInput value={email} style={{ borderWidth: 1, borderColor: '#777', padding: 10, margin: 8, width: '97%', borderRadius: 5, color: '#778899' }} />





                <TextInput placeholder='Reason for payout' numberOfLines={5} multiline={true} style={styles.textArea}
                    onChangeText={(val) => updateMessage(val)} />
                {msgError ? <Text style={styles.errorMsg}>{msgError}</Text> : null}

                <TouchableOpacity style={styles.button} onPress={sendMail}>
                    <Text style={styles.loginText}>Request Payout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}