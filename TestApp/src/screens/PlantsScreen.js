import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PlantsScreen = props => {
  const {route} = props;
  const {data} = route.params;
  console.log('PLANT PROPS', data);
  const {
    id,
    name,
    type,
    description,
    review,
    logo,
    phone_number,
    address,
    hours,
  } = data;
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.type}>Type: {type}</Text>
      <Text style={styles.type}>Descriptiont: {description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#ff4411',
    fontSize: 48,
    fontFamily: 'Signika',
    // sans-serif,
    paddingBottom: 10,
  },
  type: {
    fontFamily: 'Inder',
    lineHeight: 28,
    marginBottom: 15,
    color: '#666',
  },
});

export default PlantsScreen;
