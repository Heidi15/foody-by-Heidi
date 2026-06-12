import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import { homeStyles } from "../assets/styles/home.styles";

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <View style={homeStyles.categoryFilterContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={homeStyles.categoryFilterScrollContent}
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category.name;
          return (
            <TouchableOpacity
              key={category.id}
              style={[homeStyles.categoryButton, isSelected && homeStyles.selectedCategory]}
              onPress={() => onSelectCategory(category.name)}
              activeOpacity={0.7}
            >
              <Image
                source={{ uri: category.image }}
                style={[homeStyles.categoryImage, isSelected && homeStyles.selectedCategoryImage]}
                contentFit="cover"
                transition={300}
              />
              <Text
                style={[homeStyles.categoryText, isSelected && homeStyles.selectedCategoryText]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

//Le composant reçoit en paramètres :
// - categories : la liste des catégories à afficher
// - selectedCategory : le nom de la catégorie actuellement active
// - onSelectCategory : la fonction à déclencher quand on clique sur une catégorie