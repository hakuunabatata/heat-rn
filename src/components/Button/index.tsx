import React from 'react'
import {
  ColorValue,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  color: ColorValue
  backgroundColor: ColorValue
  icon?: React.ComponentProps<typeof AntDesign>['name']
  loading?: boolean
}

export const Button = ({
  title,
  color,
  backgroundColor,
  icon,
  loading = false,
  ...rest
}: Props) => (
  <>
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={color} />
      ) : (
        <>
          {icon && <AntDesign style={styles.icon} name={icon} size={24} />}

          <Text style={[styles.title, { color }]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  </>
)
