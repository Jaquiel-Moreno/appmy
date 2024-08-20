import React from "react";

import { View,Text } from "react-native";
import style from "./Style";


export default function Title(){
    return(

        <View style = {style.boxTitle}>
            
            <Text style = {style.textTitle}>OneBitHelp</Text>
            <Text style = {style.textTitle}>IMC</Text>
        </View>
    );


}