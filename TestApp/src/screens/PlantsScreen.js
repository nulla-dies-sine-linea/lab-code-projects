import React from 'react';
import {View, Text} from 'react-native';

const PlantsScreen = props => {
  const {route} = props;
  const {data} = route.params;
  console.log('PLANT PROPS', data);
  const {title, content, id} = data;
  return (
    <View>
      <Text>PLANTS SCREEN</Text>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
};

export default PlantsScreen;
