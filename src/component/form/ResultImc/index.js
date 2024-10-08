import React from "react";
import { View,Text, TouchableOpacity, Share } from "react-native";
import styles from "./Style";





export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message:"Meu IMC hoje é: " + props.resultImc,
        }) 
    }
  
    
      



 return(

<View style = {styles.resultImx}>
 < View style = {styles.boxShareButton}> 
 { props.resultImc != null ? 
 <TouchableOpacity 
    onPress={onShare}
    style = {styles.shared}>
    <Text style = {styles.sharedText}>Share</Text>
 </TouchableOpacity>
 : <View/>
}
 </View>
 <Text style = {styles.information}>{props.messageResultImc}</Text>
 <Text style = {styles.numberImc}>{props.resultImc}</Text>
 
 </View>
 );
}