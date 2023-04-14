import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { auth } from '../../config/firebaseconfig'
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";
import React from 'react'

export default function Id() {

    const router = useRouter()

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log('saiu 😢')
                router.replace('../login/login')
            })
            .catch((error) => {
                console.error(error.message)
            });
    }

    return (
        <View style={styles.container}>
            <Text>Logado</Text>
            <Text>{auth.currentUser?.email}</Text>
            <Text>{auth.currentUser?.uid}</Text>

            <TouchableOpacity onPress={logout} style={styles.logoutBTN} >
                <Text style={styles.logoutTEXT}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    logoutBTN: {
        borderWidth: 2,
        padding: 5,
        marginTop: 20
    },
    logoutTEXT: {
        fontWeight: 'bold',
        fontSize: 15,
    }
});
