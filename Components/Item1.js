import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import transistor from "../assets/transistor3.png"
import cart from '../assets/shopping-cart.png'

export default function CategoryListItem(props) {
    const { product } = props;
    return (
        <View style={styles.container}>
            <Image style={styles.img}
                source={{ uri: product.images[0].url }}
            />
            <Text>{product.name}</Text>
            <View style={styles.priceRow}>
                <Text style={styles.price}>{product.price}</Text>
                <TouchableOpacity>
                    <Image style={styles.cartImage} source={cart} />
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
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
    cartImage: {
        marginTop: 10,
        width: 25,
        height: 25,
        shadowRadius: 10
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    price: {
        flex: 1,
    },
    img: {
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    }
});
