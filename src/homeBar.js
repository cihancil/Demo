import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

@inject("store")
@observer
export default class HomeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { store } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => { this.props.onLeftIconPress() }}
          style={styles.leftContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: store.profile.photo }}
          />
        </TouchableOpacity>
        <View style={styles.mainContainer}>
          <View
            style={styles.input}
          >
            <MaterialIcons color="#D7E5F6" name="search" style={{ fontSize: 24 }} />
            <Text style={{ color: "#D7E5F6", marginLeft: 4, }}>Search...</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.leftContainer}>
          <MaterialIcons color="white" name="notifications-none" style={{ fontSize: 36 }} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    height: 48,
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  leftContainer: {
    width: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  input: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#005DCA",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginVertical: 5,
    marginHorizontal: 8,
  },
})