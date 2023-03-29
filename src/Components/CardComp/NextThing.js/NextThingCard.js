import { View, Text, ImageBackground ,BlurView } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../Constants/Dimension'

const NextThingCard = ({...props}) => {
    const data = props
  
  return (
    <View style={{ 
        borderRadius: 10,
        marginVertical: hp('1.5%'),
        margin: hp('2%'),
    
        width:wp('20%'),
        height: hp("15%"),
       
        shadowOpacity: 0.26,
        shadowOffset: { width:0, height: 2},
        shadowRadius: 10,
        elevation: 0,}}>

     <View style={{overflow:"hidden",width:wp('22%'), height: hp("22%"),}}>
     <ImageBackground blurRadius={2} style={{width:wp('22%'),
        height: hp("22%"),
        resizeMode:'contain',
        
        borderRadius: 10,}}source={{uri:data.item.image}}>
             <Text style={{width:wp('18%'),fontWeight:'bold',color:'black',alignItems:'center'}}>{data.item.title}</Text>
             </ImageBackground>
          
     </View>
     

      
     
    </View>
  )
}

export default NextThingCard
