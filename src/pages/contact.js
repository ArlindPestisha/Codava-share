import React from "react";
import Layout from "../components/Layout/Layout";
import "../style/pages/contact-page.scss";
import Hero from "../components/Hero/Hero";
import ContactHero from "../assets/illustrations/contact.svg";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page">
        <Hero
          className="hero"
          heading="Where? 
          Head in the <digital> clouds, feet in Stockholm city."
          shortText={<a href="mailto:hello@codava.se">hello@codava.se</a>}
          icon={<ContactHero />}
        />
      </div>
    </Layout>
  );
};

export default Contact;
