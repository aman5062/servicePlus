import TopBar from "@/components/TopBar";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

/* -------------------- SCREEN -------------------- */
export default function Profile() {

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("isLoggedIn");
      router.replace("/login");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <TopBar title="ServicePlus" userName="Aman" />

      <ScrollView contentContainerStyle={styles.container}>
        {/* -------- Profile Card -------- */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>

          <View>
            <Text style={styles.name}>Aman</Text>
            <Text style={styles.email}>akblackweb@gmail.com</Text>
          </View>
        </View>

        {/* -------- Menu List -------- */}
        <View style={styles.menuCard}>
          <MenuItem
            icon="calendar-outline"
            label="My Bookings"
            onPress={() => router.push("/bookings")}
          />

          <MenuItem
            icon="person-outline"
            label="Edit Profile"
            onPress={() => router.push("/edit-profile")}
          />

          <MenuItem
            icon="notifications-outline"
            label="Notifications"
            onPress={() => router.push("/notifications")}
          />

          <MenuItem
            icon="help-circle-outline"
            label="Help & Support"
            onPress={() => router.push("/help")}
          />
        </View>

        {/* -------- Logout -------- */}
        <Pressable style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

/* -------------------- MENU ITEM -------------------- */
function MenuItem({
  icon,
  label,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={styles.menuItem}
      android_ripple={{ color: "#e5e7eb" }}
      onPress={onPress}
    >
      <View style={styles.menuLeft}>
        <Ionicons name={icon} size={22} color="#4f46e5" />
        <Text style={styles.menuText}>{label}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
    </Pressable>
  );
}

/* -------------------- STYLES -------------------- */
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  container: {
    padding: 16,
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    gap: 12,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  email: {
    color: "#6b7280",
    marginTop: 2,
  },

  menuCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuText: {
    fontSize: 16,
  },

  logoutBtn: {
    marginTop: 24,
    borderWidth: 1.5,
    borderColor: "#ef4444",
    borderRadius: 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    color: "#ef4444",
    fontSize: 16,
    fontWeight: "600",
  },
});
