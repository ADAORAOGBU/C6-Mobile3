import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Home () {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontStyle: 'italic' }}>Hello, TechCrush World!</Text>
          <Link href="/profile" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Go to Profile</Text>
      </Pressable>
    </Link>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}
   
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
