import React from 'react';
import {
  View,Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Main from './container/Main';


export default class App extends React.Component{
  render(){
    return <Main/>;
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
})