import React from 'react'
import { Provider } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import { Main, Search, Music } from './containers'
import { Colors } from './config'
import store from './store'

const AppNavigator = createBottomTabNavigator(
  {
    MainTab: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name="ios-home"
            size={30}
            color={focused ? Colors.primary : 'black'}
          />
        )
      }
    },
    SearchTab: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name="ios-search"
            size={30}
            color={focused ? Colors.primary : 'black'}
          />
        )
      }
    },
    MusicTab: {
      screen: Music,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name="ios-musical-notes"
            size={30}
            color={focused ? Colors.primary : 'black'}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
)

const Navigation = createAppContainer(AppNavigator)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

export default App
