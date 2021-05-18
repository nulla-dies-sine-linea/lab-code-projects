import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PlantsScreen = props => {
  const {route} = props;
  const {data} = route.params;
  console.log('PLANT PROPS', data);
  const {id, state, city, street} = data;
  return (
    <View>
      <Text style={styles.city}>{city}</Text>
      <Text>State: {state}</Text>
      <Text style={styles.street}>Street: {street}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  city: {
    color: '#ff4411',
    fontSize: 48,
    fontFamily: 'Signika',
    // sans-serif,
    paddingBottom: 10,
  },
  street: {
    fontFamily: 'Inder',
    lineHeight: 28,
    marginBottom: 15,
    color: '#666',
  },
});

export default PlantsScreen;
