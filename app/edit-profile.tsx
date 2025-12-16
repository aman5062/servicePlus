import TopBar from "@/components/TopBar";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";

export default function EditProfile() {
  // ----- Demo editable data -----
  const [fullName, setFullName] = useState("Aman");
  const [email, setEmail] = useState("akblackweb@gmail.com");
  const [phone, setPhone] = useState("6207753704");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    console.log({
      fullName,
      email,
      phone,
      password,
    });
    // Later → API call
  };

  return (
    <SafeAreaView style={styles.safe}>
      <TopBar title="Edit Profile" userName="Aman" />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Back to profile */}
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backText}>← Back to Profile</Text>
        </Pressable>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.heading}>Edit Profile</Text>

          {/* Full Name */}
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
            placeholder="Enter full name"
          />

          {/* Email */}
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Phone */}
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            keyboardType="number-pad"
          />

          {/* Divider */}
          <View style={styles.divider} />

          {/* Password */}
          <Text style={styles.label}>New Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Min. 6 characters (Optional)"
            secureTextEntry
          />

          <Text style={styles.helper}>
            Leave blank if you don't want to change it.
          </Text>

          {/* Save Button */}
          <Pressable style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveText}>Save Changes</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  container: {
    padding: 16,
  },
  backText: {
    color: "#4f46e5",
    marginBottom: 12,
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 50,
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 16,
  },
  helper: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 6,
  },
  saveBtn: {
    marginTop: 20,
    backgroundColor: "#6366f1",
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  saveText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
