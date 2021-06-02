import React from "react";
import AboutComp from "../components/About/About";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import About1 from "../assets/illustrations/about1.svg";
import About2 from "../assets/illustrations/about2.svg";
import About3 from "../assets/illustrations/about3.svg";
import AboutHero from "../assets/illustrations/abouthero.svg";

import "../style/pages/about-page.scss";

const About = () => {
  return (
    <Layout>
      <Hero
        heading="Who are Codava?"
        shortText="We create aesthetically relevant <digital> solutions and experiences. We are your strategy, design and technology partner. We are Codava. "
        icon={<AboutHero />}
      />
      <div className="about-page">
        <section className="section2">
          <AboutComp
            flipped
            heading="Who are you?"
            textParagraph={
              <div>
                <ul>
                  <li>You’ve got a digital itch.</li>
                  <li>You’re looking to refresh your current website.</li>
                  <li>
                    Maybe you’re looking to create a something from scratch.
                  </li>
                  <li>
                    You’re looking for a trustworthy, kinda out there partner to
                    take this load off you.
                  </li>
                  <li>
                    Or maybe interested in boosting your digital presence?
                  </li>
                  <li>Start up a webshop!</li>
                </ul>
                <br />
                <p>
                  Whatever it is - you reading this, is the first step to us
                  making digital magic happen 🧙
                </p>
              </div>
            }
          >
            <About1 className="icon" />
          </AboutComp>
        </section>
        <section className="section3">
          <AboutComp
            heading="What & How"
            textParagraph={
              <>
                <ul>
                  <li> First, we Frame & Discover.</li>
                  <li>
                    We gain an immersed understanding of your commercial goals
                    and what’s important to YOU. Think: target audience, user
                    personas, future roadmaps. Got it? Fantastic!
                  </li>
                  <li>Then, we Define & Develop.</li>
                  <li>
                    Creating simple, engaging and business relevant experiences
                    for our clients is at the core of what Codava is all about.
                    We work along these premises, together with you, to create
                    the perfect game-plan. Think: timelines, KPIs, deliverable
                    defining etc.
                  </li>
                  <li>Finally, we Build & Launch.</li> <br />
                </ul>
                <p>
                  We want to make sure that anything we build will grow together
                  with you. That’s why we aim for scalable and unique end
                  products and concept-driven design solutions. Think: websites,
                  apps, brand books.
                </p>
              </>
            }
          >
            <About2 />
          </AboutComp>
        </section>
        <section className="section4">
          <AboutComp
            heading="Why?"
            flipped
            textParagraph={
              <>
                <p>
                  Are you future-proof? This is a question you should be
                  constantly asking yourself. With our team of strategy
                  detectives, we’ll ask the real questions. We make sure to
                  design
                  <strong>{` <digital> `}</strong> experiences that work for
                  your needs. Solutions that are timeless and business relevant.
                  We want to be your allies in your success, because the better
                  you do - the better we do. Let’s dare to think new, think{" "}
                  <b>bold</b> and think <u>unique</u>. Let’s make sure your
                  digital presence is one that has consistency, one that
                  promotes engagement and one that is memorable.
                </p>
              </>
            }
          >
            <About3 />
          </AboutComp>
        </section>
      </div>
    </Layout>
  );
};

export default About;
