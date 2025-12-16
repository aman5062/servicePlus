import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  title: string;
  userName: string;
  onMenuPress?: () => void;
};

export default function TopBar({ title, userName, onMenuPress }: Props) {
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <View style={styles.container}>
      {/* LEFT - Title */}
      <Text style={styles.title}>{title}</Text>

      {/* RIGHT - User circle */}
      <Pressable style={styles.avatar} onPress={onMenuPress}>
        <Text style={styles.avatarText}>{firstLetter}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    // shadow (Android)
    elevation: 4,

    // shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
