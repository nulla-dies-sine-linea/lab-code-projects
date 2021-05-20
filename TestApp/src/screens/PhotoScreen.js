import React from 'react';
import {View, Text, Image} from 'react-native';

const PhotoScreen = props => {
  const photo = props.route.params.photo;
  console.log('PHOTO PROPS', photo);

  return (
    <View>
      <Text>NEWS SCREEN</Text>
      <Image source={{uri: photo}} style={{height: 200, width: 200}} />
    </View>
  );
};

export default PhotoScreen;
