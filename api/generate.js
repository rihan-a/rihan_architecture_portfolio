const express = require("express");
const cors = require("cors");
const Replicate = require("replicate");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

app.post("/generate", async (req, res) => {
    const { prompt } = req.body;

    try {
        const output = await replicate.run(
            "rihan-a/colourful_interiors:ba0425bc2e4bebafa8bd918519fdf3b5a022969a6a7c8ba0746b807bb5b541a3",
            {
                input: {
                    aspect_ratio: "16:9",
                    prompt: prompt,
                },
            }
        );

        // Determine if output is a URL or a ReadableStream
        if (Array.isArray(output) && typeof output[0] === "string") {
            // Output is a URL
            const imageUrl = output[0];
            const response = await fetch(imageUrl);
            const buffer = await response.buffer();

            const filename = `generated-${Date.now()}.jpg`;
            const filepath = path.join("/tmp", filename);

            fs.writeFileSync(filepath, buffer);
            res.json({ outputUrl: `/api/images/${filename}` });
        } else if (Array.isArray(output) && output[0] instanceof ReadableStream) {
            // Output is a ReadableStream
            const stream = output[0];
            const reader = stream.getReader();
            const chunks = [];
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
            }
            const buffer = Buffer.concat(chunks);

            const filename = `generated-${Date.now()}.jpg`;
            const filepath = path.join("/tmp", filename);

            fs.writeFileSync(filepath, buffer);
            res.json({ outputUrl: `/api/images/${filename}` });
        } else {
            throw new Error("Unexpected output format from Replicate API");
        }
    } catch (error) {
        console.error("Error generating design:", error);
        res.status(500).json({ error: "Failed to generate design" });
    }
});

app.get("/api/images/:filename", (req, res) => {
    const { filename } = req.params;
    const filepath = path.join("/tmp", filename);

    if (fs.existsSync(filepath)) {
        res.setHeader("Content-Type", "image/jpeg");
        res.sendFile(filepath);
    } else {
        res.status(404).json({ error: "File not found" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
