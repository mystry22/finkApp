import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView } from 'react-native';
import styles from './shared/globalStyles';

import DraweNavigation from './shared/DrawerMenuForSignedIn'



import { AuthContextProvider } from './AuthContext';
import { UserDeatilsProvider } from './UserDetailContext';


export default function App() {

  return (
    <AuthContextProvider>
      <UserDeatilsProvider>
        <SafeAreaView style={styles.safeAreaStyle}>


        <DraweNavigation />


        </SafeAreaView>
      </UserDeatilsProvider>
    </AuthContextProvider>


  );
}


