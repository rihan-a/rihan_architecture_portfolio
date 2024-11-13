import NavBar from "../NavBar/NavBar";
import "./About.css";

function About() {
    // extract project id from params

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
                        I’m an architect, designer, and technologist with
                        multidisciplinary expertise spanning computational
                        design, digital fabrication, and advanced project
                        management. With over a decade in the industry, I’ve
                        applied cutting-edge tools and techniques to
                        architectural projects, including the preliminary design
                        of Amsterdam’s 3D-printed bridge—a project realized
                        through complex optimization algorithms. My work also
                        includes high-profile initiatives like the Neom master
                        plan and the German Expo pavilion in Dubai, where I
                        brought innovative thinking to large-scale urban and
                        exhibition spaces.
                    </p>
                    <p>
                        In addition to my design expertise, I honed my project
                        management skills while leading engineering teams at
                        Tesla's Berlin Gigafactory. There, I played an
                        instrumental role in driving complex projects to
                        completion, effectively balancing technical challenges
                        with tight timelines. This role required not only
                        technical precision but also a strong aptitude for
                        problem-solving and adaptability—skills I bring to every
                        project.
                    </p>
                    <p>
                        Now based in Berlin, I’m exploring new realms in web
                        development, AI, and digital art, driven by a passion
                        for creating impactful, future-oriented solutions. My
                        career reflects a continuous commitment to bridging
                        architecture, technology, and entrepreneurial
                        innovation, and I’m constantly pushing the boundaries of
                        what design can achieve.
                    </p>
                </section>
            </section>
        </>
    );
}

export default About;
