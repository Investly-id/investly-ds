import React, { useMemo } from 'react'
import { FlatList, FlatListProps, StyleProp, ViewStyle } from 'react-native'

import { getTwStyle } from '../Utils'

interface Props
  extends Omit<
    FlatListProps<any>,
    'style' | 'contentContainerStyle' | 'columnWrapperStyle'
  > {
  style?: StyleProp<ViewStyle> | string
  contentContainerStyle?: StyleProp<ViewStyle> | string
  columnWrapperStyle?: StyleProp<ViewStyle> | string
}

const RNFlatList = (props: Props) => {
  const style = useMemo(() => getTwStyle(props.style), [props])
  const contentContainerStyle = useMemo(
    () => getTwStyle(props.contentContainerStyle),
    [props]
  )
  const columnWrapperStyle = useMemo(
    () => getTwStyle(props.columnWrapperStyle),
    [props]
  )

  return (
    <FlatList
      {...props}
      style={style}
      contentContainerStyle={contentContainerStyle}
      columnWrapperStyle={columnWrapperStyle}
    />
  )
}

RNFlatList.defaultProps = {
  style: undefined,
  contentContainerStyle: undefined,
  columnWrapperStyle: undefined,
}

export default React.memo(RNFlatList)
