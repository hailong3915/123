import React from "react";
import {
    StyleSheet,
    View,
    FlatList
} from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchBar from "../Components/SearchBar";
import Item1 from "../Components/Item1"


export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    images: [{ url: 'https://drive.google.com/file/d/1RA_P4zne05S2HxzhXSF6vTPLaOOyECos/view' }],
                    name: 'Diot 1',
                    price: 5000
                },
                { id: 2, name: 'Diot 2', price: 5000 }
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style='dark' />
                <SearchBar />
                <FlatList
                    data={this.state.products}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <View style={styles.wrapper}>
                            <Item1 product={item} />
                        </View>
                    }
                    keyExtractor={item => `${item.id}`} />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#f0f8ff`,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
});
