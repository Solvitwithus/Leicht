import React,{useState} from 'react';
import {View, Text, Linking,FlatList ,TouchableOpacity, Image, StyleSheet,StatusBar} from 'react-native';
import data from './data.json';
import data1 from './data1.json';
import data2 from './data2.json'
const Main = () => {

  const handlePress = (id) => {
    if(id==0){
      const url = 'https://www.javatpoint.com/';
      Alert.alert('welcome',"Welcome to javatpoint!");
      Linking.openURL(url)
    }
    else if(id==1){
      const url = 'https://poe.com/ChatGPT';
      Alert.alert('welcome',"Welcome to poeGPT!");
      Linking.openURL(url)
    }
    else if(id==2){
      const url = 'https://react.dev/';
      Alert.alert('welcome',"Welcome to react documentation site!");
      Linking.openURL(url)
    }
    else if(id==3){
      const url = 'https://www.bing.com/search?q=react+native+doc&cvid=cf9df445a6fc4f2ba6b395fad0eba0a2&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARAjGCcyBggCEAAYQDIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQABhAMgYIBxBFGDwyBggIEEUYPNIBCDI3NDlqMGo0qAIAsAIA&FORM=ANAB01&PC=U531';
      Alert.alert('welcome',"Welcome to react-native documentation site!");
      Linking.openURL(url)
    }
    else if(id==4){
      const url = 'https://www.geeksforgeeks.org/';
      Alert.alert('welcome',"Welcome to geeksforgeeks!");
      Linking.openURL(url)
    }
    else if(id==5){
      const url = 'https://www.sololearn.com/en/profile/29599635';
      Alert.alert('welcome',"Welcome to sololearn!");
      Linking.openURL(url)
    }
    else if(id==6) {
      const url = 'https://dribbble.com/following';
      Alert.alert('welcome',"Welcome to Dribbble!");
      Linking.openURL(url)
    }
    else if(id==7) {
      const url = 'https://www.javatpoint.com/';
      Alert.alert('welcome',"Welcome to Github!");
      Linking.openURL(url)
    }
  
  };
  const handlePress2 = (id) => {
    if(id==0){
      const url = 'https://www.javatpoint.com/';
      Alert.alert('welcome',"Welcome to youtube!");
      Linking.openURL(url)
    }
    else if(id==1){
      const url = 'https://twitter.com/home';
      Alert.alert('welcome',"Welcome to twitter!");
      Linking.openURL(url)
    }
    else if(id==2){
      const url = 'https://web.facebook.com/';
      Alert.alert('welcome',"Welcome to facebook!");
      Linking.openURL(url)
    }
    else if(id==3){
      const url = 'https://www.instagram.com/';
      Alert.alert('welcome',"Welcome to instagram!");
      Linking.openURL(url)
    }
    else if(id==4){
      const url = 'https://www.pinterest.com/';
      Alert.alert('welcome',"Welcome to pinterest!");
      Linking.openURL(url)
    }
    else if(id==5){
      const url = 'https://open.spotify.com/?flow_ctx=dda1d606-b983-453f-98fa-c5c8059d372f%3A1715899493&creation_point=https%3A%2F%2Fopen.spotify.com%2F%3Fsp_cid%3D2fc66c08ddd78cb9ddfa45c601345dff';
      Alert.alert('welcome',"Welcome to spotify!");
      Linking.openURL(url)
    }
    else if(id==6) {
      const url = 'https://web.telegram.org/k/';
      Alert.alert('welcome',"Welcome to telegram!");
      Linking.openURL(url)
    }
  
  
  };
  const handlePress3 = (id) => {
    if(id==0){
      const url = 'https://assistant.google.com/';
      Alert.alert('welcome',"Welcome to assist!");
      Linking.openURL(url)
    }
    else if(id==1){
      const url = 'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit';
      Alert.alert('welcome',"Welcome to linkedin!");
      Linking.openURL(url)
    }
    else if(id==2){
      const url = 'https://drive.google.com/drive/home';
      Alert.alert('welcome',"Welcome to drive!");
      Linking.openURL(url)
    }
    else if(id==3){
      const url = 'https://contacts.google.com/';
      Alert.alert('welcome',"Welcome to photos!");
      Linking.openURL(url)
    }
    else if(id==4){
      const url = 'https://mail.google.com/mail/u/0/?pli=1#inbox';
      Alert.alert('welcome',"Welcome to email!");
      Linking.openURL(url)
    }
    else if(id==5){
      const url = 'https://www.google.com/maps';
      Alert.alert('welcome',"Welcome to maps!");
      Linking.openURL(url)
    }
    else if(id==6) {
      const url = 'https://www.google.com/';
      Alert.alert('welcome',"Welcome to chrome!");
      Linking.openURL(url)
    }
  
  
  };
const handleReadClick = () => {
  Alert.alert('hello',"These are the online learning platforms!");
}
const handleEntClick = () => {
  Alert.alert('hello',"These are the entertainment platforms!");
}
const handleClick = () => {
  Alert.alert('hello',"These are the other platforms!");
}
  return(
   <>
   <View style={styles.container}>
    <StatusBar backgroundColor={'#333333'}/>
    <Text style={styles.header}>Online sources</Text>
   <TouchableOpacity onPress={handleReadClick}><Text style={styles.subhead}>Online Reading Sites</Text></TouchableOpacity>
    <FlatList data={data}
    horizontal={true}
    renderItem={({item})=>(
      
       <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.background}>
         { <View key={item.id} style={styles.title}>
          <Text style={styles.title}>{item.title} </Text>
          <Image source = {{uri:item.image}} style={styles.images} />
         </View> }

       </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id}
  
    />


   </View >
  <View style={styles.cont}>
  <TouchableOpacity onPress={handleEntClick}><Text style={styles.subhead}>Entertainment</Text></TouchableOpacity>
  
  
  <FlatList data={data1}
    horizontal={true}
    renderItem={({item})=>(
  <TouchableOpacity onPress={() => handlePress2(item.id)} style={styles.background}>
         { <View key={item.id} style={styles.title}>
          <Text style={styles.title}>{item.title} </Text>
          <Image source = {{uri:item.image}} style={styles.images} />
         </View> }

       </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id}
  
    />
  </View>

  <View style={styles.cont1}>
  <TouchableOpacity onPress={handleClick}><Text style={styles.subhead}>Others</Text></TouchableOpacity>
  
  
  <FlatList data={data2}
    horizontal={true}
    renderItem={({item})=>(
  <TouchableOpacity onPress={() => handlePress3(item.id)} style={styles.background}>
         { <View key={item.id} style={styles.title}>
          <Text style={styles.title}>{item.title} </Text>
          <Image source = {{uri:item.image}} style={styles.images} />
         </View> }

       </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id}
  
    />
  </View>
  </>
  )
}

export default Main;
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#eeeeee',
    flex:0.33
  },
  title:{
paddingBottom:10,
fontWeight:'bold',
fontSize:19,
paddingTop:8,
paddingLeft:5,
color:'black',
textAlign:'center'
  },
  background:{
   backgroundColor:'#dddddd',
   margin:3,
   height:'94%',
   width:155,
borderRadius:10,
borderWidth:1,
borderColor:'#aaaaaa'

  },
  images:{
height:'71%',
width:'91%',
padding:10,
margin:4,

  },
  header:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'#444444',
    color:'#cccccc'

  },

  subhead:{
    fontWeight:'bold',
    fontSize:20,
    fontStyle:'italic',
    padding:5,
    marginLeft:8,
    color:'#888888'
  },
  cont:{
    flex:0.33,
    backgroundColor:'#eeeeee',
  },
  cont1:{
    flex:0.34,
    backgroundColor:'#eeeeee',
  }
})

