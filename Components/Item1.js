import React from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import cart from '../assets/shopping-cart.png'

export default function CategoryListItem(props) {
    const { product } = props;
    return (
        <View style={styles.container}>
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
    }
});
