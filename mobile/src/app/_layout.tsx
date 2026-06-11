import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context"; // On utilise ça à la place !
import { StatusBar } from "expo-status-bar";

// Récupère ta clé depuis le fichier .env
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export default function RootLayout() {
  if (!publishableKey) {
    throw new Error("Fichier .env manquant ou EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY non configurée.");
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      {/* SafeAreaView remplace avantageusement SafeScreen et évite l'erreur */}
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
        <Slot />
        <StatusBar style="dark" />
      </SafeAreaView>
    </ClerkProvider>
  );
}