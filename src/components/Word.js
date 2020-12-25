/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList, View , Modal} from 'react-native';
import WordItem from './WordItem';
import {connect} from 'react-redux';
import actionCreators from '../redux/action/actionCreators';

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  componentDidMount() {
    this.props.fetchWords();
  }
  onRemoveWord = (_id) => {
    this.props.removeWord(_id);
  };
  onToggleWord = (_id, ismemorized) => {
    this.props.toggleWord(_id, ismemorized);
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <FlatList
          data={this.props.words}
          extraData={this.props.filterMode}
          keyExtractor={(item, index) => item._id.toString()}
          renderItem={({item}) => (
            <WordItem
              item={item}
              modal={this.modal}
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
