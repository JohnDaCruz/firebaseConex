import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/firebaseconfig'
import react, { useState, useEffect } from "react";
import { useRouter } from "expo-router";

export default function Page() {

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const router = useRouter()

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('./user/[id]')
      }
    })
    return listener
  }, [])

  const login = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email, 'logado')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage)
      });
  }
  return (
    <View style={styles.container}>

      <Text style={styles.welcome}>Welcome</Text>
      <TextInput style={styles.input} placeholder="Email..." value={email} onChangeText={(text) => { setEmail(text) }} />
      <TextInput style={styles.input} placeholder="Senha..." value={senha} onChangeText={(text) => { setSenha(text) }} />

      <View style={styles.inputsView}>
        <TouchableOpacity onPress={login}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.textRegister}>Registrar-se</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    width: 300,
    borderWidth: 3,
    padding: 9,
    borderRadius: 15,
    margin: 20
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 50
  },
  inputsView: {
    alignItems: 'center',
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20
  },
  textRegister: {

  }
});
