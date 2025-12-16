import TopBar from "@/components/TopBar";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Notifications() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Top Header */}
      <TopBar title="ServicePlus" userName="Aman" />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Title */}
        <View style={styles.headerRow}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#111827" />
          </Pressable>
          <Text style={styles.headerText}>My Notifications</Text>
        </View>

        {/* Notification Card */}
        <View style={styles.notificationCard}>
          <View style={styles.iconWrapper}>
            <Ionicons name="checkmark" size={18} color="#16a34a" />
          </View>

          <View style={styles.content}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>Welcome to Service+Plus!</Text>
              <Text style={styles.date}>Dec 09</Text>
            </View>

            <Text style={styles.message}>
              Thanks for joining our platform. Check here for updates and offers.
            </Text>
          </View>
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
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
  },

  notificationCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  iconWrapper: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#dcfce7",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    color: "#6b7280",
  },
  message: {
    marginTop: 6,
    color: "#4b5563",
    lineHeight: 18,
  },
});
