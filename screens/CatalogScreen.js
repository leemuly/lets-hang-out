import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default class CatalogScreen extends React.Component() {
  state = {
    firstQuery: '',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={query => {
            this.setState({ firstQuery: query });
          }}
          value={firstQuery}
        />
      </ScrollView>
    );
  }
}

CatalogScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
