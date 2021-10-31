import React from 'react'
import { ScrollView } from 'react-native'
import { Message } from '../Message'
import { styles } from './styles'

const testUser = {
  id: 'alfa',
  text: 'test',
  user: {
    name: 'Usuario',
    avatar_url: '',
  },
}

export const MessageList = () => (
  <>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={testUser} />
      <Message data={testUser} />
      <Message data={testUser} />
      <Message data={testUser} />
      <Message data={testUser} />
      <Message data={testUser} />
      <Message data={testUser} />
      <Message data={testUser} />
      <Message data={testUser} />
    </ScrollView>
  </>
)
