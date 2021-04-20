import React from 'react';
import { Modal, ActivityIndicator, View, StyleSheet, Text } from 'react-native';

const Loader = () => {

    return (
        <Modal transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalInner}>
                    <View style={styles.sideContents}>
                        <ActivityIndicator size={50} color="green" />
                        <Text style={{color:'white', fontSize:30}}>  Please Wait! </Text>
                    </View>

                </View>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 100
    },
    modalInner: {
        alignSelf:'center',
        paddingVertical: 20,
        paddingHorizontal:20,
        backgroundColor: '#2f4f4f',
        width: 300,
        height: 100,
        borderRadius:5

    },
    sideContents: {
        paddingTop:10,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default Loader;
