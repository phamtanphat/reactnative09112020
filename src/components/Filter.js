import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';
import actionCreators from '../redux/action/actionCreators';

class Filter extends Component {
  render() {
    return (
      <View style={styles.containerPickerStyle}>
        <RNPickerSelect
          value={this.props.filterMode}
          onValueChange={(filterMode) => this.props.setFilterMode(filterMode)}
          items={[
            {label: 'Show All', value: 'Show_All'},
            {label: 'Show Forgot', value: 'Show_Forgot'},
            {label: 'Show Memorized', value: 'Show_Memorized'},
          ]}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {filterMode: state.filterMode};
};

export default connect(mapStateToProps, actionCreators)(Filter);

const styles = StyleSheet.create({
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
