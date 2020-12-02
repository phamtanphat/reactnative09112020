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
      isRefreshing: false,
    };
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.words}
          keyExtractor={(item) => item.id.toString()}
          extraData={this.state.words}
          renderItem={({item, index}) => {
            return <Text>{item.en}</Text>;
          }}
          ItemSeparatorComponent={() => (
            <View style={{backgroundColor: 'red', height: 1, width: '100%'}} />
          )}
          refreshing={this.state.isRefreshing}
          onRefresh={() => {
            this.setState({isRefreshing: true});
            setTimeout(() => {
              this.setState({isRefreshing: false});
            }, 2000);
          }}
        />
      </View>
    );
  }
}
