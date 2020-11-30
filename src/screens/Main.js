import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import AppDimensions from '../helpers/AppDimensions';
import RNPickerSelect from 'react-native-picker-select';

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
      txtEn: '',
      txtVn: '',
      filterMode: 'Show_All',
    };
  }
  toggleWord = (id) => {
    const newWords = this.state.words.map((item) => {
      if (item.id === id) {
        const newWord = {
          ...item,
          isMemorized: !item.isMemorized,
        };
        console.log(newWord);
        return newWord;
      }
      return item;
    });
    this.setState({words: newWords});
  };
  removeWord = (id) => {
    const newWords = this.state.words.filter((item) => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
    this.setState({words: newWords});
  };
  toggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  addWord = () => {
    const {txtEn, txtVn, words} = this.state;
    const newWords = Object.assign([], words);
    if (txtEn.length == 0 || txtVn.length == 0) {
      return alert('Chưa nhập đủ thông tin');
    }
    const newWord = {
      id: words.length + 1,
      en: txtEn,
      vn: txtVn,
      isMemorized: false,
    };
    newWords.unshift(newWord);
    this.inputTextEn.clear();
    this.inputTextVn.clear();
    this.setState({words: newWords});
    Keyboard.dismiss();
  };
  renderWords = () => {
    return (
      <>
        {this.state.words.map((word) => {
          const {filterMode} = this.state;
          const isShowVn = word.isMemorized ? '----' : word.vn;
          const showMemorized = word.isMemorized ? 'Forgot' : 'Memorized';
          const stylesMemorized = {
            backgroundColor: word.isMemorized ? 'green' : 'red',
          };
          if (filterMode === 'Show_Forgot' && !word.isMemorized) {
            return null;
          }
          if (filterMode === 'Show_Memorized' && word.isMemorized) {
            return null;
          }
          return (
            <View style={styles.groupItem} key={word.id}>
              <View style={styles.groupElement}>
                <Text style={styles.txtStyleEn}>{word.en}</Text>
                <Text style={styles.txtStyleVn}>{isShowVn}</Text>
              </View>
              <View style={styles.groupElement}>
                <TouchableOpacity
                  onPress={() => this.toggleWord(word.id)}
                  style={[styles.touchMemorized, stylesMemorized]}>
                  <Text style={styles.textMemorized}>{showMemorized}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.removeWord(word.id)}
                  style={styles.touchRemove}>
                  <Text style={styles.textRemove}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </>
    );
  };
  renderForm = (shouldShowForm) => {
    if (shouldShowForm) {
      return (
        <View>
          <View style={styles.containerTextInput}>
            <TextInput
              ref={(refs) => (this.inputTextEn = refs)}
              placeholder="English"
              onChangeText={(text) => (this.state.txtEn = text)}
              style={styles.textInput}
            />
            <TextInput
              ref={(refs) => (this.inputTextVn = refs)}
              onChangeText={(text) => (this.state.txtVn = text)}
              placeholder="Vietnamese"
              style={styles.textInput}
              onSubmitEditing={this.addWord}
            />
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity
              onPress={this.addWord}
              style={styles.touchableAddword}>
              <Text style={styles.textTouchable}>Add word</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.toggleForm}
              style={styles.touchableCancel}>
              <Text style={styles.textTouchable}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={this.toggleForm}
          style={styles.buttonOpenForm}>
          <Text style={styles.textOpenForm}>+</Text>
        </TouchableOpacity>
      );
    }
  };
  renderFilter = () => {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          onValueChange={(value) => this.setState({filterMode: value})}
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderForm(this.state.shouldShowForm)}
        {this.renderFilter()}
        {this.renderWords()}
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
