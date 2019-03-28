import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'

import styles from './styles'
import * as actions from '../../store/actions'

class Main extends React.Component {
  createSession = () => {
    const session = {
      user: {
        id: 1,
        name: 'Petr Vasilev',
        login: 'petr'
      },
      token: 'user_token'
    }
    this.props.dispatch(actions.session.save(session))
  }

  clearSession = () => this.props.dispatch(actions.session.clear())

  render() {
    const { session } = this.props
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <Text>{JSON.stringify(session)}</Text>
        {!session.token ? (
          <Button onPress={this.createSession} title="Create Session" />
        ) : (
          <Button onPress={this.clearSession} title="Clear Session" />
        )}
      </View>
    )
  }
}

export default connect(state => ({
  session: state.session
}))(Main)
