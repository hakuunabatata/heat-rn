import React from 'react'
import { View } from 'react-native'
import { COLORS } from '../..'

import { Button } from '../Button'

import { styles } from './styles'

export const SignInBox = () => (
  <>
    <View style={styles.container}>
      <Button
        title="ENTRAR COM GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
      />
    </View>
  </>
)
