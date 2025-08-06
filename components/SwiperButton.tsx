import {View,StyleSheet,Text, Dimensions} from 'react-native'
import React from 'react';
import {Gesture, GestureDetector,GestureHandlerRootView} from "react-native-gesture-handler";
import Animated, {useAnimatedStyle,useSharedValue, withTiming} from 'react-native-reanimated';
import {Entypo} from "@expo/vector-icons"
import { router } from 'expo-router';



const SwiperButton =()=>{

    const END_POSITION = Dimensions.get("screen").width-90;
    const onLeft = useSharedValue(true);
    const position = useSharedValue(0)

    const panGesture= Gesture.Pan()
        .runOnJS(true)
        .onUpdate((e) =>{
            let newPositon = onLeft.value
                ? e.translationX
                : END_POSITION + e.translationX;

                if (newPositon < 0) newPositon = 0;
                if (newPositon > END_POSITION) newPositon = END_POSITION
                
                position.value = newPositon
        })

        .onEnd((e)=>{
            if (position.value > END_POSITION / 2){
                position.value = 0;
                onLeft.value = true;
                router.push("/(auth)/signup")
            } else{
                position.value = withTiming(0, {duration: 20});
                onLeft.value = true;
            }
        });

    const animatedStyle = useAnimatedStyle(() =>({
        transform: [{ translateX: position.value}],
    }));

    return (
    <GestureHandlerRootView >
        <View style={styles.sliderContainer}>
            <Text style={styles.sliderText}>Swipe To Get Started </Text>
            
                <GestureDetector gesture={panGesture}>
                    <Animated.View style={[styles.swipeBtn, animatedStyle]}>
                        <Entypo name='chevron-thin-right' size={24} color="#7B7DFF"/>
                    </Animated.View>
                </GestureDetector>  
        </View>
    </GestureHandlerRootView>
    )
}

export default SwiperButton;

const styles = StyleSheet.create({
    sliderContainer:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        width:"100%",
        backgroundColor:"#7B7DFF",
        position:"relative",
        height:50,
        overflow:"hidden",
        borderRadius:50,
    },
    sliderText:{
        color:"#fff",
        fontSize:18,
    },
    swipeBtn:{
        width:40,
        height:40,
        backgroundColor:"#fff",
        position:"absolute",
        left:5,
        justifyContent:"center",
        alignContent:"center",
        alignItems:'center',
        borderRadius:50
    }
})