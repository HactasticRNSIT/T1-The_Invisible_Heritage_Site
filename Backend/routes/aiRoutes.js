const express = require("express");
const { generateHeritageStory } = require("../services/openaiService");

const router = express.Router();

router.post("/generate-story", async (req, res) => {
  try {
    const story = await generateHeritageStory(req.body);

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

module.exports = router;
