import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen name="index" options={{
       title: "Home",
       tabBarIcon: ({ color, size }) => 
       <Ionicons name="home" color={color} size={size} /> }} />
      <Tabs.Screen name="home" options={{ tabBarIcon: ({ color, size }) => 
        <Ionicons name="person" color={color} size={size} /> }}
         />
        {/* Tab 3: Settings (The new one!) */}
      <Tabs.Screen 
        name="settings" 
        options={{ 
          title: "Settings",
          tabBarIcon: ({ color='light blue', size }) => <Ionicons name="settings" color={color} size={size} />,
        }} 
      />

          <Tabs.Screen 
        name="notifications" 
        options={{ 
          title: "Alerts",
          tabBarIcon: ({ color, size }) => <Ionicons name="notifications" color={color} size={size} />,
        }} 
      />

    </Tabs>
  );
}
    

