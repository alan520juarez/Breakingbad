import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import baseStyles from '../../theme/LoginScreen';

interface Props extends NativeStackScreenProps<any, any>{}

const Component = (props: Props) => {
    const [email, sentEmail] = useState('');
    const [password, setPassword] = useState('');

    const {navigation} = props;

    useEffect(() => {
        console.log('Component loaded');
    }, [])

    useEffect(() => {
        console.log(`Email => ${email}`);
        console.log(`Email => ${password}`);
    }, [email, password])

    const onLogin = () =>{
        if(email === '1' && password==='1')
            console.log("welcome")
            navigation.navigate('Home');

    }

    return (
        <View style={styles.Container}>
            <Text style={baseStyles.Title}>LOGIN SCREEN</Text>
            <TextInput 
                placeholder="Type your email"
                keyboardType="email-address"
                style={styles.Input}
                placeholderTextColor="#666"
                onChangeText={sentEmail}
            />
            <TextInput
                placeholder="Type your password"
                secureTextEntry={true} 
                style={styles.Input}
                placeholderTextColor="#666"
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.Button} onPress={onLogin}>
                <Text style={styles.BtnText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        alignItems: 'center',
        backgroundColor: "#d2ea32",
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
    },
    Input:{
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 0.5,
        color: 'black',
        marginTop: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '80%',
    },
    Button:{
        backgroundColor: "#feba02",
        borderRadius: 5,
        margin: "2%",
        padding: "2%",
    },
    BtnText:{
        color: "black",
        fontSize: 20,
    },
});

export default Component;