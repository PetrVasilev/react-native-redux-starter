import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'

class Player extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Player</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Close"
          color="black"
        />
      </View>
    )
  }
}

export default Player
