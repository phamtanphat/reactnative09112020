import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Child extends PureComponent {
  render() {
    console.log('Render Child');
    return (
      <View>
        <View style={styles.eventgroup}>
          <TouchableOpacity
            onPress={() => this.props.dispatch({type: 'INCREASE'})}
            style={styles.boxIncrease}>
            <Text style={styles.increase}>InCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.dispatch({type: 'DECREASE'})}
            style={styles.boxDescrease}>
            <Text style={styles.descrease}>DeCrease</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.dispatch({type: 'RESET'})}
            style={styles.boxReset}>
            <Text style={styles.reset}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(Child);

const styles = StyleSheet.create({
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
