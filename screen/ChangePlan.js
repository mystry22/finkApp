import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList,ScrollView } from 'react-native';
import styles from '../shared/globalStyles';





const ChangePlan = ({ navigation }) => {


    const studDescription = "Take advantage of our Sudents Plan investment package which gaurantees #5000 monthly ROI(return on investment) on an initial investment of #50,000 and cycle 3times in 90day, as we understand the everyday challenges facing the Nigerian students";
    const studProduct = "Students Plan";
    const studAmount = "50,000"




    const ecoDescription = "The Economy Plan gaurantees #10,000 monthly ROI(return on investment) on an initial investment of #100,000 and  cycle 3times in 90day";
    const ecoProduct = "Economy Plan";
    const ecoAmount = "100,000";



    const exeDescription = "The Execitive Plan gaurantees #15,000 monthly ROI(return on investment) on an initial investment of #150,000 and  cycle 3times in 90day";
    const exeProduct = "Executive Plan";
    const exeAmount = "150,000";






    const studImage = require('../assets/studentspic.png');
    const economyImage = require('../assets/economy.png');
    const executiveImage = require('../assets/executive2.png');

    const studImageString = 'student';
    const ecoImageString = 'economy';
    const exeImageString = 'executive';

    const ProductData = [
        {prodName: studProduct, description: studDescription,amount:studAmount,prodImage:studImage,id:1,imageString:studImageString},
        {prodName: ecoProduct, description: ecoDescription,amount:ecoAmount,prodImage:economyImage,id:2,imageString:ecoImageString},
        {prodName: exeProduct, description: exeDescription,amount:exeAmount,prodImage:executiveImage,id:3,imageString:exeImageString},
        
        
    ]





    return (

        <View style={styles.welcomeContainer}>



            
          <View style={styles.wrapUp}>

                <Text style={{ marginBottom: 5, fontSize: 15, letterSpacing: 1, color: '#778899' }}>We've got amazing Investment package to meet your finance and
                investment budget
                    </Text>


                

                    
                        <FlatList
                            keyExtractor={(item)=>item.id}
                            data={ProductData}
                            renderItem={({item})=>(
                                <View style={styles.prodContainer} >

                            <View style={styles.imageprodContainer}  >
                            <Text style={styles.landingBoldText}>{item.prodName} </Text>
                                <Image
                                    source={item.prodImage}
                                    style={styles.image}

                                />



                            </View>
                            <View style={{marginBottom:50}} />
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Plan Option',
                                { image: item.imageString, description: item.description, amount: item.amount, product: item.prodName })}>
                                    <Text style={styles.loginText}>Get Plan</Text>
                            </TouchableOpacity>
                            

                          

                                <Text style={{fontSize: 20,letterSpacing: 1,color: '#778899',alignSelf:'center'}}>#{item.amount}</Text>


                                


                            
                        </View>
                            )}
                        />
                   


                





            </View>

        </View>


    );

}

{/* <View style={styles.prodContainer} >

                        <TouchableOpacity style={styles.imageprodContainer} onPress={planOption}>
                            <Image source={require('../assets/economy.png')} style={styles.image}  />
                        </TouchableOpacity>
                        <View style={styles.rowFlexn}>
                            <View>
                                <Text style={styles.landingSmallText}>N 100,000</Text>
                            </View>
                            <View>
                                <Text style={styles.landingSmallText}>Economy Plan</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.prodContainer} >

                        <TouchableOpacity style={styles.imageprodContainer} onPress={planOption}>
                            <Image source={require('../assets/executive2.png')} style={styles.image}  />
                        </TouchableOpacity>
                        <View style={styles.rowFlexn}>
                            <View>
                                <Text style={styles.landingSmallText}>N 150,000</Text>
                            </View>
                            <View>
                                <Text style={styles.landingSmallText}>Executive Plan</Text>
                            </View>

                        </View>
                    </View> */}


export default ChangePlan;
