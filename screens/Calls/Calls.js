import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const ProfileCardCalls = ({title,subTitle,call})=>{
    return(
        <View style={styles.profileCardContainer}>
            <View style={styles.avatar}>
            <Image
                source={{ uri: 'data:image/jpeg;base64,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' }}
                style={{ width: 50, height: 50, marginVertical: 5 }}
              />
            </View>
        <View style={styles.textContainer}>
            <Text style={styles.label}>{title}</Text>
            <Text style={styles.silent}>{subTitle}</Text>
        </View>
        <View style={styles.rootCalls}>
        <View>
         <Text style={{fontSize:15}}>{item.name}</Text>
         <View style={{flexDirection:'row'}}>
             {call ? (
               <Image
               source={require('../Calls/callMake.png')}
               style={{height:15,width:15}}
               />):null}
               <Text style={styles.silentText}>{item.lastMessage}</Text>
           </View>
        </View>
        </View>
       
        {call?(
            <TouchableOpacity>
            <Image
            source={require('../Calls/call.png')}
            style={{height:26,width:26}}
            /></TouchableOpacity>):(
                <Text style={styles.silentText}>(item.lastSeen)</Text>
                )}
            </View>
    )
} 
const item={
    id:1,
        name:'Shyam',
        lastMessage:'Yesterday,11:54 PM',
        profilePic:require('../../assests/images/download.jpg'),
        lastSeen:'10:36 PM',
}
export default class Calls extends React.Component {
    render(){
        return(
           <SafeAreaView >
               <ProfileCardCalls
               call={true}
               /> 
           </SafeAreaView>
        );
    }
}

const styles=StyleSheet.create({
    rootCalls:{
        flex:1,
    },
    profileCardContainer:{
        marginVertical:10,
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
    },
    label:{
        fontSize:16,
       },
       silent:{
           color:'grey',
       },
       textContainer:{
        paddingHorizontal:10,
        
    },
    avatar:{
        height:50,
        width:50,
        borderRadius:25,
        backgroundColor:'grey',
     },
     silentText:{
      color:'grey',
      fontSize:15
     },
     floatingContainer:{
        height:70,
        width:70,
        position:'absolute',
        right:10,
        bottom:20,
    },
    iconBox:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
    },
})