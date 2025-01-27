const express = require("express");
const cors = require("cors");
const Replicate = require("replicate");
const dotenv = require("dotenv");
const { Readable } = require("stream");
const { Buffer } = require("buffer");

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

        // Check if the output is a ReadableStream
        if (output[0] instanceof ReadableStream) {
            const stream = output[0];

            // Convert the ReadableStream to a Buffer
            const reader = stream.getReader();
            const chunks = [];
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
            }
            const buffer = Buffer.concat(chunks);

            // Convert the Buffer to a base64-encoded string
            const base64Image = buffer.toString("base64");
            const outputUrl = `data:image/jpeg;base64,${base64Image}`;

            res.json({ outputUrl });
        } else {
            throw new Error("Unexpected output format from Replicate API");
        }
    } catch (error) {
        console.error("Error generating design:", error);
        res.status(500).json({ error: "Failed to generate design" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
