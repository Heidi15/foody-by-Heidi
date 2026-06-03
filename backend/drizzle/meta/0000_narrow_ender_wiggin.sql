CREATE TABLE "favorites"()
"id" serial PRIMARY KEY NOT NULL,
"user_id" text NOT NULL,
"recipe_id" integer NOT NULL,
"title" text NOT NULL,
"image" text,
"cook_time" text,
"servings" text,
"created_at" timestamp DEFAULT now()
);












export const favoritesTable = pgTable("favorites", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  recipeId: integer("recipe_id").notNull(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  cookTime: text("cook_time"),
  servings: text("servings"),
  createdAt: timestamp("created_at").defaultNow(),
});