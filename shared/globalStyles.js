import {Platform, StyleSheet,Dimensions } from 'react-native';

const width = Dimensions.width;

const styles = StyleSheet.create({
    welcomeContainer:{
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        borderColor: '#777',
        borderRadius: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        padding: 10,
        overflow: 'hidden'
        
    },
    container: {
        flex: 1,
        padding: 5,
    },
    boldText:{
        fontWeight: 'bold',
        paddingBottom: 20,
        alignSelf: 'center'
    },
    formText: {
        
        color: 'green',
        fontSize: 30
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 10,
        margin: 8,
        width: '88%',
        borderRadius: 5,
        color: '#778899'
        
    },
    input2: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 10,
        margin: 5,
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#fff',
        color: '#778899'
        
    },
    button: {
        backgroundColor: '#009387',
        width: '100%',
        borderRadius: 5,
        height: 45,
        padding: 10,
        margin: 10,
    },
    button2:{
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 5,
        height: 45,
        padding: 10,
        margin: 10,
    },
    loginText: {
    
        fontSize: 20,
        alignSelf: "center",
        color: '#fff'
        
    },
    loginText2:{
        
        fontSize: 20,
        alignSelf: "center",
        color: '#009387'
    },
    listText: {
        
        alignSelf: 'center'
        
    },
    listWrap:{
        backgroundColor: 'skyblue',
        height: 20,
        borderWidth: 1,
        margin: 5,
        borderRadius: 10
    },
    scrolView:{
        flex:1,
        height: 10
    },
    errorMsg:{
        paddingHorizontal: 10,
        color: 'red'
    },
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row'
    },
    headerText:{
        
        color: '#fff',
        fontSize: 20,
        letterSpacing: 1,
        alignSelf: 'center'
    },

    modal:{
        backgroundColor: '#fff',
        width: '90%',
        height: '90%',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center'

    },
    ModalHeaderWrapper:{
        backgroundColor: '#009387',
    },
    modalHeader:{
        
        alignSelf: 'center',
        fontSize: 30,
        color: 'white'
    },
    modalText: {
       
       fontSize: 20,
       color: 'coral',
       alignSelf: 'center'

    },
    menu:{
        
        color: '#fff'
    },
    rowFlex:{
        flexDirection: 'row'
    },
    textArea: {
        paddingLeft: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#777',
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    contactContainer: {
        alignContent: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    landingBoldText:{
        marginBottom: 5,
        fontSize: 30,
        letterSpacing: 1,
        color: '#778899'
    },
    landingSmallText:{
    
        fontSize: 12,
        letterSpacing: 1,
        color: '#778899',
        paddingHorizontal: 5,
        
    },
    image:{
        width: width,
        height: '100%',
        borderRadius: 5,
        
    },
    imageContainer:{
        width: '100%',
        height: '55%'
    },
    customWelcomHeader:{
        padding: 10,
        height: 25,
        backgroundColor: '#009387'

    },
    customHeaderText:{
        
        fontSize: 25,
        color: '#fff',
        marginBottom: 5,
    },
    cutomeHeadeSmallerText:{
        marginBottom: 5,
        marginTop: 5,
        fontSize: 15,
        color: '#fff'
    },
    loggoFrame:{
        width:'50%',
        height:'50%'
    },
    left:{
        letterSpacing: 1,
        marginRight:5
    },
    customePayoutText:{
        marginBottom: 5,
        marginTop: 5,
        fontSize: 15,
        color:'#333333'
    },
    justCenter:{
        alignItems: 'center'
    },
    imageprodContainer:{
       width: '100%',
       height: 150,
       marginBottom: 10
       

    },
    prodContainer:{
        flex:1,
        width: '100%',
        marginBottom: 10,
        paddingRight: 10
    },
    rowFlexn:{
        
        flexDirection: 'row',
        alignContent: 'flex-start'
    },
    prodDetailProdContainer:{
        width:'100%',
        marginBottom: 40
    },
    safeAreaStyle:{
        flex: 1,
        backgroundColor: '#009387',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    wrapUp:{
        paddingTop:40
    },
    imageIconContainer:{
        width:50,
        height: 50,
        marginBottom: 5,
        borderRadius: 5,
        alignSelf:'center'
    }


    

});



export default styles;