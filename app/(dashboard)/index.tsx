import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

export default function Dashboard () {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontStyle: 'italic' }}>Welcome to Tabs Main Page!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
    