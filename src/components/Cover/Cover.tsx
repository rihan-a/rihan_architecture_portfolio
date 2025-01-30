import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./Cover.css";
import coverImages from "../../coverImages.json";
import { Link } from "react-router-dom";

function Cover() {
    // const [coverUrl, setCoverUrl] = useState<string>("");

    // useEffect(() => {
    //     let imageRandomNumber = Math.floor(Math.random() * 11);
    //     const coverImageUrl = coverImages[0].coverImages[imageRandomNumber];

    //     setCoverUrl(coverImageUrl);
    // }, []);

    return (
        <>
            <NavBar />
            <main className="cover-wrapper">
                <a href="/genai">
                    <img
                        className="genspace-cover"
                        src="https://rihanbucket.s3.us-east-1.amazonaws.com/genspace-ai/GenSpace+Ai.webp"
                        alt="genspace ai cover"
                    />
                </a>
            </main>
        </>
    );
}

export default Cover;
