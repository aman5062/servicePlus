import TopBar from "@/components/TopBar";
import { View, Text,ScrollView,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";


export default function Bookings() {
  return (
    <SafeAreaView>
    <TopBar title="ServicePlus" userName="Aman" />

    <View style={{padding:16,}}>
      <Text style={{fontSize:22, color:"#111112ff", fontWeight:800}}>My Bookings</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical:16,}}
      >
        <View style={styles.card}>
          <Text style={styles.text}>All</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Pending</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Confirmed</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Completed</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.text}>Cancelled</Text>
        </View>

      </ScrollView>

      <View style={{marginTop:50, alignItems:"center",}}>
  <Text
    style={{
      backgroundColor: "#4f46e5",
      height: 50,
      width: 150,
      color: "white",
      textAlign: "center",
      textAlignVertical: "center", // Android
      lineHeight: 50, // iOS-safe trick
      borderRadius: 8,
    }}
 onPress={()=>{
  router.replace("/services")
 }} >
    Book a Service
  </Text>
</View>


    </View> 
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card:{
    backgroundColor:"#ffffffff",
    paddingVertical:8,
    paddingHorizontal:16,
    borderRadius:12,
    marginRight:12,
  },
  text:{
    fontSize:16,
  }

});