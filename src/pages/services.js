import React from "react";
import Layout from "../components/Layout/Layout";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import "../style/pages/service-page.scss";
import Webdevelopment from "../assets/illustrations/serviceWebDev.svg";
import Webdesign from "../assets/illustrations/servicesWebDes.svg";

const Services = () => {
  return (
    <Layout>
      <div className="service-page">
        <section className="service-container">
          <ServiceCard
            projectImg={<Webdevelopment />}
            projectTitle="Web Development"
            flipped
            text="We specialise in Web Development for small - medium businesses in Sweden. We create websites and web applications using the latest technologies such as React.js, Next.js, Gatsby.js, styled-components and more."
          />
          <ServiceCard
            projectImg={<Webdesign />}
            projectTitle="Web Design"
            text="With the user in mind, we create highly functional and clear Design prototypes, wireframes and layouts."
          />
        </section>
      </div>
    </Layout>
  );
};

export default Services;
