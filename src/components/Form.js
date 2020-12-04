import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEn: '',
      txtVn: '',
    };
  }
  addWord = () => {
    const {txtEn, txtVn} = this.state;
    if (txtEn.length === 0 || txtVn.length === 0) {
      return alert('Chưa nhập đủ thông tin');
    }
    this.props.onAddWord(txtEn, txtVn, () => {
      this.inputTextEn.clear();
      this.inputTextVn.clear();
      Keyboard.dismiss();
    });
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
              ref={(refs) => (this.inputTextEn = refs)}
            />
            <TextInput
              onChangeText={(text) => (this.state.txtVn = text)}
              placeholder="Vietnamese"
              style={styles.textInput}
              ref={(refs) => (this.inputTextVn = refs)}
            />
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity
              onPress={this.addWord}
              style={styles.touchableAddword}>
              <Text style={styles.textTouchable}>Add word</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.props.onToggleForm}
              style={styles.touchableCancel}>
              <Text style={styles.textTouchable}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={this.props.onToggleForm}
          style={styles.buttonOpenForm}>
          <Text style={styles.textOpenForm}>+</Text>
        </TouchableOpacity>
      );
    }
  };
  render() {
    return this.renderForm(this.props.shouldShowForm);
  }
}

const styles = StyleSheet.create({
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
