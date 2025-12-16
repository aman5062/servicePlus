import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router";



import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.subHeading}>Join ServicePro today!</Text>

        
        <View style={styles.form}>
            <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter full name"
            keyboardType="default"
          />
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            keyboardType="email-address"
          />
        <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
          />

          <View style={styles.buttonWrapper}>
  <Button title="Signup" onPress={() => {}} />

  <View style={styles.signupRow}>
    <Text style={styles.signupText}>Already have an account?</Text>
    <Text style={styles.signupLink} onPress={() => router.replace("/login")}>
      Login
    </Text>
    
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
