import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AppDimensions from '../helpers/AppDimensions';

export default class Main extends Component {
  render() {
    const words = [
      {en: 'One', vn: 'Một', isMemorized: true},
      {en: 'Two', vn: 'Hai'},
      {en: 'Three', vn: 'Ba'},
      {en: 'Four', vn: 'Bốn'},
    ];
    return (
      <View style={styles.container}>
        {words.map((word) => {
          return (
            <View style={styles.groupItem}>
              <View style={styles.groupElement}>
                <Text style={styles.txtStyleEn}>{word.en}</Text>
                <Text style={styles.txtStyleVn}>{word.vn}</Text>
              </View>
              <View style={styles.groupElement}>
                <TouchableOpacity style={styles.touchMemorized}>
                  <Text style={styles.textMemorized}>Memorized</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchRemove}>
                  <Text style={styles.textRemove}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  groupItem: {
    margin: 5,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    backgroundColor: 'silver',
  },
  groupElement: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txtStyleEn: {
    color: 'green',
    fontSize: AppDimensions.getWidth() / 15,
  },
  txtStyleVn: {
    color: 'red',
    fontSize: AppDimensions.getWidth() / 15,
  },
  touchRemove: {
    backgroundColor: 'khaki',
    padding: 10,
    borderRadius: 5,
  },
  touchMemorized: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  textMemorized: {
    fontSize: AppDimensions.getWidth() / 20,
  },
  textRemove: {
    fontSize: AppDimensions.getWidth() / 20,
  }
});
