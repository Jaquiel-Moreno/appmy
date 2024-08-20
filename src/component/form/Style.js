import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    formContext:{
        flex: 1,
        backgroundColor: "#38184C",
        alignItems:"center",
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form:{
        width: "100%",
        right: "auto",
        marginTop: 30,
        paddingTop: 20,
    },
    formLabel:{
        color:"#FFFFFF",
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width: "90%",
        borderRadius: 50, 
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems:"center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft:12,
        marginTop: 30,
        


    },
    textButtonCalculator:{
        fontSize:20,
        color: "#ffffff",

    },
    erroMessage:{
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,

    }
    
    
});

export default styles