import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1
    },
    touch:{
        flex:1,
        zIndex:9
    },
    content:{
        marginVertical:20,
        marginLeft:10,
        marginRight:10
    },
    actionButton:{
        backgroundColor:'#fff',
        zIndex:99,
        borderRadius:6,
        marginTop:8,
        padding:8,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',

        shadowColor:'rgba(0,0,0,0.5)',
        shadowOffset:{
            width:0,
            height:2
        },
        elevation:5,
        shadowOpacity:0.28,
        shadowRadius:4
    },
    actionText:{
        textAlign:'center',
        fontWeight:'bold'
    },
    cancelText:{
        color:'#FF0000'
    }
})