import React, { useState, useRef, useEffect } from "react";
import "./ChatBot.css";
// Types
type Message = {
    id: string;
    text: string;
    sender: "bot" | "user";
    options?: string[];
};

type ChatbotProps = {
    onPromptGenerated: (prompt: string) => void;
};

const Chatbot: React.FC<ChatbotProps> = ({ onPromptGenerated }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState("");
    const [currentStep, setCurrentStep] = useState(0);
    const [promptData, setPromptData] = useState({
        style: "",
        roomType: "",
        colors: "",
        furniture: "",
        lighting: "",
        mood: "",
        specifics: "",
    });
    const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatMessagesRef = useRef<HTMLDivElement>(null);

    // Chatbot conversation flow
    const chatFlow = [
        {
            question:
                "Hi there! I'll help you create the perfect interior design prompt. First, what room would you like to design? (e.g., living room, bedroom, kitchen)",
            field: "roomType",
            options: [
                "Living Room",
                "Bedroom",
                "Kitchen",
                "Bathroom",
                "Office",
                "Dining Room",
            ],
        },
        {
            question: "Great choice! What style are you looking for?",
            field: "style",
            options: [
                "Minimalist",
                "Modern",
                "Scandinavian",
                "Industrial",
                "Mid-Century",
                "Bohemian",
                "Traditional",
                "Art Deco",
            ],
        },
        {
            question:
                "What color palette would you prefer? You can mention specific colors or a general theme.",
            field: "colors",
            options: [
                "Neutral & Earthy",
                "Bold & Vibrant",
                "Pastel",
                "Monochromatic",
                "Black & White",
                "Warm Tones",
                "Cool Tones",
            ],
        },
        {
            question:
                "Any specific furniture or elements you'd like to include?",
            field: "furniture",
            options: [
                "Cozy Seating",
                "Statement Pieces",
                "Minimal Furniture",
                "Natural Materials",
                "Vintage Elements",
                "Smart Furniture",
            ],
        },
        {
            question: "What kind of lighting do you envision?",
            field: "lighting",
            options: [
                "Bright & Airy",
                "Warm & Cozy",
                "Dramatic",
                "Natural Light",
                "Statement Lighting Fixtures",
                "Ambient Lighting",
            ],
        },
        {
            question: "What mood or atmosphere are you aiming to create?",
            field: "mood",
            options: [
                "Relaxing",
                "Energizing",
                "Luxurious",
                "Playful",
                "Serene",
                "Productive",
                "Cozy",
            ],
        },
        {
            question:
                "Any additional details or specific requirements you'd like to add?",
            field: "specifics",
            options: ["Yes", "No"],
        },
    ];

    // Scroll only within the chatbot container
    const scrollToBottom = () => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop =
                chatMessagesRef.current.scrollHeight;
        }
    };

    // Auto-scroll to bottom of messages when messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Initialize chat with first question
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: "1",
                    text: chatFlow[0].question,
                    sender: "bot",
                    options: chatFlow[0].options,
                },
            ]);
        }
    }, []);

    const handleSendMessage = (e?: React.FormEvent | React.MouseEvent) => {
        // Stop form submission and propagation
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (userInput.trim() === "") return;

        // Add user message
        const newUserMessage: Message = {
            id: Date.now().toString(),
            text: userInput,
            sender: "user",
        };

        setMessages((prev) => [...prev, newUserMessage]);

        // Update prompt data with user's answer
        const currentField = chatFlow[currentStep].field;
        setPromptData((prev) => ({
            ...prev,
            [currentField]: userInput,
        }));

        setUserInput("");

        // Move to next step
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);

        // If more questions, ask next question
        if (nextStep < chatFlow.length) {
            setTimeout(() => {
                const nextQuestion: Message = {
                    id: (Date.now() + 1).toString(),
                    text: chatFlow[nextStep].question,
                    sender: "bot",
                    options: chatFlow[nextStep].options,
                };
                setMessages((prev) => [...prev, nextQuestion]);
            }, 500);
        } else {
            // All questions answered, generate prompt
            setIsGeneratingPrompt(true);
            setTimeout(() => {
                generateFinalPrompt();
            }, 1000);
        }
    };

    const handleOptionClick = (option: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setUserInput(option);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            handleSendMessage();
        }
    };

    const generateFinalPrompt = () => {
        // Create a structured prompt for stable diffusion
        const prompt = `A detailed interior design of a ${
            promptData.style
        } ${promptData.roomType.toLowerCase()} with ${
            promptData.colors
        } colors. The space features ${promptData.furniture} and ${
            promptData.lighting
        } lighting, creating a ${promptData.mood} atmosphere. ${
            promptData.specifics
        }`;

        // Show generated prompt as a bot message
        const promptMessage: Message = {
            id: Date.now().toString(),
            text: "Perfect! Here's your generated prompt:",
            sender: "bot",
        };

        const finalPromptMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: prompt,
            sender: "bot",
        };

        setMessages((prev) => [...prev, promptMessage, finalPromptMessage]);

        // Send prompt to parent component
        onPromptGenerated(prompt);
        setIsGeneratingPrompt(false);

        // Add restart option
        setTimeout(() => {
            const restartMessage: Message = {
                id: (Date.now() + 2).toString(),
                text: "Would you like to create another design prompt?",
                sender: "bot",
                options: ["Start Over"],
            };
            setMessages((prev) => [...prev, restartMessage]);
        }, 1000);
    };

    const resetChat = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setMessages([]);
        setCurrentStep(0);
        setPromptData({
            style: "",
            roomType: "",
            colors: "",
            furniture: "",
            lighting: "",
            mood: "",
            specifics: "",
        });

        // Re-initialize with first question
        setTimeout(() => {
            setMessages([
                {
                    id: Date.now().toString(),
                    text: chatFlow[0].question,
                    sender: "bot",
                    options: chatFlow[0].options,
                },
            ]);
        }, 100);
    };

    return (
        <div className="interior-design-chatbot">
            <div className="chatbot-messages" ref={chatMessagesRef}>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`message ${message.sender}`}
                    >
                        <div className="message-bubble">{message.text}</div>
                        {message.options && message.options.length > 0 && (
                            <div className="message-options">
                                {message.options.map((option) => (
                                    <button
                                        key={option}
                                        className="option-button"
                                        onClick={(e) => {
                                            if (option === "Start Over") {
                                                resetChat(e);
                                            } else {
                                                handleOptionClick(option, e);
                                            }
                                        }}
                                        type="button"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                {isGeneratingPrompt && (
                    <div className="message bot">
                        <div className="message-bubble typing">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your answer..."
                    disabled={
                        isGeneratingPrompt || currentStep >= chatFlow.length
                    }
                />
                <button
                    type="button"
                    onClick={(e) => handleSendMessage(e)}
                    disabled={
                        userInput.trim() === "" ||
                        isGeneratingPrompt ||
                        currentStep >= chatFlow.length
                    }
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
