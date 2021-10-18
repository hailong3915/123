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
                { id: 1, name: 'Linh kiện bán dẫn' },
                { id: 2, name: 'Linh kiện thụ động' },
                { id: 3, name: 'Vi điều khiển - Kit phát triển' },
                { id: 4, name: 'Cảm biến' },
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
                    renderItem={({ item }) => <CategoryListItem category={item}
                        onPress={() => navigation.navigate('Category', {
                            'categoryName': item.name
                        })
                        }
                    />}
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
