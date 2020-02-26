import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddEntry from './Component/AddEntry';

export default function App() {
  return (
    <View style={styles.container}>
      <AddEntry />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
