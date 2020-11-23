import {Dimensions} from 'react-native';

function getWidth() {
  return Dimensions.get('window').width;
}

function getHight() {
  return Dimensions.get('window').height;
}

const AppDimensions = {getWidth, getHight};

export default AppDimensions;
