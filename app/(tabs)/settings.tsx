import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Settings () {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontStyle: 'italic' }}>Settings Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}