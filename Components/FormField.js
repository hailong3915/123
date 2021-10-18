import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";


export default function FormField({
    field,
    label,
    secureTextEntry,
    autoCapitalize,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
}) {
    return (
        <View style={styles.formGroup}>
            <Text style={styles.label}>{label}</Text>

            <TextInput
                style={styles.input}
                value={values[field]}
                onChangeText={handleChange(field)}
                onBlur={handleBlur(field)}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize || "none"}
            />

            {touched[field] && errors[field] ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{errors[field]}</Text>
                </View>
            ) : null}
        </View>
    );
}

const HEADER_BACKGROUND = "#3498db";
const CONTENT_BACKGROUND = "#f9f9f9";

const styles = StyleSheet.create({
    topSafeArea: {
        backgroundColor: HEADER_BACKGROUND,
    },
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor:
            Platform.OS === "ios" ? CONTENT_BACKGROUND : HEADER_BACKGROUND,
    },
    header: {
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: HEADER_BACKGROUND,
    },
    headerText: {
        color: "#fff",
        fontSize: 18,
    },
    content: {
        padding: 20,
        backgroundColor: CONTENT_BACKGROUND,
    },
    formGroup: {
        marginBottom: 10,
    },
    label: {
        color: "#7d7e79",
        fontSize: 16,
        lineHeight: 30,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#e3e3e3",
        backgroundColor: "#fff",
    },
    errorContainer: {
        marginVertical: 5,
    },
    errorText: {
        color: "#ff7675",
    },
    button: {
        marginTop: 20,
        backgroundColor: "#2980b9",
        padding: 15,
        borderRadius: 15,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
});