import React from 'react';
import {View, Text, Button} from 'react-native';

const MainScreen = props => {
  const {navigation} = props;

  return (
    <View>
      <Text>MAIN SCREEN</Text>
      <Button
        title="To News Screen"
        onPress={() => {
          navigation.navigate('NewsScreen');
          console.log('PRESSED');
        }}
      />
    </View>
  );
};

export default MainScreen;
