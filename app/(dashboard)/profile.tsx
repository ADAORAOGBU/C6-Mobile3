import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

export default function Profile () {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontStyle: 'italic' }}>Welcome to Your Tabs Profile page!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
    