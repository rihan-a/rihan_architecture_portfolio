const express = require("express");
const cors = require("cors");
const Replicate = require("replicate");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

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
                    output_format: "jpg",
                },
            }
        );

        if (output[0] instanceof ReadableStream) {
            // Convert the ReadableStream into a buffer
            const reader = output[0].getReader();
            const chunks = [];

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(Buffer.from(value));
            }

            const buffer = Buffer.concat(chunks);

            // Save the buffer as an image file
            const filename = `generated-${Date.now()}.jpg`;
            const filepath = path.join(__dirname, "images", filename);

            fs.writeFileSync(filepath, buffer);

            // Send the downloadable URL to the client
            res.json({ outputUrl: `/images/${filename}` });
        } else {
            throw new Error("Unexpected output format from Replicate API");
        }
    } catch (error) {
        console.error("Error generating design:", error);
        res.status(500).json({ error: "Failed to generate design" });
    }
});

// Serve the images folder as static files
app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
