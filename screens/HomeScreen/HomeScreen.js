import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
} from 'react-native';
export default class HomeScreen extends React.Component {
    render(){
        return(
            <SafeAreaView style={styles.HomeScreenRoot}>
                <Text> HomeScreen </Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    HomeScreenRoot:{
         flex:1,
    },
})