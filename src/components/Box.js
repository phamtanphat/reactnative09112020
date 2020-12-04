import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Child from './Child';
import {connect} from 'react-redux';

class Box extends Component {
  render() {
    console.log('Render Box');
    return (
      <View style={styles.container}>
        <Text style={styles.textCount}>Count : {this.props.count} </Text>
        <Child onInCrease={this.onInCrease} />
      </View>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
}

export default connect(function (state) {
  return {count: state.count};
})(Box);

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
