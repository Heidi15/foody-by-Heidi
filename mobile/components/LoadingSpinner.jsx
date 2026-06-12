import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";


// - message : Le texte à afficher sous le spinner (par défaut : "Loading...")
// - size : La taille du spinner (par défaut : "large")
export default function LoadingSpinner({ message = "Loading...", size = "large" }) {
  return (
    // Conteneur principal qui prend tout l'écran et centre les éléments
    <View style={styles.container}>
      {/* Sous-conteneur pour regrouper verticalement le spinner et le texte */}
      <View style={styles.content}>
        {/* L'indicateur de chargement animé natif de React Native */}
        <ActivityIndicator size={size} color={COLORS.primary} />
        {/* Affichage du message textuel personnalisé sous le spinner */}
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

// Déclaration de la feuille de style (StyleSheet)
const styles = StyleSheet.create({
  container: {
    flex: 1,                 // Occupe 100% de la hauteur et largeur disponibles
    justifyContent: "center", // Centre le contenu verticalement
    alignItems: "center",     // Centre le contenu horizontalement
    padding: 32,             // Ajoute une marge interne sur les côtés
    backgroundColor: COLORS.background, // Applique la couleur de fond de l'application
  },
  content: {
    alignItems: "center",     // Aligne le spinner et le texte sur le même axe central
    gap: 16,                  // Crée un espace automatique de 16px entre le spinner et le texte
  },
  message: {
    fontSize: 16,             // Taille de la police d'écriture
    color: COLORS.textLight,  // Couleur gris clair/atténué pour le texte
    textAlign: "center",      // Centre le texte si le message fait plusieurs lignes
  },
});