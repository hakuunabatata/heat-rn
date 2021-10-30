import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '../../components/Header'

import { styles } from './styles'

export const Home = () => (
  <>
    <View style={styles.container}>
      <Header />
    </View>
  </>
)
