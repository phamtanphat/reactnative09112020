import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AppDimensions from '../helpers/AppDimensions';

export default class Main extends Component {
  render() {
    const words = [
      {en: 'One', vn: 'Một'},
      {en: 'Two', vn: 'Hai'},
      {en: 'Three', vn: 'Ba'},
      {en: 'Four', vn: 'Bốn'},
    ];

    return (
      <View style={styles.container}>
        {words.map((word) => {
          return (
            <View style={styles.groupText}>
              <Text style={styles.txtStyleEn}>{word.en}</Text>
              <Text style={styles.txtStyleVn}>{word.vn}</Text>
            </View>
          );
        })}
        {/* <TouchableOpacity
          ref={(refs) => (this.touchable = refs)}
          style={{backgroundColor: 'gray'}}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txtStyleEn: {
    color: 'green',
    fontSize: AppDimensions.getWidth() / 20,
  },
  txtStyleVn: {
    color: 'red',
    fontSize: AppDimensions.getWidth() / 20,
  },
});
