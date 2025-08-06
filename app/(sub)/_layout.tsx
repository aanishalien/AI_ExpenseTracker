import { Tabs  } from 'expo-router';
import {Stack} from "expo-router";
import {Provider as PaperProvider} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout() {
  

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Stack>
          <Stack.Screen name="bank_details" options={{headerShown:false}} />
          
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  );
}