/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import WordItem from './WordItem';
import {connect} from 'react-redux';
import actionCreators from '../redux/action/actionCreators';

class Word extends Component {
  onToggleWord = (id) => {
    this.props.toggleWord(id);
  };
  onRemoveWord = (id) => {
    this.props.removeWord(id);
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <FlatList
          data={this.props.words}
          extraData={this.props.filterMode}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) => (
            <WordItem
              item={item}
              filterMode={this.props.filterMode}
              onToggleWord={this.onToggleWord}
              onRemoveWord={this.onRemoveWord}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {words: state.words, filterMode: state.filterMode};
};

export default connect(mapStateToProps, actionCreators)(Word);
