import { ScrollView, View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; 
import { useAuth } from "../context/AuthContext";

export default function Home() {
  // FIX 1: Use square brackets [] for useState, but curly braces {} for Context objects
  // Note: I added 'setUser' here (make sure it's in your AuthContext.tsx!)
  const context = useContext(AuthContext);

  // Safety check to make sure context exists
  if (!context) return null;
  const { user, setUser } = useAuth(); 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* FIX 2: Style must be inside the tag, and colors must be in quotes */}
      <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name:</Text>
          
          {/* FIX 3: TextInput must be imported and used with proper value/onChangeText props */}
          <View style={{ marginTop: 20 }}>
            
             <TextInput 
            value={user?.name} 
            onChangeText={(value) => setUser?.({ ...user, name: value } as any)}
            style={styles.input}
            placeholder="Enter your name"
          />
            
            <TextInput
            value={user?.email}
            onChangeText={(value) => setUser?.({...user, email:value} as any)}
            style={styles.input}
            placeholder="Enter your email address here"
            />          
         
            <Text style={{ fontStyle: 'italic' }}>Hello, TechCrush World!</Text>
            
            {/* FIX 4: Ensure the href matches your file name exactly */}
            <Link href="./auth/profilepage" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.text}>Go to Profile</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// FIX 5: Cleaned up the StyleSheet (fixed quotes and missing commas)
const styles = StyleSheet.create({
  label: { 
    fontSize: 16, 
    fontWeight: "bold", 
    marginBottom: 8 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 8,
    borderRadius: 5,
    marginBottom:5,
  },
  inputContainer: {
    padding: 20
  },
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