import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { UserPhoto } from '../UserPhoto'

import LogoSvg from '../../assets/logo.svg'

import { styles } from './styles'

export const Header = () => (
  <>
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto imageUri="" />
      </View>
    </View>
  </>
)
