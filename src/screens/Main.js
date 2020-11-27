import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AppDimensions from '../helpers/AppDimensions';

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
      shouldShowForm: true,
      txtEn: '',
      txtVn: '',
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
  renderWords = () => {
    return (
      <>
        {this.state.words.map((word) => {
          const isShowVn = word.isMemorized ? '----' : word.vn;
          const showMemorized = word.isMemorized ? 'Forgot' : 'Memorized';
          const stylesMemorized = {
            backgroundColor: word.isMemorized ? 'green' : 'red',
          };
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
              placeholder="English"
              onChangeText={(text) => (this.state.txtEn = text)}
              style={styles.textInput}
            />
            <TextInput
              onChangeText={(text) => (this.state.txtVn = text)}
              placeholder="Vietnamese"
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity style={styles.touchableAddword}>
              <Text style={styles.textTouchable}>Add word</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableCancel}>
              <Text style={styles.textTouchable}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity style={styles.buttonOpenForm}>
          <Text style={styles.textOpenForm}>+</Text>
        </TouchableOpacity>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderForm()}
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
});
