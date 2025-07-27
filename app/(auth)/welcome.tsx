import { View, StyleSheet } from "react-native"
import SwiperButton from "@/components/SwiperButton"


export default function Welcome(){
    return(
        <View style={styles.container}>
            <SwiperButton />
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