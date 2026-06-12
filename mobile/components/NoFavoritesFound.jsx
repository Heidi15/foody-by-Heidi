import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { favoritesStyles } from "@/assets/styles/favorites.styles";

// Composant affiché lorsque l'utilisateur n'a pas encore ajouté de recettes à ses favoris

function NoFavoritesFound() {
  const router = useRouter();

  return (
    <View style={favoritesStyles.emptyState}>
      <View style={favoritesStyles.emptyIconContainer}>
        <Ionicons name="heart-outline" size={80} color={COLORS.textLight} />
      </View>
      <Text style={favoritesStyles.emptyTitle}>No favorites yet</Text>
      <TouchableOpacity style={favoritesStyles.exploreButton} onPress={() => router.push("/")}>
        <Ionicons name="search" size={18} color={COLORS.white} />
        <Text style={favoritesStyles.exploreButtonText}>Explore Recipes</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NoFavoritesFound;