import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />
            <Button title="Log In" onPress={() => {}} />
            
            <View style={styles.socialLoginContainer}>
                <SocialIcon type='google' style={styles.socialButton} />
                <SocialIcon type='facebook' style={styles.socialButton} />
                <SocialIcon type='apple' style={styles.socialButton} />
            </View>
            
            <Button title="Quick Login" onPress={() => {}} />
            <Button title="Guest Mode" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    socialButton: {
        flex: 1,
        marginHorizontal: 5,
    },
});

export default LoginScreen;