import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import TopBar from "../../components/TopBar";
import { servicesData } from "../../data/services";
import { Redirect,router } from "expo-router";

const categories = [
  "All",
  "AC Repair",
  "Baby Care",
  "Electrician",
  "Gardening",
  "Home Cleaning",
  "Painting",
  "Plumbing",
  "Printer Repair",
  "Travels",
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  // 🔥 FILTER LOGIC (CATEGORY + SEARCH)
  const filteredServices = servicesData.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <SafeAreaView style={styles.safe}>
      <TopBar title="ServicePlus" userName="Aman" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 🔍 Search Bar */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Search for a service..."
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* 🏷 Category Chips */}
        <View style={styles.chipsContainer}>
          {categories.map((cat) => (
            <Pressable
              key={cat}
              onPress={() => setSelectedCategory(cat)}
              style={[
                styles.chip,
                selectedCategory === cat && styles.activeChip,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  selectedCategory === cat && styles.activeChipText,
                ]}
              >
                {cat}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* 📋 Services List */}
        <View style={styles.list}>
          {filteredServices.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.iconBox}>
                <Text style={{ fontSize: 26 }}>🛠️</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.description}</Text>

                <View style={styles.metaRow}>
                  <Text style={styles.price}>₹{item.price}</Text>
                  <Text style={styles.time}>⏱ {item.duration}</Text>
                </View>
              </View>

              <Pressable style={styles.bookBtn}>
                <Text style={styles.bookText} onPress={()=>{router.replace("/bookings")}}>Book</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },

  /* Search */
  searchBox: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    margin: 16,
    borderRadius: 14,
    paddingHorizontal: 12,
    alignItems: "center",
    elevation: 4,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
  },

  /* Chips */
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: 10,
  },
  chip: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 3,
  },
  activeChip: {
    backgroundColor: "#4f46e5",
  },
  chipText: {
    color: "#374151",
    fontWeight: "500",
  },
  activeChipText: {
    color: "#ffffff",
  },

  /* Cards */
  list: {
    padding: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    elevation: 4,
    alignItems: "center",
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#eef2ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  category: {
    fontSize: 12,
    color: "#6b7280",
    fontWeight: "600",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  desc: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  price: {
    color: "#4f46e5",
    fontWeight: "700",
  },
  time: {
    color: "#6b7280",
    fontSize: 12,
  },
  bookBtn: {
    backgroundColor: "#4f46e5",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bookText: {
    color: "#ffffff",
    fontWeight: "600",
  },
});
