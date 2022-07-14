import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'

const LoginScreen = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleEmailInput = (input) => {
        setEmail(input)
    }

    const handlePasswordInput = (input) => {
        setPassword(input);
    }

    const handleLogin = () => {

    }

    return (
        <KeyboardAvoidingView style={tw`flex-1 items-center justify-center`}>
            <View style={tw``}>
                <Text style={tw`text-3xl font-semibold text-center`}>Connecte toi !</Text>
                <Text style={tw`text-xs font-light text-gray-600 mb-5`}>Et commence à collecter les easy trots !</Text>
            </View>
            <View style={tw`items-center w-9/12`}>
                <TextInput style={styles.input} placeholder='Email' onChangeText={handleEmailInput} />
                <TextInput style={styles.input} placeholder='Password' onChangeText={handlePasswordInput} secureTextEntry />
                <TouchableOpacity
                    style={tw`flex-row items-center py-3 mt-3 bg-blue-500 text-white rounded-lg px-10 `}
                    onPress={handleLogin}
                >
                    <Text style={"text-white font-semibold"}>Login</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    input:
    {
        width: "80%",
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center"
    }
})