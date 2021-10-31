import React from "react";
import {
    StyleSheet,
    View,
    FlatList
} from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoryListItem from "../Components/CategoryListItem";
import SearchBar from "../Components/SearchBar";


export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    id: 1,
                    name: 'Linh kiện điện tử',
                    images: [
                        {
                            url: 'https://res.cloudinary.com/dsg1yo23i/image/upload/v1635606099/transistor_qb62ew.png'
                        }
                    ],
                },

                {
                    id: 2,
                    name: 'Vi điều khiển - Nhúng ',
                    images: [
                        {
                            url: 'https://res.cloudinary.com/dsg1yo23i/image/upload/v1635606099/processor_1_zynflc.png'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Cảm biến',
                    images: [
                        {
                            url: 'https://res.cloudinary.com/dsg1yo23i/image/upload/v1635606371/motion-sensor_1_z70687.png'
                        }
                    ],
                },
            ]
        };
    }


    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (

            <View style={styles.container}>
                <StatusBar style='dark' />
                <SearchBar />
                <FlatList
                    data={categories}
                    renderItem={({ item }) => (<CategoryListItem category={item}
                        onPress={() => navigation.navigate('Category', {
                            categoryName: item.name
                        })
                        }
                    />
                    )}
                    keyExtractor={item => `${item.id}`}
                    contentContainerStyle={{
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingVertical: 10
                    }}

                />

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#f0f8ff`,
    }
});
