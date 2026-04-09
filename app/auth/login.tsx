import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../../styles/main2";

export default function SimpleLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
  if (username && password) {
        Alert.alert("Success", `Welcome, ${username}!`);
  } else {
        Alert.alert("Error", "Please fill in both fields");
  }
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.textStyle}
            
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textStyle}
                        value={password}
            onChangeText={setPassword}
            secureTextEntry={true} // Hides the password dots
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}