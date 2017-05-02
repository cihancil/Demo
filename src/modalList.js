import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ListView,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const colors = [
  {
    primary: "#39C891",
    secondary: "#AFE7D1",
  },
  {
    primary: "#507DD4",
    secondary: "#DEE7F9",
  },
  {
    primary: "#EFC16D",
    secondary: "#FFECCB",
  },
]

@inject("store")
@observer
export default class ModalList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })
    this.state = {
      ready: false,
      dataSource: ds.cloneWithRowsAndSections([]),
    }
  }

  componentDidMount() {
    setTimeout(() => {
      let source = this._arrangeItems(this.props.store.friends)
      this.setState({
        ready: true,
        dataSource: this.state.dataSource.cloneWithRowsAndSections(source)
      })
    }, 500)
  }

  render() {
    let { store } = this.props
    let friends = store.friends
    if (!this.state.ready) {
      return (
        <View style={[styles.container, {
          alignItems: "center", justifyContent: "center",
        }]}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={this._renderItem.bind(this)}
        renderSectionHeader={this._renderSectionHeader.bind(this)}
      />
    )
  }

  _renderItem(rowData, section, index) {

    if (section === "suggested") {
      return (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {rowData.friends.map((friend, friendIndex) => {
            return (
              <TouchableOpacity
                key={"suggested" + friendIndex}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 16,

                }}
              >
                <Image
                  style={{
                    width: 100, height: 100, borderRadius: 50,
                  }}
                  source={{ uri: friend.photo }} />
                <Text style={{
                  fontFamily: "Avenir",
                  fontWeight: "bold",
                  color: "#272727",
                  marginTop: 8,
                }}>
                  {friend.firstName + " " + friend.lastName}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View >
      )
    }

    let shortName = rowData.firstName[0] + rowData.lastName[0]

    return (
      <View
        style={{
          padding: 8,
          flexDirection: "row",
        }}>
        <View
          style={{
            backgroundColor: colors[index % 3].secondary,
            width: 48, height: 48, borderRadius: 24,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: colors[index % 3].primary,
            }}
          >{shortName}</Text>
          {
            index == 0 && section === "sales" &&
            <View
              style={{
                position: "absolute",
                top: -2, right: -2,
                width: 20, height: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "white",
                backgroundColor: "#0076FF",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="star" color="white" style={{ fontSize: 9, }} />
            </View>
          }
        </View>
        <View
          style={{
            flex: 1,
            borderBottomWidth: 1,
            marginHorizontal: 16,
            borderColor: "#EEEEEE",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Avenir",
              fontWeight: "bold",
              color: "#272727",
            }}
          >{rowData.firstName + " " + rowData.lastName}</Text>
        </View>
      </View>
    )
  }

  _renderSectionHeader(sectionData, category) {
    let section
    if (category === "suggested") {
      section = "Suggested team members"
    }
    if (category === "sales") {
      section = "Sales"
    }
    if (category === "management") {
      section = "Management"
    }
    return (
      <View style={{
        height: 36,
        justifyContent: "center",
        paddingHorizontal: 16,
        backgroundColor: "#F3F3F3",
      }}>
        <Text style={{
          color: "#AAAAAA",
          fontFamily: "Avenir",
        }}>
          {section}
        </Text>
      </View>
    )
  }

  _arrangeItems(items) {
    let suggested = {
      category: "suggested",
      friends: items.slice(0, 3)
    }

    let sales = items.slice(3, 9)
    sales.forEach(item => {
      item.category = "sales"
    })
    let management = items.slice(10)
    management.forEach(item => {
      item.category = "management"
    })

    let arranged = {
      suggested: [suggested],
      sales: sales,
      management: management
    }

    return arranged
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})