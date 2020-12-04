import React, {Component} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import AppDimensions from '../helpers/AppDimensions';
import Word from '../components/Word';
import Form from '../components/Form';
import Filter from '../components/Filter';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: 1, en: 'One', vn: 'Một', isMemorized: true},
        {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
        {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
        {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
      ],
      shouldShowForm: false,
      filterMode: '',
    };
  }
  onToggleWord = (id) => {
    const newWords = this.state.words.map((item) => {
      if (item.id === id) {
        const newWord = {
          ...item,
          isMemorized: !item.isMemorized,
        };
        return newWord;
      }
      return item;
    });
    this.setState({words: newWords});
  };
  onRemoveWord = (id) => {
    const newWords = this.state.words.filter((item) => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
    this.setState({words: newWords});
  };
  onToggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  onAddWord = (txtEn, txtVn, cb) => {
    const {words} = this.state;
    const newWords = Object.assign([], words);
    const newWord = {
      id: words.length + 1,
      en: txtEn,
      vn: txtVn,
      isMemorized: false,
    };
    newWords.unshift(newWord);
    this.setState({words: newWords}, cb);
  };
  render() {
    return (
      <View style={styles.container}>
        <Form
          onAddWord={this.onAddWord}
          onToggleForm={this.onToggleForm}
          shouldShowForm={this.state.shouldShowForm}
        />
        <Filter filterMode={this.state.filterMode} />
        <Word
          onRemoveWord={this.onRemoveWord}
          onToggleWord={this.onToggleWord}
          words={this.state.words}
          filterMode={this.state.filterMode}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 10,
    borderRadius: 5,
  },
  textMemorized: {
    fontSize: AppDimensions.getWidth() / 20,
  },
  textRemove: {
    fontSize: AppDimensions.getWidth() / 20,
  },
  containerTextInput: {
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
  },
  textInput: {
    borderWidth: 1,
    height: 60,
    fontSize: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  touchableAddword: {
    backgroundColor: '#218838',
    padding: 15,
    borderRadius: 10,
  },
  textTouchable: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  touchableCancel: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  buttonOpenForm: {
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#45B157',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOpenForm: {
    color: 'white',
    fontSize: 30,
  },
  containerTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 20,
    marginHorizontal: 10,
  },
  pickerStyle: {
    padding: 50,
  },
});
