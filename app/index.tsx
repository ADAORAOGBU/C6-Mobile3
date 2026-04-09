import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter} from "expo-router";

export default function Home () {
  const routernavigator = useRouter();

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontStyle: 'italic' }}>Hello, TechCrush World!</Text>
          {/* This button now uses the useRouter hook */}
          <Pressable 
            style={styles.button} 
            onPress={() => routernavigator.push("/profile")}>
            <Text style={styles.text}>Go to Profile (via Router)</Text>
          </Pressable>
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
