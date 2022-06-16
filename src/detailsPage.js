import * as React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ route, navigation }) {
  let {name, age} = {...route.params};
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: "#000"}}>Details Screen</Text>
      <Text style={{color: "#000"}}>name: {name} and age: {age}</Text>
      <Button
      title='Go to details page' onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

export default DetailsScreen;