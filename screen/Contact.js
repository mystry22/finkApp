import React,{useState}from 'react';
import {View,Text, Picker,TextInput,TouchableOpacity,ActivityIndicator,Image} from 'react-native';
import styles from '../shared/globalStyles';
import axios from 'axios';

const contactOptions = [
    
    {option: 'Select Option', id: '0'},
    {option: 'Enquiry', id: '1'},
    {option: 'Complain', id: '2'},
    {option: 'Suggestion', id: '3'},
    {option: 'Others', id: '4'}
];
export default  function Contact({navigation}){
    const[isLoading,setIsloading] = useState(false);

    const [option,setOption] = useState('Enquiry');
    const [name,setName] = useState('');
    const [msg,setMsg] = useState('');
    const [email,setEmail] = useState('');

    const [genError,setGenError] = useState('');

    const [emailError,setEmailError] = useState('');
    const [nameError,setNameError] = useState('');
    const [msgError, setMsgError] = useState('');
    

    const [isEmail,setIsEmail] = useState(false);
    const [isName,setIsName] = useState(false);
    const [isMsg,setIsMsg] = useState(false);
    
       
    

    const sendMail = async()=>{
        
            setIsloading(true);
            if(isEmail && isName && isMsg){
                const formData = new FormData();
                formData.append('subject',option);
                formData.append('name',name);
                formData.append('email',email);
                formData.append('msg',msg);
                axios.post('https://finkappbackend.herokuapp.com/api/mobile/contact',formData)
                //axios.post('http://localhost:5000/api/mobile/contact',formData)
                .then(res => {
                    if(res.data == 'sent'){
                        setIsloading(false);
                        alert('Your message has been sent kindly await a response from our team');
                        navigation.navigate('Home');
                    }else{
                        setIsloading(false);
                        alert(res.data);
                    }
                });
            }else{
                setGenError('Kindly Ensure All Fields are Filled Properly');
            }
        
        

    }
    const updateName=(val)=>{
        setName(val);

        if(name.length > 2){
            setNameError('');
            setIsName(true);
        }else{
            setNameError('Name must not be less  than 4 chars long');
            setIsName(false);
        }
    }

    const updateMessage =(val)=>{
        setMsg(val);
        if(msg.length > 3){
            setMsgError('');
            setIsMsg(true);
        }else{
            setMsgError('Please Ensure You Enter a Valid Message');
            setIsMsg(false);
        }
    }

    const updateEmail=(val)=>{
        setEmail(val);
        const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
        if(pattern.test(email)){
            setIsEmail(true);
            setEmailError('')
            
            
        }else{
            setIsEmail(false);
            setEmailError('Please Enter a valid email address');
                       
        }
    }

    const updateOption =(val)=>{
        setOption(val);

    }
    

    


    return(
      
        <View style={styles.welcomeContainer}>
          <View style={styles.contactContainer}>
                
              <View style={styles.imageIconContainer}>
                    <Image
                        source={require('../assets/loggoIcon.png')}
                        style={styles.image}
                    />
                </View>

            <Text style={styles.boldText}
            >Enjoy 24/7 Customer Support</Text>

            <Text style={{ marginBottom: 5, fontSize: 15, letterSpacing: 1, color: '#778899' }}
            >You can reach us on 08063225408 or you can just send us a mail by filling the form below</Text>

            
                  <Text style={{ fontSize: 15, letterSpacing: 1, color: '#778899' }}>Subject: </Text> 
                    
                    <Picker  style={styles.input} onValueChange={(val)=> updateOption(val)}>
                        {contactOptions.map(opt =>
                        (<Picker.Item key={opt.id} label={opt.option} value={opt.option}/>)

                        )}
                    </Picker>
                   
             

               
                    <TextInput style={styles.input2} value={option} />
                    
                    <TextInput placeholder='Please Enter Your Name' style={styles.input2} onChangeText={(val)=>updateName(val)} />
                        {nameError ? <Text style={styles.errorMsg}>{nameError}</Text> : null}

                   
                    <TextInput placeholder='Please Enter Your Email Address' style={styles.input2} onChangeText={(val)=>updateEmail(val)} />
                        {emailError ? <Text style={styles.errorMsg}>{emailError}</Text> : null }
           

              
                 
                    <TextInput placeholder='Message' numberOfLines={5} multiline={true} style={styles.textArea} 
                      onChangeText={(val)=>updateMessage(val)}/>
                      {msgError ? <Text style={styles.errorMsg}>{msgError}</Text> : null }
                
                    <TouchableOpacity style={styles.button} onPress={sendMail}>
                         <Text style={styles.loginText}>Send</Text>
                     </TouchableOpacity>
              </View>
            </View>
    );

}