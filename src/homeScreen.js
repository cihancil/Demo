import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Text,
  Image,
} from 'react-native'
import Modal from 'react-native-modal'
import HomeBar from './homeBar'
import ActionButton from './actionButton'
import { observer, inject } from 'mobx-react/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import ModalScreen from './modalScreen'

@inject("store")
@observer
export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
    }
  }

  render() {
    let { store } = this.props
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#005DCA"
          barStyle="light-content" />
        <View style={styles.topBackground}>
          <HomeBar
            onLeftIconPress={() => {
              this.props.navigation.navigate('DrawerOpen')
            }}
          />
          <View style={{
            paddingHorizontal: 8,
            paddingTop: 16,
          }}>
            <Text style={{
              color: "white",
              fontFamily: "Avenir",
              fontSize: 26,
              fontWeight: "bold",
            }}>Good Evening,{"\n"}
              <Text style={{ fontSize: 40 }}>
                {store.profile.firstName}.
              </Text>
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <MaterialIcons name="favorite-border" color={"white"} size={24} />
              <Text style={{
                color: "#84BDFF",
                fontFamily: "Avenir",
                marginLeft: 8,
                fontSize: 16,
                fontWeight: "bold",
              }}>Let's get you settled in</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: -72,
          }}
        >
          <View style={{
            backgroundColor: "white", margin: 16,
            padding: 16,
            borderRadius: 8,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 1
            },
            shadowRadius: 3,
            shadowOpacity: 0.3,
          }}>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 8,
            }}
            >
              <Image style={{
                width: 60, height: 60, borderRadius: 30,
              }} source={{ uri: store.friends[0].photo }} />
              <View
                style={{
                  backgroundColor: "#FE3824", width: 32, height: 32, borderRadius: 16,
                  borderWidth: 3, borderColor: "white",
                  position: "absolute", left: -4,
                  alignItems: "center", justifyContent: "center",
                }}
              >
                <MaterialIcons name="favorite" color={"white"} size={14} />
              </View>
              <View style={{
                marginLeft: 8,
              }}>
                <Text
                  style={{
                    fontFamily: "Avenir",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >{store.friends[0].firstName + " " + store.friends[0].lastName}</Text>
                <Text
                  style={{
                    color: "#B3BAC5",
                    fontFamily: "Avenir",
                    fontWeight: "bold",
                    fontSize: 17,

                  }}
                >Welcome to INTUO</Text>
              </View>
            </View>
            <Text
              style={{
                fontFamily: "Avenir",
                fontSize: 18,
                marginTop: 16,
                color: "#727272",
              }}
            >
              This is your feed where you will find praises,
               feedback and many more greatness.
            </Text>
          </View>
        </View>
        <ActionButton
          onPress={(args) => {
            if (args.type === "praise") {
              this.setState({ isModalVisible: true })
            }
          }}
        />
        <Modal
          isVisible={this.state.isModalVisible}
          style={{
            margin: 0,
          }}
        >
          <ModalScreen
            onClose={() => {
              this.setState({ isModalVisible: false })
            }}
          />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
  topBackground: {
    backgroundColor: "#0076FF",
    paddingTop: Platform.OS === "ios" ? 24 : 4,
    paddingBottom: 80,

  }
})