import TopBar from "@/components/TopBar";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
  Linking
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";

const PHONE_NUMBER = "+916207753704";
/* Enable animation for Android */
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

export default function Help() {
  return (
    <SafeAreaView style={styles.safe}>
      <TopBar title="ServicePlus" userName="Aman" />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} />
          </Pressable>
          <Text style={styles.headerText}>Help & Support</Text>
        </View>

        {/* Support Card */}
        <View style={styles.supportCard}>
          <Text style={styles.supportTitle}>Need personalized help?</Text>
          <Text style={styles.supportText}>
            Our team is available 24/7 to assist you with any questions or issues.
          </Text>

          <View style={styles.actionRow}>
         <Pressable
          style={styles.callBtn}
          onPress={() => Linking.openURL(`tel:${PHONE_NUMBER}`)}
        >
          <Ionicons name="call-outline" size={18} color="#6366f1" />
          <Text style={styles.callText}>Call Us</Text>
        </Pressable>

            <Pressable style={styles.emailBtn}>
              <Ionicons name="mail-outline" size={18} color="#ffffff" />
              <Text style={styles.emailText}>Email</Text>
            </Pressable>
          </View>
        </View>

        {/* FAQ */}
        <Text style={styles.faqTitle}>Frequently Asked Questions</Text>

        <FAQItem
          question="How do I cancel a booking?"
          answer="You can cancel a booking from the My Bookings section before the service starts."
        />
        <FAQItem
          question="How do I use a coupon code?"
          answer="Apply the coupon code during checkout to receive discounts on eligible services."
        />
        <FAQItem
          question="Is my payment secure?"
          answer="Yes, all payments are encrypted and processed through secure payment gateways."
        />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- FAQ ITEM ---------------- */

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <View style={styles.faqCard}>
      <Pressable style={styles.faqHeader} onPress={toggle}>
        <Text style={styles.faqQuestion}>{question}</Text>
        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          color="#6b7280"
        />
      </Pressable>

      {open && <Text style={styles.faqAnswer}>{answer}</Text>}
    </View>
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

  supportCard: {
    backgroundColor: "#7c6cf5",
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  supportTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
  },
  supportText: {
    color: "#e0e7ff",
    marginTop: 8,
    lineHeight: 20,
  },
  actionRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
  },
  callBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 18,
    height: 44,
    borderRadius: 22,
    gap: 6,
  },
  callText: {
    color: "#6366f1",
    fontWeight: "600",
  },
  emailBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
    paddingHorizontal: 18,
    height: 44,
    borderRadius: 22,
    gap: 6,
  },
  emailText: {
    color: "#ffffff",
    fontWeight: "600",
  },

  faqTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  faqCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    marginBottom: 12,
    overflow: "hidden",
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  faqQuestion: {
    fontSize: 15,
    fontWeight: "500",
    flex: 1,
    marginRight: 10,
  },
  faqAnswer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    color: "#4b5563",
    lineHeight: 20,
  },
});
