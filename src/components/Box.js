import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Box extends Component {
  constructor(props) {
    super(props);
    console.log('Contructor');
  }
  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <Text style={styles.textCount}>Count : 0</Text>
        <View>
          <View style={styles.eventgroup}>
            <TouchableOpacity style={styles.boxIncrease}>
              <Text style={styles.increase}>InCrease</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxDescrease}>
              <Text style={styles.descrease}>DeCrease</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxReset}>
              <Text style={styles.reset}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCount: {
    fontSize: 30,
    color: 'red',
  },
  eventgroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  boxIncrease: {
    borderRadius: 10,
    backgroundColor: 'green',
  },
  boxDescrease: {
    borderRadius: 10,
    backgroundColor: 'red',
  },
  boxReset: {
    borderRadius: 10,
    backgroundColor: 'orange',
  },
  increase: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
  descrease: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
  reset: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
});
