/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <Text style={{backgroundColor: 'red', height: 200}}>View 1</Text>
          <Text
            style={{
              backgroundColor: 'green',
              height: 200,
              position: 'absolute',
              top: 10,
            }}>
            View 2
          </Text>
          <Text style={{backgroundColor: 'blue', height: 200}}>View 3</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
