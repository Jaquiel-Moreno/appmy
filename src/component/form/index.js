import React, {useState}from "react"
import{
     View, 
     Text, 
     TextInput,
     TouchableOpacity,
     Vibration,
     Keyboard,
     Pressable

         
    } from "react-native"
import ResultImc from "./ResultImc/"
import styles from "./Style"
   
export default function Form(){
    
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [erroMessage, setErroMessage] = useState(null);



    
    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
    }

    function verificationImc(){
        if(imc == null ){
            Vibration.vibrate();
            setErroMessage("campo obrigatório!!")
        }
    }

    function validationImc(){
        if(weight != null && height != null){
           imcCalculator()
           setHeight(null)
           setWeight(null)
           setMessageImc("Seu Imc é Igual: ")
           setTextButton("Calcular Novamente")
           setErroMessage(null)
        return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencher o Peso e a Altura")
        
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style = {styles.formContext}>
             <View style = {styles.form}>

                <Text style = {styles.formLabel}>Altura</Text>
                <Text style = {styles.erroMessage}>{erroMessage}</Text>
                <TextInput style = {styles.input}
                 onChangeText={setHeight} 
                 value={height}
                 placeholder="Ex.: 1.75"
                keyboardType="Numeric"/>
                
                <Text style = {styles.formLabel}>Peso</Text>
                <Text style = {styles.erroMessage}>{erroMessage}</Text>
                <TextInput  
                style = {styles.input}
                 onChangeText={setWeight}
                 value={weight}
                 placeholder="Ex.: 75.365"
                keyboardType="Numeric"/>

                <TouchableOpacity
                style = {styles.buttonCalculator} 
                onPress={() => {
                validationImc()

                }}
                >
                <Text style = {styles.textButtonCalculator}>{textButton}</Text> 
                </TouchableOpacity> 

             </View>
          <ResultImc messageResultImc = {messageImc} resultImc = {imc}/>

        </Pressable>
    );


}