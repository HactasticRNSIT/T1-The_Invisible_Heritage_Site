import express from "express";
import { generateHeritageStory } from "../services/openaiService.js";

const router = express.Router();

router.post("/generate-story", async (req, res) => {
  try {
    const siteData = req.body;

    const story = await generateHeritageStory(siteData);

    res.json({
      success: true,
      story,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "AI generation failed",
    });
  }
});

export default router;