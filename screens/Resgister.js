import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    StyleSheet
} from "react-native";
import { Constants } from 'expo';
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import validationSchema from "../Components/validation";
import FormField from "../Components/FormField";


export default function RegisterForm() {
    function onSubmitHandler(values) {

        Alert.alert(
            "Register Successfully!",
            "Form data: " + JSON.stringify(values)
        );
    }

    function isFormValid(isValid, touched) {
        return isValid && Object.keys(touched).length !== 0;
    }

    return (
        <>
            <SafeAreaView style={styles.topSafeArea} />

            <StatusBar style="light" />

            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Register</Text>
                </View>

                <KeyboardAwareScrollView
                    style={styles.content}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    extraScrollHeight={150}
                >

                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                        }}
                        onSubmit={onSubmitHandler}
                        validationSchema={validationSchema}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                            isValid,
                        }) => (
                            <>
                                <FormField
                                    field="firstName"
                                    label="First Name"
                                    autoCapitalize="words"
                                    values={values}
                                    touched={touched}
                                    errors={errors}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />

                                <FormField
                                    field="lastName"
                                    label="Last Name"
                                    autoCapitalize="words"
                                    values={values}
                                    touched={touched}
                                    errors={errors}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />

                                <FormField
                                    field="email"
                                    label="Email Address"
                                    values={values}
                                    touched={touched}
                                    errors={errors}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />

                                <FormField
                                    field="password"
                                    label="Password"
                                    secureTextEntry={true}
                                    values={values}
                                    touched={touched}
                                    errors={errors}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />

                                <FormField
                                    field="confirmPassword"
                                    label="Confirm Password"
                                    secureTextEntry={true}
                                    values={values}
                                    touched={touched}
                                    errors={errors}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />

                                <TouchableOpacity
                                    disabled={!isFormValid(isValid, touched)}
                                    onPress={handleSubmit}
                                >
                                    <View
                                        style={[
                                            styles.button,
                                            {
                                                opacity: isFormValid(isValid, touched) ? 1 : 0.5,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.buttonText}>SUBMIT</Text>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
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


