import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core"

export const favoritesTable = pgTable("favorites", {
  id: serial("id").primaryKey(),// Identifiant unique de la ligne
  userId: text("user_id").notNull(),// Identifiant de l'utilisateur
  recipeId: integer("recipe_id").notNull(),// Identifiant de la recette
  title: text("title").notNull(),// Titre de la recette
  image: text("image").notNull(),// URL de l'image de la recette
  cookTime: text("cook_time"),// Temps de cuisson
  servings: text("servings"),// Nombre de portions
  createdAt: timestamp("created_at").defaultNow(),// Date et heure de création du favori
});
//Ce fichier définit la structure de la table "favorites" dans la 
 //base de données PostgreSQL en utilisant Drizzle ORM.
 // Elle stocke toutes les informations nécessaires pour afficher les
 // recettes préférées de chaque utilisateur dans l'application mobile.