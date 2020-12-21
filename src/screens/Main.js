/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import AppDimensions from '../helpers/AppDimensions';
import Word from '../components/Word';
import Form from '../components/Form';
import Filter from '../components/Filter';
import {connect} from 'react-redux';
import Loading from '../components/Loading';

class Main extends Component {
  showLoading = () => {
    if (this.props.loading) {
      return (
        <View style={{position: 'absolute', width: '100%', height: '100%'}}>
          <Loading />
        </View>
      );
    } else {
      return null;
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Form />
        <Filter />
        <Word />
        {this.showLoading()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {loading: state.loading};
};

export default connect(mapStateToProps)(Main);

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
