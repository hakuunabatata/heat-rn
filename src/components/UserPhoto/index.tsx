import React from 'react'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import avatarImg from '../../assets/avatar.png'

import { styles } from './styles'
import { COLORS } from '../..'

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42,
  },
}

type Props = {
  imageUri: string | undefined
  sizes?: 'SMALL' | 'NORMAL'
}

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri

export const UserPhoto = ({ imageUri, sizes = 'NORMAL' }: Props) => {
  const { avatarSize, containerSize } = SIZES[sizes]

  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      style={[
        styles.container,
        { width: containerSize },
        { height: containerSize },
        { borderRadius: containerSize / 2 },
      ]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.8, y: 1 }}
    >
      <Image
        source={{ uri: imageUri || AVATAR_DEFAULT }}
        style={[
          styles.avatar,
          { width: avatarSize },
          { height: avatarSize },
          { borderRadius: avatarSize / 2 },
        ]}
      />
    </LinearGradient>
  )
}
