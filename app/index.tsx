import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link} from "expo-router";

export default function Home () {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontStyle: 'italic' }}>Hello, TechCrush World!</Text>
          <Link href="/profile">Go to Profile</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
    