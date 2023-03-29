import { View, Text, Image } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../Constants/Dimension'

const Servicecard = ({...props}) => {
    const data = props
   
  return (
    <View style={{ 
        // borderColor: Colors.Green,
        borderRadius: 10,
        marginVertical: hp('1.5%'),
        margin: hp('2%'),
        padding: hp('0.1%'),
        width:wp('20%'),
        height: hp("15%"),
       
        shadowOpacity: 0.26,
        shadowOffset: { width:0, height: 2},
        shadowRadius: 10,
        elevation: 0,}}>
      <View >
      <Image  style={{width:wp('15%'),
        height: hp("8%"),
        
        borderRadius: 10,}}source={{uri:data.item.image}} />
      </View>
      
      <Text style={{color:'black',marginTop:hp('2.5%')}}>{data.item.title}</Text>
    </View>
  )
}

export default Servicecard