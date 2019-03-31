import React from 'react'
import { Provider } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import { Main, Profile } from './containers'
import { Colors } from './config'
import store from './store'

const AppBottomNavigator = createBottomTabNavigator(
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
    ProfileTab: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name="ios-person"
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

const Navigation = createAppContainer(AppBottomNavigator)

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
