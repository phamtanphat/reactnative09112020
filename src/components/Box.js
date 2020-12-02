import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Child from './Child';
export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  onInCrease = () => {
    this.setState({count: this.state.count + 1});
  };
  render() {
    console.log('Render Box');
    return (
      <View style={styles.container}>
        <Text style={styles.textCount}>Count : {this.state.count} </Text>
        <Child onInCrease={this.onInCrease} />
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
});
