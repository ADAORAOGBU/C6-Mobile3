import { ScrollView, View, Text, Pressable, StyleSheet, TouchableOpacity,TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link} from "expo-router";
import { useState } from "react";
import styles from "../../styles/main2";


export default function Profile (){
  
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const handleSubmit = () => {
    alert(`Welcome, ${firstName} ${lastName}! Logging in as ${username}...`);
  
    setFirstName('');
    setLastName('');
    setUsername('');
    setPassword('');
    setShowForm(false);
  };
    
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Welcome TechCrush Cohort 6</Text>
        </View>
        {/* If showForm is FALSE, show the big LOGIN button */}
        {!showForm ? (
          <TouchableOpacity style={styles.mainButton} onPress={() => setShowForm(true)}>
            <Text style={styles.buttonText}>CLICK TO CREATE PROFILE</Text>
          </TouchableOpacity>
        ) : (
                 <View style={styles.formContainer}>
            
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.inputBox}
              placeholder='Enter First Name'
              value={firstName}
              onChangeText={setFirstName}
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.inputBox}
              placeholder='Enter Last Name'
              value={lastName}
              onChangeText={setLastName}
            />

            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.inputBox}
              placeholder='Enter Username'
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.inputBox}
              placeholder='Enter Password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowForm(false)}>
              <Text style={styles.cancelButton}>Go Back</Text>
            </TouchableOpacity>
            
          </View>
        )}
                    </ScrollView>
    </SafeAreaView>
  );
}

  