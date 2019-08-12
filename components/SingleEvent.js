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
              <Text style={styles.headerText}>{this.props.eventInfo.name}</Text>
             
              <TouchableOpacity
                onPress={() => {
                  this.props.closeSingleEventModal();
                }}
                style={styles.close}
              >
                <TabBarIcon name="md-close" />
              </TouchableOpacity>
              
            </View>
            <Text>
                    {this.props.eventInfo.date} | {this.props.eventInfo.address}
                    </Text>
                <View style={styles.eventInfo}>

                    <Text>
                    {this.props.eventInfo.description}
                    </Text>
                </View>

            <Button title="Add Plan" />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000080',
    },
    inputsContainer: {
      width: '90%',
      height: 380,
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10
    },
    inputsHeader: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "baseline",
    },
    headerText: {
      fontSize: 16,
      fontWeight: "bold"
    },
    eventInfo: {
        flex: 7,
        justifyContent: "center",
        alignItems: "center"
    },
    close: {
      width: 18,
      height: 18
    },
  });
  