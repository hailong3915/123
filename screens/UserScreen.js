import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const userScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default userScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `#f0f8ff`,
    }
});

