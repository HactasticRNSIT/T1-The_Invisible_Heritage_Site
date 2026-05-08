import express from "express";
import { generateHeritageStory } from "../services/openaiService.js";

const router = express.Router();

router.post("/generate-story", async (req, res) => {
  try {
    const result = await generateHeritageStory(req.body);

    res.json({
      success: true,
      story: result,
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