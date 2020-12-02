import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

export default class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: 1, en: 'One', vn: 'Một', isMemorized: true},
        {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
        {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
        {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
      ],
    };
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
