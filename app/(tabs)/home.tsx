import { View, StyleSheet,Text } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import NavBar from "@/components/NavBar"


export default function Welcome(){
    return(
        <View style={styles.container}>
            <NavBar/>
            <View style={styles.card}>
                <Text style={styles.title}>Aanish Rizmy</Text>
                <View style={styles.row}>
                    <Text style={styles.subtitle}>Available Balance</Text>
                    <Icon name="money" size={30} color="#fff" style={styles.mapicon}/>
                </View>
                <Text style={styles.paragraph}>Rs 100,000</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff',
        
    },
    card:{
        width:280,
        backgroundColor:'#7B7DFF',
        marginHorizontal:10,
        padding:10,
        borderRadius:8,
        elevation:3,
        shadowColor:'#000',
        shadowOffset:{width:0,height:1},
        shadowRadius:4,
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginRight:'auto',
        color:'white',
        marginBottom:20
    },
    mapicon:{
        
        marginLeft:'auto'
    },
    subtitle:{
        flex:1,
        fontSize:15,
        marginRight:'auto',
        color:'white'
    },
    row:{
        flexDirection:"row",
        
    },
    paragraph:{
        fontWeight:'bold',
        fontSize:18,
        marginRight:'auto',
        color:'white',
    }
})