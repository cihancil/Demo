import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  AlertIOS,
  Platform,
  TouchableOpacity,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import ModalList from './modalList'

export default class ModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: true,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        <ModalList />
      </View>
    )
  }

  _renderHeader() {
    return (
      <View style={{
        flexDirection: "row",
        height: 60,
        borderBottomWidth: 1,
        borderColor: "#ECECEC",
        alignItems: "center",
        paddingHorizontal: 8,
      }}>
        {
          this.state.showAdd &&
          <TouchableOpacity
            onPress={() => {
              if (Platform.OS === "ios") {
                AlertIOS.prompt(
                  'Add Contact',
                  "Praise someone outside of your contacts.",
                  text => { }
                )
              }
            }}
            style={{ width: 72 }}>
            <MaterialIcons name="add" color={"#FE3E2B"} size={36} />
          </TouchableOpacity>
        }
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            color: "#FE3E2B",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >New Praise</Text>
        <TouchableOpacity
          style={{ width: 80, padding: 8, alignItems: "flex-end" }}
          onPress={() => { this.props.onClose() }}
        >
          <Text style={{
            color: "#FE3E2B",
            fontSize: 16,
          }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS === "ios" ? 24 : 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
})