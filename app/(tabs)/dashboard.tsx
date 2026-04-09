import { Link } from "expo-router";
import { ScrollView, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

export default function Dashboard () {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontStyle: 'italic' }}>Welcome to Tabs Main Page!</Text>
          <Link href="/" asChild></Link>  
          <Pressable onPress={() => alert('You clicked the link!')}>
            <Text style={{ color: 'blue', marginTop: 20 }}>Go to Home Page</Text>
          </Pressable>  
          
         </View>
      </ScrollView>       
      </SafeAreaView>
  )
}
    