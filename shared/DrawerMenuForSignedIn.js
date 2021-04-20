import 'react-native-gesture-handler';
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../AuthContext';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationContentForSignedIn from './DrawerContentForSignedIn';
import NavigationContentForNotSignedIn from './DrawerContentForNotSignedIn';
//app components
import Welcome from '../screen/WelcomeHome';
import Payout from '../screen/Payout';
import Contact from '../screen/Contact';
import ChangePlan from '../screen/ChangePlan';
import PlanDetails from '../screen/PlanDetails';
import Profile from '../screen/Profile';
import About from '../screen/About';
import SignIn from '../screen/Home';
import Register from '../screen/Register';
import Loader from '../screen/Loader';

import Icon from 'react-native-vector-icons/Ionicons';

import axios from 'axios';
import { View, Text, Image, AsyncStorage, ActivityIndicator } from 'react-native';





//initializations

const welcomStack = createStackNavigator();
const PayOutStack = createStackNavigator();
const ContactStack = createStackNavigator();
const ChangePlanStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Drawer = createDrawerNavigator();

// not signed in  stack screen
const SignInStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const AboutStack = createStackNavigator();





//stack screen functions

const SignInStackScreen = ({ navigation }) => {

    const openDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <SignInStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',

            },
            headerTintColor: '#fff'
        }}>
            <SignInStack.Screen name="Sign In" component={SignIn} options={{
                title: 'Welcome',
                headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer}></Icon.Button>)
            }}></SignInStack.Screen>
            <SignInStack.Screen name="Home" component={Welcome} options={{
                title: 'Welcome',
                headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer}></Icon.Button>)
            }}></SignInStack.Screen>


        </SignInStack.Navigator>
    )
}
const SignUpStackScreen = ({ navigation }) => {
    const openDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <RegisterStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff'
        }} >
            <RegisterStack.Screen name='Sign Up' component={Register} options={{
                title: 'Sign Up',
                headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer}></Icon.Button>)
            }} />

            <RegisterStack.Screen name='Home' component={Welcome} options={{
                title: 'Welcome',
                headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer}></Icon.Button>)
            }} />
        </RegisterStack.Navigator>


    )
}

const AboutStackScreen = ({ navigation }) => {

    const openDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <AboutStack.Navigator initialRouteName='About' screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',

            },
            headerTintColor: '#fff'
        }}>
            <AboutStack.Screen name="About" component={About} options={{
                title: 'About Us',
                headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer}></Icon.Button>)
            }} />


        </AboutStack.Navigator>
    )
}
const WelcomeStackScreen = ({ navigation }) => {


    const openDrawer = () => {
        navigation.openDrawer();
    }



    return (

        <welcomStack.Navigator initialRouteName='Welcome' screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',

            },

            headerTintColor: '#fff'
        }} >
            <welcomStack.Screen name='Welcome' component={Welcome} options={{
                headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer} ></Icon.Button>)

            }} />

            <welcomStack.Screen name='Change Plan' component={ChangePlan} options={{
                title: 'Change Plan',

            }} />

            <welcomStack.Screen name='Plan Option' component={PlanDetails} options={{
                title: 'Plan Option',

            }} />
        </welcomStack.Navigator>

    )
}

const PayOutStackScreen = ({ navigation }) => {
    const openDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <PayOutStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff'
        }}>
            <PayOutStack.Screen name='Payout' component={Payout} options={{
                title: 'Payout',
                headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer} ></Icon.Button>)
            }} />
        </PayOutStack.Navigator>
    )
}

const logOut = ({ navigation }) => {
    const [token, setToken] = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const destroyToken = async () => {
        const authAxios = axios.create({
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        await authAxios.post('https://finkappbackend.herokuapp.com/api/mobile/signMeOut')
            .then(res => {
                if (res.data == 'signedOut') {
                    AsyncStorage.removeItem('user').then(result => {
                        setToken('');

                    });
                } else {
                    alert('Unable  to Sign Out at the moment');
                }
            });

    }

    useEffect(() => {
        destroyToken();
        setIsLoading(true);
    });

    return (
        <Loader />
    )


}

const changePlan = ({ navigation }) => {
    const openDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <ChangePlanStack.Navigator initialRouteName='Change Plan' screenOptions={{
            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff'
        }}>

            <ChangePlanStack.Screen name='Change Plan' component={ChangePlan} options={{
                title: 'Change Plan',
                headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer}></Icon.Button>)
            }} />
            <ChangePlanStack.Screen name='Plan Option' component={PlanDetails} options={{
                title: 'Plan Option'
            }} />

        </ChangePlanStack.Navigator>
    )
};

const profile = ({ navigation }) => {
    const openDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <ProfileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff'

        }}>
            <ProfileStack.Screen name='Profile' component={Profile} options={{
                title: 'Profile',
                headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer}></Icon.Button>)
            }} />

        </ProfileStack.Navigator>
    )
};

const contactStackScreen = ({ navigation }) => {
    const openDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <ContactStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',

            },
            headerTintColor: '#fff'
        }}>
            <ContactStack.Screen name='Contact' component={Contact} options={{
                title: 'Contact',
                headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer}></Icon.Button>)
            }} />
        </ContactStack.Navigator>
    )
};








export default function signedInNav({ navigation }) {
    const [token, setToken] = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);


    const checkToken = () => {

        setTimeout(() => {
            setIsLoading(false);

        }, 500)



    }

    useEffect(() => {
        checkToken();


    })

    if (isLoading) {
        return (<Loader />);
    }


    return (
        <NavigationContainer  >

            <Drawer.Navigator drawerContent={props => <NavigationContentForSignedIn {...props} />}>
                {token ? (
                    <React.Fragment>
                        <Drawer.Screen name='Home' component={WelcomeStackScreen} />
                        <Drawer.Screen name='Payout' component={PayOutStackScreen} />
                        <Drawer.Screen name='Change Plan' component={changePlan} />
                        <Drawer.Screen name='Profile' component={profile} />
                        <Drawer.Screen name='Contact' component={contactStackScreen} />
                        <Drawer.Screen name='Logout' component={logOut} />
                    </React.Fragment>
                ) : <React.Fragment>
                        <Drawer.Screen name='Sign In' component={SignInStackScreen} />
                        <Drawer.Screen name='Sign Up' component={SignUpStackScreen} />
                        <Drawer.Screen name='Contact' component={contactStackScreen} />
                        <Drawer.Screen name='About' component={AboutStackScreen} />
                    </React.Fragment>}



            </Drawer.Navigator>

        </NavigationContainer  >

    )
}
