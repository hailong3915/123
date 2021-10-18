import React from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import transistor from "../assets/transistor3.png"


export default function CategoryListItem(props) {
    const { category, onPress } = props;
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
        >
            <View style={styles.container}>
                <Image style={styles.transistorImage} source={transistor} />
                <Text style={styles.textButton}>{category.name}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    },
    transistorImage: {
        width: 60,
        height: 64
    },
    textButton: {
        fontSize: 25,
        fontWeight: 'bold'
    }

});