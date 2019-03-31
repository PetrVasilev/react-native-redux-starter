import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import styles from './styles'

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
      </View>
    )
  }
}

export default connect(state => ({
  session: state.session
}))(Main)
