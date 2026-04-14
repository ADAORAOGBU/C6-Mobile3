import React, { useContext } from 'react'; 
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import { AuthContext } from "@/context/AuthContext"; // Importing your 'Radio Station'


export default function Profilepage () {
    const auth = useContext(AuthContext);
  // 2. Safety Check: If the context is missing, show a fallback
  if (!auth || !auth.user) {
    return (
      <View style={styles.container}>
        <Text>No user logged in.</Text>
      </View>
    );
  }
  // 3. Destructure the user for easier typing
  const { user, setUser } = auth;

  return (
    <ScrollView style={styles.scroll}>    
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Profile Page</Text>
        
        {/* Displaying the data from Context */}
        <View style={styles.card}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
          
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{user.name}</Text>

          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>{user.age}</Text>

          <Text style={styles.label}>Address:</Text>
          <TextInput             
            value={user?.address ||""}
            style={styles.input}
            onChangeText={(val) => setUser({ ...user, address: val} as any)}
            autoCapitalize="none"
            placeholder="Enter address"
            />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '100%' },
  label: { color: 'gray', fontSize: 12, marginTop: 10 },
  value: { fontSize: 18, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginTop: 5 }

});


