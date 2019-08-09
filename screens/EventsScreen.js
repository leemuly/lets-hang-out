import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default class PlansScreen extends React.Component {
  constructor(){
      super()
      this.state = {
          firstQuery: '',
      }
  }
  
  render() {
      const { firstQuery } = this.state;
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

PlansScreen.navigationOptions = {
  title: 'Upcoming Events',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
