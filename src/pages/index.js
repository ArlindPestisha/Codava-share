import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import HomeHero from "../assets/illustrations/homehero.svg";
const IndexPage = () => (
  <Layout>
    <Hero
      heading="We create aesthetically 
      relevant <digital> solutions 
      and experiences."
      shortText="Meet your buddy, your partner, your ally.
      We are your strategy, design and 
      technology partner."
      brandText="We are Codava."
      icon={<HomeHero />}
      toggleButton
    />
  </Layout>
);

export default IndexPage;
