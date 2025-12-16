import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../../components/TopBar";
import { router } from "expo-router";

export default function Home() {
  const Categories = [
  {
    id: "1",
    title: "AC Repair",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  },
  {
    id: "2",
    title: "Baby care",
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
  },
  {
    id: "3",
    title: "Electrician",
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965563.png",
  },
  {
    id: "4",
    title: "Gardening",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    id: "5",
    title: "Home Cleaning",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046781.png",
  },
  {
    id: "6",
    title: "Painting",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046865.png",
  }
];
const recommendedServices = [
  {
    id: "1",
    category: "BABY CARE",
    title: "Hourly Babysitting",
    rating: 4.8,
    duration: "60m",
    price: 20,
    image: null, // icon placeholder
  },
  {
    id: "2",
    category: "PLUMBING",
    title: "Leak Repair",
    rating: 4.8,
    duration: "45m",
    price: 30,
    image: null,
  },
  {
    id: "3",
    category: "ELECTRICIAN",
    title: "Fan Installation",
    rating: 4.8,
    duration: "30m",
    price: 25,
    image: "https://images.unsplash.com/photo-1581579186988-7d8f6a02d5a4",
  },
];
const reviews =[
  {
    id: "1",
    user: "John Doe",
    rating: 5,
    comment: "Excellent service! The technician was professional and efficient.",
  },
  {
    id: "2",
    user: "Jane Smith",
    rating: 4,
    comment: "Good experience overall, but the appointment was slightly delayed.",
  },
  {
    id: "3",
    user: "Mike Johnson",
    rating: 5,
    comment: "Highly recommend! The team went above and beyond to fix my issue.",
  }
];

  return (
    <SafeAreaView style={styles.safe}>
      <TopBar title="ServicePlus" userName="Aman" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>🚀 #1 Home Service App</Text>
        </View>

        {/* Headline */}
        <Text style={styles.heading}>Professional Services</Text>
        <Text style={styles.headingAccent}>At Your Doorstep</Text>

        {/* Subtitle */}
        <Text style={styles.subText}>
          Book trusted professionals for cleaning, plumbing, baby care,
          and more in just a few clicks.
        </Text>

        {/* Search Box */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Search 'Baby Care'"
            placeholderTextColor="#9ca3af"
            style={styles.searchInput}
          />
          <Pressable style={styles.searchButton}>
            <Text style={styles.arrow}>➜</Text>
          </Pressable>
        </View>

        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:30, marginBottom:10}}>
          <View>
            <Text style={{fontSize:25, fontWeight:800, color:"#111827", marginTop:10}}>Categories</Text>
          <Text style={{color:"#837f7fff"}}>What do you need help with?</Text>
          </View>
          <View>
            <Text onPress={()=>{
              router.replace("/services")}} style={{color:"#4f46e5"}}>View All {">"}</Text>
          </View>
        </View>
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.horizontalList}
>
  {Categories.map((item) => (
    <View key={item.id} style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  ))}

  
</ScrollView>
{/* Header */}
<View style={styles.sectionHeader}>
  <Text style={styles.sectionTitle}>Recommended</Text>
  <Text onPress={()=>{
              router.replace("/services")}} style={styles.seeAll}>See All</Text>
</View>

{/* Cards */}
{recommendedServices.map((item) => (
  <View key={item.id} style={styles.card2}>
    {/* Left Image */}
    <View style={styles.imageBox}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image2} />
      ) : (
        <Text style={styles.placeholderIcon}>🛠️</Text>
      )}
    </View>

    {/* Middle Content */}
    <View style={styles.cardContent}>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.cardTitle}>{item.title}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.star}>⭐</Text>
        <Text style={styles.metaText}>{item.rating}</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.metaText}>⏱ {item.duration}</Text>
      </View>

      <Text style={styles.price}>₹{item.price}</Text>
    </View>

    {/* Book Button */}
    <Pressable style={styles.bookBtn}>
      <Text style={styles.bookText}>Book</Text>
    </Pressable>
  </View>
))}
  <View>
    <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.horizontalList2}>
    {reviews.map((item) => (
      <View key={item.id} style={styles.card3}>
        <View style={styles.imageBox2}>
          <Text style={{fontSize:30, color:"white"}}>{item.user.charAt(0)}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.title2}>{item.user}</Text>
        <Text style={{fontSize:12, color:"#fbbf24"}}>{"⭐".repeat(item.rating)}</Text>
        <Text style={{marginTop:6, color:"#6b7280", width:160}}>"{item.comment}"</Text>
        </View>
        </View>))}
</ScrollView>
  </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContent: {
    padding: 20,
  },

  /* Badge */
  badge: {
    alignSelf: "center",
    backgroundColor: "#eef2ff",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  badgeText: {
    color: "#4f46e5",
    fontWeight: "600",
    fontSize: 13,
  },

  /* Headings */
  heading: {
    fontSize: 34,
    fontWeight: "800",
    textAlign: "center",
    color: "#111827",
  },
  headingAccent: {
    fontSize: 34,
    fontWeight: "800",
    textAlign: "center",
    color: "#6366f1",
    marginBottom: 16,
  },

  /* Subtitle */
  subText: {
    fontSize: 16,
    textAlign: "center",
    color: "#6b7280",
    lineHeight: 24,
    marginBottom: 32,
  },

  /* Search */
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
  searchButton: {
    backgroundColor: "#4f46e5",
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
  horizontalList: {
  paddingVertical: 16,
},
horizontalList2: {
  paddingVertical: 20,
  paddingHorizontal:4,
},
card: {
  width: 90,
  alignItems: "center",
  marginRight: 16,
},
imageWrapper: {
  width: 64,
  height: 64,
  borderRadius: 32,
  backgroundColor: "#eef2ff",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 8,
},
image: {
  width: 36,
  height: 36,
  resizeMode: "contain",
},
title: {
  fontSize: 13,
  color: "#111827",
  textAlign: "center",
},
title2: {
  fontSize: 13,
  color: "#111827",
  textAlign: "left",
},
sectionHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
  marginTop: 10,
},
sectionTitle: {
  fontSize: 20,
  fontWeight: "700",
  color: "#111827",
},
seeAll: {
  color: "#4f46e5",
  fontWeight: "600",
},

card2: {
  flexDirection: "row",
  backgroundColor: "#ffffff",
  borderRadius: 16,
  padding: 14,
  marginBottom: 14,

  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 10,
  elevation: 4,
},
card3: {
  flexDirection: "row",
  backgroundColor: "#ffffff",
  borderRadius: 16,
  padding: 14,
  marginBottom: 14,
  marginRight:12,
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 10,
  elevation: 4,
},
imageBox: {
  width: 64,
  height: 64,
  borderRadius: 12,
  backgroundColor: "#f3f4f6",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 12,
},
imageBox2: {
  width: 64,
  height: 64,
  borderRadius: 50,
  backgroundColor: "#4f46e5",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 12,
},
image2: {
  width: "100%",
  height: "100%",
  borderRadius: 12,
},
placeholderIcon: {
  fontSize: 24,
},

cardContent: {
  flex: 1,
},
category: {
  fontSize: 12,
  fontWeight: "600",
  color: "#6b7280",
  marginBottom: 2,
},
cardTitle: {
  fontSize: 16,
  fontWeight: "700",
  color: "#111827",
  marginBottom: 6,
},
metaRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 6,
},
star: {
  marginRight: 4,
},
metaText: {
  fontSize: 13,
  color: "#6b7280",
},
dot: {
  marginHorizontal: 6,
  color: "#9ca3af",
},
price: {
  fontSize: 18,
  fontWeight: "700",
  color: "#4f46e5",
},

bookBtn: {
  backgroundColor: "#4f46e5",
  paddingHorizontal: 16,
  paddingVertical: 10,
  borderRadius: 20,
  alignSelf: "center",
},
bookText: {
  color: "#ffffff",
  fontWeight: "600",
},

});
