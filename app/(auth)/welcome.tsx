import { View, StyleSheet,Image,Text } from "react-native"
import SwiperButton from "@/components/SwiperButton"


export default function Welcome(){
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={require('@/assets/images/expenses.png')}
            />
            <View style={styles.bottomSection}>
                <Text style={styles.heading}>Manage Your Expenses With AIO</Text>
                <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non sodales arcu. Duis vitae mattis lorem. Pellentesque in vestibulum dolor. Curabitur pulvinar porta ante ut porta. Sed in condimentum justo, non aliquam neque. Praesent mollis ultricies dui dictum tincidunt. Pellentesque ultricies luctus tellus, et accumsan velit rhoncus ac. </Text>
                <SwiperButton />
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
    }
})