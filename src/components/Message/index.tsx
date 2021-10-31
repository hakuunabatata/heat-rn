import React from 'react'
import { Text, View } from 'react-native'
import { UserPhoto } from '../UserPhoto'

import { styles } from './styles'

export const Message = () => (
  <>
    <View style={styles.container}>
      <Text style={styles.message}>Texto da Mensagem</Text>

      <View style={styles.footer}>
        <UserPhoto sizes="SMALL" imageUri="" />

        <Text style={styles.userName}>User</Text>
      </View>
    </View>
  </>
)
