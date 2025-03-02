// components/PromptInput.tsx
import React from "react";

interface PromptInputProps {
    prompt: string;
    setPrompt: (value: string) => void;
    loading: boolean;
    onGenerate: () => void;
    error: string;
    setError: (error: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({
    prompt,
    setPrompt,
    loading,
    onGenerate,
    error,
    setError,
}) => {
    const minWords = 5;
    const requiredKeywords = [
        "room",
        "kitchen",
        "bedroom",
        "living",
        "interior",
        "design",
        "office",
        "furniture",
        "cafe",
        "coffee shop",
        "office",
        "shop",
    ];

    const validatePrompt = (text: string) => {
        const words = text.trim().split(/\s+/);
        if (words.length < minWords) {
            return `Please provide a more detailed prompt (at least ${minWords} words).`;
        }

        const hasKeyword = requiredKeywords.some((keyword) =>
            text.toLowerCase().includes(keyword)
        );
        if (!hasKeyword) {
            return "Please mention the space (e.g., 'modern living room with wooden furniture').";
        }

        return "";
    };

    const handleGenerateClick = () => {
        const errorMessage = validatePrompt(prompt);
        if (errorMessage) {
            setError(errorMessage);
            return;
        }
        onGenerate();
    };

    return (
        <div className="prompt-input-container">
            <textarea
                className="idg-input"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the interior space you want..."
                disabled={loading}
                autoCorrect="on"
                autoComplete="on"
            />

            <button
                onClick={handleGenerateClick}
                className="idg-button"
                disabled={loading || !prompt.trim()}
            >
                {loading ? <div className="spinner"></div> : "Generate Design"}
            </button>

            {error && <p className="idg-error">{error}</p>}
        </div>
    );
};

export default PromptInput;
