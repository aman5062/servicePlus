import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useState } from "react";
import { router } from "expo-router";
import { Alert } from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";
const DEMO_EMAIL = "admin@gmail.com";
const DEMO_PASSWORD = "123456";
export default function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

  const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert("Error", "Please enter email and password");
    return;
  }

  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    await AsyncStorage.setItem("isLoggedIn", "true");
    router.replace("/home");
  } else {
    Alert.alert("Login Failed", "Invalid email or password");
  }
};

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.heading}>ServicePro</Text>
        <Text style={styles.subHeading}>Welcome Back!</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <View style={styles.buttonWrapper}>
  <Button title="Login" onPress={handleLogin} />

  <View style={styles.signupRow}>
    <Text style={styles.signupText}>Don't have an account?</Text>
    <Text style={styles.signupLink} onPress={() => router.replace("/signup")}>
      Sign up
    </Text>
    
  </View>
  <View style={{marginTop: 20, alignItems: 'center'}}>
   <Text onPress={() => router.replace("/home")}>Continue as Guest</Text>
  </View>
</View>

        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 150,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4f46e5",
    textAlign: "center",
    marginBottom: 4,
  },
  subHeading: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 40,
  },
  form: {
    width: "100%",
  },
  label: {
    marginBottom: 6,
    marginLeft: 4,
    fontSize: 14,
    color: "#111827",
  },
  input: {
    height: 52,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 16,
    fontSize: 16,
  },
  buttonWrapper: {
    marginTop: 10,
  },
  signupRow: {
  flexDirection: "row",
  justifyContent: "center",
  marginTop: 16,
},
signupText: {
  fontSize: 14,
  color: "#6b7280",
},
signupLink: {
  fontSize: 14,
  color: "#4f46e5",
  fontWeight: "600",
  marginLeft: 6,
},

});
