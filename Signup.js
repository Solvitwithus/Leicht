import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
const Signup = () => {

    const [username,setUsename] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [pwd,setPwd] = useState('');
    const[confpwd,setConfpwd] = useState('');
    const handleSignup =()=>{
        Alert.alert('Ohhps!','The server is currently down please try later')
    }
    const handleusername = (text) => {
        setUsename(text);
    }
    const handleemail = (text) => {
        setEmail(text);
    }
    const handlephone = (text) => {
        setPhone(text);
    }
    const handlepwd = (text) => {
        setPwd(text);
    }
    const handlepwdChange = (text) => {
        setConfpwd(text);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Create Account!</Text>
            <View style={styles.background}>
                <View style={{backgroundColor:'orange',height:'5%',borderTopLeftRadius:20,borderTopRightRadius:20}}><Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'#ffffff'}}>Signup Page</Text></View>
                <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                   <TextInput placeholder='User name!' placeholderTextColor={'#e89123'} style={styles.input} onChangeText={handleusername}/>
                    <Text style={{paddingRight:30,paddingTop:25}}><Icon name="user" color="#e89123" size={28}/></Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                   <TextInput placeholder='Email' placeholderTextColor={'#e89123'} style={styles.input} onChangeText={handleemail}/>
                    <Text style={{paddingRight:30,paddingTop:25}}><Icon name="envelope-o" color="#e89123" size={28}/></Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                   <TextInput placeholder='Phone' placeholderTextColor={'#ffffff'} style={styles.inputi} onChangeText={handlephone}/>
                    <Text style={{paddingRight:30,paddingTop:25}}><Icon name="phone" color="#ffffff" size={28}/></Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                   <TextInput placeholder='Password' placeholderTextColor={'#ffffff'} style={styles.inputi} onChangeText={handlepwd}/>
                    <Text style={{paddingRight:30,paddingTop:25}}><Icon name="key" color="#ffffff" size={28}/></Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                   <TextInput placeholder='Confirm Password' placeholderTextColor={'#ffffff'} style={styles.inputi} onChangeText={handlepwdChange}/>
                    <Text style={{paddingRight:30,paddingTop:25}}><Icon name="key" color="#ffffff" size={28}/></Text>
                </View>
                <TouchableOpacity onPress={handleSignup} style={styles.lgin}>
                    <Text style={styles.logtext}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#21222d'
    },
    header:{
        color:'#e69023',
        alignSelf:'center',
        marginTop:'25%',
        fontSize:30,

    },
    background:{
        height:'75%',
        width:'80%',
        backgroundColor:'#222222',
        borderRadius:20,
        alignSelf:'center',
        marginTop:'10%'
    },
    input: {
        borderBottomColor: '#e69023',
        borderWidth: 1,
        width: '90%',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginHorizontal: 20,
        marginTop: 20,
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
      },
      inputi: {
        borderBottomColor: '#ffffff',
        borderWidth: 1,
        width: '90%',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginHorizontal: 20,
        marginTop: 20,
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
      },
      lgin: {
        backgroundColor: '#e69023',
        width: '50%',
        height: '5%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'center',
        marginHorizontal:'25%',
        marginTop:'15%'
      },
      logtext: {
        color: '#ffffff',
        fontSize: 19,
        
      },
      
})
export default Signup;