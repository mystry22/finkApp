import React from 'react';
import {View,Text,Image,TouchableOpacity, SafeAreaView} from 'react-native';

import styles from '../shared/globalStyles';

export default  function About({navigation}){

    const signUp=()=>{
        navigation.navigate('Sign Up');
    }

    const signIn=()=>{
        navigation.navigate('Sign In');
    }
    
    return(
        <View style={styles.container}>
            
            <View style={styles.imageContainer}>
                <Image source={require('../assets/team.png')} style={styles.image}/>
            </View>
            <View style={{paddingHorizontal:5}}>
            <Text style={{marginTop:5, marginBottom: 5, fontSize: 20, letterSpacing: 1, color: '#778899' }}
            >We are a team of Professionals passionate about growth particularly finance through Forex.
            we carefully analyse signals and statistical data which enable us draw benchmarks and guides
            us in our decision taking, hence; taking minimal risk  so  as to ensure 100% profitability.
            we protect your interest just like the picture  above.
            
            
            </Text>
            </View>

           

            </View>
    );

}