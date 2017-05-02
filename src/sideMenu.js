import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

@inject("store")
@observer
export default class SideMenu extends Component {

  render() {
    let { store } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image style={styles.avatar}
            source={{ uri: store.profile.photo }}
          />
          <Text style={styles.nameText}>
            {store.profile.firstName} {store.profile.lastName}
          </Text>
          <Text style={styles.titleText}>Personal Account</Text>
          <MaterialIcons style={styles.icon} name="add" color={"white"} size={36} />
        </View>
        <View style={styles.subContainer}>
          <View style={styles.buttonContainer}>
            <Image style={styles.accountImage}
              source={{ uri: store.profile.photo }}
            />
            <Text style={styles.accountNameText}>Personal Account</Text>
            <MaterialIcons name="done" color={"#0076FF"} size={24} />
          </View>
          <Text style={styles.seperatorText}>MY ORGANISATIONS</Text>
          <TouchableOpacity style={styles.addAccountButtonContainer}>
            <Text style={styles.addAccountText}>
              Add Professional Account
            </Text>
          </TouchableOpacity>
          <Text style={styles.infoText}>
            Want to use INTUO for your team of organisation? Find out more at
            <Text style={styles.linkText}>
              {" "}intuo.io{" "}
            </Text>
            and create your own organisation.
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: "#0076FF",
    padding: 8,
    paddingTop: Platform.OS === "ios" ? 32 : 8,
    paddingBottom: 16,
  },
  avatar: {
    width: 80, height: 80, borderRadius: 40,
  },
  nameText: {
    backgroundColor: "transparent",
    marginTop: 24,
    color: "white",
    fontFamily: "Avenir",
    fontSize: 20,
    fontWeight: "bold",
  },
  titleText: {
    backgroundColor: "transparent",
    marginTop: 4,
    color: "#9AC9FF",
    fontFamily: "Avenir",
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    top: 32, right: 8,
  },
  subContainer: {
    padding: 8,
    paddingTop: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountImage: {
    width: 42, height: 42, borderRadius: 9,
  },
  addAccountButtonContainer: {
    backgroundColor: "#0076FF",
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  addAccountText: {
    color: "white",
    fontFamily: "Avenir",
    fontWeight: "bold",
    fontSize: 15,
  },
  infoText: {
    color: "#C0BFC2",
    fontFamily: "Avenir",
    marginTop: 16,
  },
  linkText: {
    color: "#0076FF",
  },
  seperatorText: {
    marginTop: 16,
    color: "#D2D2D7",
  },
  accountNameText: {
    flex: 1,
    marginLeft: 8,
    color: "#0076FF",
  },
});