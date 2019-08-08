import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function CatalogScreen() {
  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  );
}

CatalogScreen.navigationOptions = {
  title: 'Saved Quotes',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});