import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

export default function LOGIN () {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontStyle: 'italic' }}>WELCOME TO LOGIN PAGE!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
    