import express from "express";
import { ENV } from "./config/env.js"; // Assure-toi que le chemin est correct
import { db } from "./config/db.js";
import { favoritesTable } from "./db/schema.js";

const app = express();
const PORT = ENV.PORT || 5001; // Utilise la variable centralisée de ton fichier env.js

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true });
});

app.post("/api/favorites", async (req, res) => {
  try {
    const { userId, recipeId, title, image, cookTime, servings } = req.body;

    if (!userId || !recipeId || !title || !image) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newFavorite = await db
      .insert(favoritesTable)
      .values({
        userId,
        recipeId,
        title,
        image,
        cookTime,
        servings,
      })
      .returning();

    res.status(201).json(newFavorite[0]);
  } catch (error) {
    console.error("Error adding favorite:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Utilise la variable PORT ici pour que ce soit dynamique !
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});