import "./Cover.css";

function Cover() {
    return (
        <>
            <main className="cover-wrapper">
                <a href="/genai">
                    <img
                        className="genspace-cover"
                        src="https://rihanbucket.s3.us-east-1.amazonaws.com/genspace-ai/GenSpace+Ai-cover.webp"
                        alt="genspace ai cover"
                    />
                </a>
            </main>
        </>
    );
}

export default Cover;
