import { View, Text, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../Constants/Dimension'

const OfferCard = ({...props}) => {
    const data = props
   
  return (
    <View style={{ 
        borderRadius: 10,
        marginVertical: hp('1.5%'),
        margin: hp('1.5%'),
        shadowOpacity: 0.26,
        shadowOffset: { width:0, height: 2},
        shadowRadius: 10,
        elevation: 0,}}>
      <View >
      <Image  style={{width:wp('90%'),
        height: hp("28%"),
        resizeMode:'contain',
        borderRadius: 10,}}source={{uri:data.item.image}} />
      </View>
      
      <Text style={{marginTop:hp('2.5%')}}>{data.item.title}</Text>
    </View>
  )
}

export default OfferCard