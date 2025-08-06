import { useState } from "react"
import { View, StyleSheet,Image,Text,TextInput,TouchableOpacity} from "react-native"
import {router} from "expo-router"

export default function Login(){

    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('')

    const handleLogin = async()=> {
        console.log("Log In:", email,password)
        router.push('/(tabs)/home')
    }

    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={require('@/assets/images/expenses.png')}
            />
            <View style={styles.bottomSection}>
                <Text style={styles.heading}>Log In</Text>
                
                <Text style={styles.subheading}>Email</Text>
                <TextInput style={styles.TextInput} onChangeText={setEmail} value={email} placeholder="Email"/>

                <Text style={styles.subheading}>Password</Text>
                <TextInput style={styles.TextInput} onChangeText={setPassword} value={password} placeholder="Password"/>
                

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#7B7DFF',
        justifyContent:'center',
    },
    image:{
        width:'100%',
        height: 200,
        bottom:150
    },
     content:{
        backgroundColor:'rgba(0,0,0,0.3)',
        ...StyleSheet.absoluteFillObject
    },
     bottomSection:{
        position:'absolute',
        bottom:10,
        left:0,
        right:0,
        backgroundColor:'#fff',
        paddingHorizontal:40,
        paddingVertical:40,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },
    heading:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10,
        textAlign:'center'
    },
    paragraph:{
        fontSize:17,
        marginBottom:10,
        textAlign:'justify'
    },
    subheading:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        marginBottom:10,
        textAlign:'left'   
    },
    TextInput:{
        width:'auto',
        height:45,
        borderRadius:6,
        backgroundColor:'#f2f2f2',
        paddingHorizontal:10,
        marginBottom:15,
        shadowColor:'#000',
        shadowOffset:{
            width:1,
            height:1
        },
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:2,
    },
    button:{
        backgroundColor:'#007AFF',
        paddingVertical:15,
        paddingHorizontal:50,
        borderRadius:10,
        alignSelf:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
        textAlign:'center'
    },
})