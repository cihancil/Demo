import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Platform,
} from 'react-native'
import Button from 'react-native-action-button'
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { VibrancyView, BlurView } from 'react-native-blur'

export default class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  render() {

    return (
      <Button
        ref={ref => this.button = ref}
        size={64}
        offsetY={16}
        useNativeFeedback={false}
        activeOpacity={Platform.OS === "android" ? 1 : 0.85}
        buttonColor={this.state.active ? "#2A2C2E" : "#0076FF"}
        onPress={() => this.setState({ active: !this.state.active })}
        backdrop={
          Platform.OS === "ios"
            ?
            <VibrancyView
              style={styles.absolute}
              blurType="dark"
              blurAmount={4}
            />
            :
            <View style={{ flex: 1, opacity: 0.4, backgroundColor: "black" }} />
        }
        icon={
          this.state.active
            ?
            <MaterialIcons name="close" style={[styles.actionButtonIcon, { fontSize: 42 }]} />
            :
            <Image
              style={{
                width: 36, height: 36,
              }}
              source={require('./assets/action.png')}
            />
        }
        degrees={0}
        spacing={22}

        textContainerStyle={styles.buttonTextContainer}
        textStyle={styles.buttonText}
      >
        <Button.Item size={48} buttonColor='#FE3824' title="Give a praise"
          onPress={() => {
            this.setState({ active: false })
            this._handleButtonPress({
              type: "praise"
            })
          }}
        >
          <IonIcons size={48} name="md-heart" style={styles.actionButtonIcon} />
        </Button.Item>
        <Button.Item size={48} buttonColor='#0076FF' title="Give feedback"
          onPress={() => {
            this.setState({ active: false })
            this._handleButtonPress({
              type: "give_feedback"
            })
          }}
        >
          <MaterialIcons name="chat" style={styles.actionButtonIcon} />
        </Button.Item>
        <Button.Item size={48} buttonColor='#44DB5E' title="Request feedback"
          onPress={() => {
            this.setState({ active: false })
            this._handleButtonPress({
              type: "request_feedback"
            })
          }}
        >
          <MaterialIcons name="chat" style={[styles.actionButtonIcon, styles.upsideDown]} />
        </Button.Item>
      </Button>
    )
  }

  _handleButtonPress(args) {
    if (this.props.onPress) {
      this.props.onPress(args)
    }
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 26,
    color: 'white',
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
  upsideDown: {
    transform: [
      { rotateX: '180deg' },
      { rotateY: '180deg' },
    ]
  },
  buttonTextContainer: {
    backgroundColor: "#323333",
    borderWidth: 0,
    borderRadius: 20,
    height: 26,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Avenir",
  }
})