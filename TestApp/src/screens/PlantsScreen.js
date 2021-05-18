import React from 'react';
import {View, Text} from 'react-native';

const PlantsScreen = props => {
  const {route} = props;
  const {data} = route.params;
  console.log('PLANT PROPS', data);
  const {id, state, city, street} = data;
  return (
    <View>
      <Text>{city}</Text>
      <Text>State: {state}</Text>
      <Text>Street: {street}</Text>
    </View>
  );
};

export default PlantsScreen;
