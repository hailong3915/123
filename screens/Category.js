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
                    images: [
                        {
                            url: 'https://res.cloudinary.com/dsg1yo23i/image/upload/v1635670942/Linh%20ki%E1%BB%87n%20th%E1%BB%A5%20%C4%91%C3%B4ng/diode-chinh-luu-10a10-10a-1000v-1_q0ewsv.jpg'
                        }
                    ],
                    name: 'Diode Chỉnh Lưu 10A10',
                    price: 5000
                },
                {
                    id: 2,
                    name: 'Diode Chỉnh Lưu 1.5A 1000V',
                    images: [{ url: 'https://res.cloudinary.com/dsg1yo23i/image/upload/v1635671164/Linh%20ki%E1%BB%87n%20th%E1%BB%A5%20%C4%91%C3%B4ng/diot2_zlwptc.png' }],
                    price: 5000
                }
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
        paddingHorizontal: 3,
        backgroundColor: `#f0f8ff`
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
});
