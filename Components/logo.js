import React from "react";
import {
    Image,
    View,
    Text,
    StyleSheet
} from "react-native";
import Logo from "../assets/hardware.png";

export default function App(props) {
    return (
        <>
            <View style={styles.container}>
                <Image source={Logo} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        zIndex: 10,
        position: 'relative',
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#FFF',

    },


});