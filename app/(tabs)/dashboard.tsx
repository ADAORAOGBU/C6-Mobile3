import { Link, useRouter } from "expo-router";
import { ScrollView, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "../../styles/main2";

export default function Dashboard () {
  const router = useRouter();
  const handlePress = () => {
       alert('You clicked the link! Taking you home now...');
       router.push("/"); 
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontStyle: 'italic' }}>Welcome to Tabs Main Page!</Text>
          <Link href="/" asChild>
  <Pressable style={styles.button}>
    <Text style={styles.textStyle}>Go to Home Page</Text>
  </Pressable>
</Link>
          <Link href="/" asChild></Link>  
          <Pressable onPress={handlePress}>
            <Text style={{ color: 'blue', marginTop: 50 }}>Go to Home Page</Text>
          </Pressable>  
          
         </View>
      </ScrollView>       
      </SafeAreaView>
  )
}
    