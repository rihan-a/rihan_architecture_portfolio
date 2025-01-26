import NavBar from "../NavBar/NavBar";
import "./Ai.css";
import aiImages from "../../ai-images.json";

function Ai() {
    // extract project id from params

    return (
        <>
            <NavBar />

            {/* -----  Render project images ------ */}

            <section className="ai-page-main-title">
                <h2>Generative Ai Experiments in Architecture</h2>
            </section>

            <div className="sketch-txt-cover">
                <h3 className="txt-cover-title">SKETCH2IMG Ai Model</h3>
                <h3 className="txt-cover-desc">
                    Simple sketch as an input plus a text prompt to endless
                    possibilities, using Stable Diffuison Ai + ComfyUi +
                    ControlNet
                </h3>
            </div>

            <section className="ai-cover-container">
                <img src="/images/sketch2img01.webp" alt="sketch2img ai" />
            </section>

            <div className="sketch-txt-cover">
                <h3 className="txt-cover-title">IMG2IMG Ai Model</h3>
                <h3 className="txt-cover-desc">
                    Image as an input plus a text prompt to endless
                    possibilities, using Stable Diffuison Ai + ComfyUi +
                    ControlNet
                </h3>
            </div>

            <section className="ai-cover-container img2img">
                <img src="/images/img2img.webp" alt="img2img ai" />
            </section>
            {/* <section className="ai-cover-container img2img gif">
                <img
                    src="https://rihanbucket.s3.amazonaws.com/AI/img2img-gif.webp"
                    alt="img2img ai"
                />
            </section> */}

            <div className="sketch-txt-cover">
                <h3 className="txt-cover-title">TXT2IMG Ai Model</h3>
                <h3 className="txt-cover-desc">
                    Promt as an input, using Stable Diffuison Ai + ComfyUi
                </h3>
            </div>

            {/* <section className="ai-cover-container img2img gif">
                <img
                    src="https://rihanbucket.s3.amazonaws.com/AI/txt2img-interior-gif.webp"
                    alt="txt2img ai"
                />
            </section> */}

            <section className="ai-gallery">
                {aiImages[0].aiImages
                    .sort((a, b) => 0.5 - Math.random())
                    .map((img: string) => {
                        return (
                            <img
                                className="gallery-ai-img"
                                src={img}
                                alt="ai generated building"
                                key={img}
                            />
                        );
                    })}
            </section>

            {/* -----  Render project videos ------ */}
        </>
    );
}

export default Ai;
