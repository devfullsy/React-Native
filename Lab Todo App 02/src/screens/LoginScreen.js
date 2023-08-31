import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../components/CustomTextInput';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import Users from './../data/Users';

const Separator = ({size}) => <View style={{marginTop: size}}></View>;

const LoginScreen = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Header isLogged={props.isLogged} title="Todo App" />
            <Separator size={100} />
            <View style={styles.inputBlock}> 
                <CustomTextInput
                    value={username}
                    placeholder={"Username"}
                    style={styles.input}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={styles.inputBlock}> 
                <CustomTextInput
                    value={password}
                    placeholder={"Password"}
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <Separator size={40} />

            <CustomButton title={"Connexion"} onPress={ () => props.onLogin(username, password) } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    inputBlock: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    input: {
        backgroundColor: 'white',
        borderColor: 'white',
    }
});

export default LoginScreen;
