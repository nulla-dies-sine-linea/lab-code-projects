import React from 'react';
import {View, Text, Button} from 'react-native';

const MainScreen = props => {
  const {navigation} = props;

  return (
    <View>
      <Text>MAIN SCREEN</Text>
      <Button
        title="Go to news"
        onPress={() => {
          navigation.navigate('NewsScreen');
          console.log('PRESSED');
        }}
      />
      <Button
        title="Take photo"
        onPress={() => {
          navigation.navigate('CameraScreen');
        }}
      />
    </View>
  );
};

export default MainScreen;
