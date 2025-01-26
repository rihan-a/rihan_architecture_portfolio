import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./About.css";

function About() {
    // extract project id from params
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
    };

    return (
        <>
            <NavBar />

            <section className="about-page-main-title">
                <h2>About me</h2>
            </section>

            <section className="about-container">
                <section className="about-photo">
                    <img src="/images/rihan-photo.webp" alt="building" />
                </section>

                <section className="about-txt">
                    <p>
                        I’m a software engineer, designer, and technologist with
                        a unique background in architecture and advanced project
                        management. With over a decade of experience in
                        architecture and computational design, I’ve transitioned
                        into software engineering to explore the transformative
                        potential of technology and AI.
                    </p>
                    <p>
                        My career began with groundbreaking projects like the
                        preliminary design of Amsterdam’s 3D-printed bridge,
                        leveraging optimization algorithms, and large-scale
                        initiatives like the Neom master plan and the German
                        Expo pavilion in Dubai. Leading engineering teams at
                        Tesla's Berlin Gigafactory further refined my skills in
                        delivering complex, multidisciplinary projects under
                        tight deadlines, sharpening my ability to balance
                        technical challenges with innovative problem-solving.
                    </p>

                    <p>
                        Over the past two years, I’ve immersed myself in
                        software engineering, specializing in web development,
                        AI integration, and building scalable, future-oriented
                        solutions. I’m passionate about creating tools and
                        platforms that bridge design, technology, and
                        human-centric innovation. My expertise spans
                        computational design, digital fabrication, project
                        management, and now full-stack development, allowing me
                        to approach challenges with a multidisciplinary
                        perspective.
                    </p>
                    <p>
                        Based in Berlin, I’m driven by a commitment to
                        leveraging technology to create impactful solutions,
                        from smart applications to AI-powered tools. My journey
                        reflects a dedication to lifelong learning,
                        adaptability, and pushing boundaries—qualities I bring
                        to every project and team I join.
                    </p>
                    <button className="btn-contact" onClick={handleClick}>
                        Contact me!
                    </button>
                </section>
            </section>
        </>
    );
}

export default About;
