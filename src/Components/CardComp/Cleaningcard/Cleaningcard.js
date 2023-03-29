import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../Constants/Dimension'
import { styles } from './styles'

const Cleaningcard = ({...props}) => {
    const data = props
   
  return (
    <View style={styles.root}>
      <View >
      <Image  style={styles.image}source={{uri:data.item.image}} />
      </View>
      
      <Text style={styles.title}>{data.item.title}</Text>
      <Text style={styles.servicetype}>{data.item. ServiceType}</Text>
      <View style={styles.innerroot}>
      <Text style={styles.startText}>Starting at </Text>
      <Text style={styles.Money}>${data.item.money}</Text>
      </View>
     
    </View>
  )
}

export default Cleaningcard

