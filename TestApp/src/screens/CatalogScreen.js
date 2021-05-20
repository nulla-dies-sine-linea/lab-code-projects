import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';

const CatalogScreen = props => {
  const cityData = require('../data/city.json');
  const {navigation} = props;

  //   const data = [
  //     {
  //       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //       title: 'First Item',
  //       content: 'BLBLBLBLLB1',
  //     },
  //     {
  //       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //       title: 'Second Item',
  //       content: 'BLBLBLBLLB2',
  //     },
  //     {
  //       id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //       title: 'Third Item',
  //       content: 'BLBLBLBLLB3',
  //     },
  //   ];

  //   const fetchData = () => {
  //       axios
  //       .get
  //       .then
  //   }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text>CATALOG SCREEN</Text>
      <FlatList
        data={cityData}
        renderItem={item => {
          console.log('ITEM', item);
          return (
            <View key={item.item.id}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate('PlantsScreen', {data: item.item});
                }}>
                <Text>{item.item.city}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        // keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 5,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    borderColor: '#379683',
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CatalogScreen;
