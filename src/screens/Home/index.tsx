import React from 'react'
import { View } from 'react-native'
import { Header } from '../../components/Header'
import { MessageList } from '../../components/MessageList'
import { SignInBox } from '../../components/SignInBox'

import { styles } from './styles'

export const Home = () => (
  <>
    <View style={styles.container}>
      <Header />
      <MessageList />
      <SignInBox />
    </View>
  </>
)
