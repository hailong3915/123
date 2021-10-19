import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Resgister from "../screens/Resgister"

const userScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Resgister />
        </View>
    );
};

export default userScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#f0f8ff`
    }
});

