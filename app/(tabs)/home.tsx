import { View, StyleSheet,Text } from "react-native"


export default function Welcome(){
    return(
        <View style={styles.container}>
            <Text>FFFF</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff',
        justifyContent:'center',
    }
})