import React from 'react';
import {View, StyleSheet,TouchableOpacity, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {COLORS,SIZES} from "../constants/index"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
    return (
        <SafeAreaView style={{marginTop:18}}>
            <View styles={styles.appBarWrapper}> 
                <View style={styles.appBar}>
                    <MaterialCommunityIcons name="map-marker" color={COLORS.black} size={24}/>
                    <Text style={styles.location}>Kinshasa Rdc</Text>

                    <View style={{alignItems: "flex-end"}}>
                        <View style={styles.cartCount}>
                             <Text style={styles.cartNumber}>8</Text>
                        </View>
                        <TouchableOpacity>
                             <MaterialCommunityIcons name="shopping" color={COLORS.black} size={24}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textStyles: {
        fontFamily: "bold",
        fontSize:40,
        color: COLORS.black
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small,
        
    },
    appBar: {
        flexDirection: "row",
        justifyContent:  'space-between',
        alignItems: 'center',
        color: COLORS.black
    },
    location: {
        color: COLORS.black,
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartCount: {
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16,
        color:"black",
        borderRadius: 8,
        alignItems: "center",
        backgroundColor:"green",
        justifyContent:"center",
        zIndex:999
    },
    cartNumber: {
        fontFamily: "regular",
        fontSize: 10,
        fontWeight: "600",
        color: COLORS.black
    }
})

export default Home;
