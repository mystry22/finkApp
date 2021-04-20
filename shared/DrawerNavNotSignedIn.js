import 'react-native-gesture-handler';
import React,{useContext} from 'react';
import {AuthContext} from '../AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screen/Home';
import Register from '../screen/Register';
import About from '../screen/About';
import Contact from '../screen/Contact';
import DrawerContent from './DrawerContentForNotSignedIn';




export default Navigator=()=>{
    const token = useContext(AuthContext);
    const Drawer = createDrawerNavigator();

    const SignInStack = createStackNavigator();
    const RegisterStack = createStackNavigator();
    const AboutStack = createStackNavigator();
    const ContactStack = createStackNavigator();


    const SignInStackScreen = ({navigation})=>{

        const openDrawer =()=>{
            navigation.openDrawer();
        }
        return(
        <SignInStack.Navigator screenOptions={{
            headerStyle:{
               backgroundColor: '#009387',
               height: 120
           },
           headerTintColor: '#fff' }}> 
           <SignInStack.Screen name="Sign In" component={Home} options={{
               title: 'Welcome',
               headerLeft : ()=>(<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer}></Icon.Button>)
           }}></SignInStack.Screen>

        </SignInStack.Navigator>
        )
    }
    const SignUpStackScreen = ({navigation})=>{
        const openDrawer =()=>{
            navigation.openDrawer();
        }
        return(
        <RegisterStack.Navigator screenOptions={{ headerStyle:{
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff' }} >
            <RegisterStack.Screen name='Sign Up' component={Register} options={{
               title: 'Sign Up',
               headerLeft : ()=>(<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer}></Icon.Button>)
           }} />
        </RegisterStack.Navigator>
        )
    }

    const AboutStackScreen = ({navigation})=>{

        const openDrawer =()=>{
            navigation.openDrawer();
        }
        return(
        <AboutStack.Navigator initialRouteName='About' screenOptions={{
            headerStyle:{
               backgroundColor: '#009387',
            
           },
           headerTintColor: '#fff' }}> 
           <AboutStack.Screen name="About" component={About} options={{
               title: 'About Us',
               headerLeft : ()=>(<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer}></Icon.Button>)
           }}/>

        <AboutStack.Screen name="Sign Up" component={Register} options={{
               title: 'Sign Up',
              
           }}/>

        <AboutStack.Screen name="Sign In" component={Home} options={{
               title: 'Sign In',
               
           }}/>

        </AboutStack.Navigator>
        )
    }

    const ContactStackScreen = ({navigation})=>{
        const openDrawer =()=>{
            navigation.openDrawer();
        }
        return(
        <ContactStack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff'
        }} >
            <ContactStack.Screen name='Contact' component={Contact} options={{
                title: 'Contact',
                headerLeft: ()=>(<Icon.Button name='ios-menu' size={25} backgroundColor='#009387' onPress={openDrawer} ></Icon.Button>)
            }} />
        </ContactStack.Navigator>
        )
    }
    return(

    
        <NavigationContainer  >
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
                <Drawer.Screen name = 'Sign In' component={SignInStackScreen}/>
                <Drawer.Screen name = 'Sign Up' component={SignUpStackScreen}/>
                <Drawer.Screen name = 'About' component={AboutStackScreen}/>
                <Drawer.Screen name = 'Contact' component={ContactStackScreen} />
            </Drawer.Navigator>
        </NavigationContainer  >
    )
}
