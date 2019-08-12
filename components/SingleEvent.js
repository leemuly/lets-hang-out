import React, { Component } from 'react';
import {
  Modal,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  Text,
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';


export default class SingleEvent extends Component {
  constructor(props) {
    super(props);
  }

  closeSingleEventModal() {
    this.setState({ isSingleEventModalVisible: !this.state.isSingleEventModalVisible });
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.isSingleEventModalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.inputsContainer}>
            <View style={styles.inputsHeader}>
              <Text style={styles.headerText} >
                {this.props.eventInfo.name}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.closeSingleEventModal();
                }}
                style={styles.close}
              >
                <TabBarIcon name="md-close" />
              </TouchableOpacity>
            </View>


            <Button title="Add Plan" />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({});
